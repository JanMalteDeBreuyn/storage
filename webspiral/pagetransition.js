/* Reset Webflow */
function resetWebflow(data) {
  let parser = new DOMParser();
  let dom = parser.parseFromString(data.next.html, "text/html");
  let webflowPageId = $(dom).find("html").attr("data-wf-page");
  $("html").attr("data-wf-page", webflowPageId);
  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();
  window.Webflow && window.Webflow.require("ix2").init();
}
/* Reset Cursors */
function cursorInteractions(data) {
  /* Link Hover */
  $("a")
    .on("mouseenter", function () {
      $(".cursor-link").addClass("active");
    })
    .on("mouseleave", function () {
      $(".cursor-link").removeClass("active");
    });

  /* Drag Hover */
  $(".slider-wrapper")
    .on("mouseenter", function () {
      $(".cursor-drag").addClass("active");
    })
    .on("mouseleave", function () {
      $(".cursor-drag").removeClass("active");
    });

  /* Scroller Hover */
  $(".scroller_item")
    .on("mouseenter", function () {
      $(".cursor-smiley").addClass("active");
    })
    .on("mouseleave", function () {
      $(".cursor-smiley").removeClass("active");
    });

  /* Cursor Hover Accordion */
  $(".accordion_item_header")
    .on("mouseenter", function () {
      $(".cursor-plus").addClass("active");
      if ($(this).hasClass("active")) {
        $(".cursor-plus").addClass("rotate");
      } else {
        $(".cursor-plus").removeClass("rotate");
      }
    })
    .on("mouseleave", function () {
      $(".cursor-plus").removeClass("active");
    });

  $(".accordion_item_header").on("click", function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".cursor-plus").addClass("rotate");
    } else {
      $(".cursor-plus").removeClass("rotate");
    }
  });

  $(".accordion_item_header").on("click", function () {
    smoother.paused(true);
    setTimeout(() => {
      smoother.paused(false);
    }, 400);
  });
}
function resetCursor(data) {
  $(".cursor-link, .cursor-plus, .cursor-smiley, .cursor-drag").removeClass(
    "active"
  );
}
/**
 * ScrollSmoother init
 */
cursorInteractions();
resetCursor();
resetAnimations();
ScrollSmoother.create({
  smooth: 1
});

const smootherInit = function () {
  ScrollSmoother.create({
    smooth: 1
  });
};
/**
 * Page transition animations
 */
const animPageLeave = function () {
  return gsap.to(".barba-container", {
    opacity: 0
  });
};

const animPageEnter = function () {
  return gsap.from(".barba-container", {
    opacity: 0
  });
};

/**
 * Barba
 */

barba.hooks.afterLeave(() => {
  killScrollTriggers();
});

barba.hooks.enter((data) => {
  window.scrollTo(0, 0);
  smootherInit();
  let transitionData = data;
  resetWebflow(transitionData);
  cursorInteractions();
  resetCursor();
  resetAnimations();
});

barba.init({
  timeout: 5000,
  transitions: [
    {
      leave: () => animPageLeave(),
      enter(data) {
        animPageEnter();
      }
    }
  ]
});

/**
 * Kill ScrollTriggers
 */

const killScrollTriggers = function () {
  let count = 0;
  let triggers = ScrollTrigger.getAll();

  triggers.forEach(function (trigger) {
    count += 1;
    trigger.kill(true);
  });

  console.log(count + " ScrollTriggers killed");
};
