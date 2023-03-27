gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.set("html, body", {scrollBehavior: "auto"});
  
  // create the smooth scroller
  let smoother = ScrollSmoother.create({
    smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true,           // looks for data-speed and data-lag attributes on elements
  });
  
  
// Navigation Open
gsap.set(".navigation-fullscreen-wrapper", {
    autoAlpha: 0,
})
gsap.set(".navigation-close", {
    autoAlpha: 0,
})

let navOpen = gsap.timeline();
navOpen.paused(true);

navOpen.to(".navigation-open_icon", {
    opacity: 0,
    scale: 0.8,
    duation: 0.5
}, 0)
navOpen.to(".navigation-fullscreen-wrapper", {
    autoAlpha: 1,
    duration: 0.5
}, 0)
navOpen.from(".navigation-fullscreen_link", {
    opacity: 0,
    y: "2rem",
    stagger: 0.2,
    duration: 1
})
navOpen.from(".navigation-fullscreen_subcontent_topinfo > div", {
    opacity: 0,
    y: "1rem",
    stagger: 0.2
}, "<")
navOpen.from(".navigation-fullscreen_subcontent .link-row", {
    opacity: 0,
    y: "1rem"
}, "<")
navOpen.to(".navigation-close", {
    autoAlpha: 1,
    scale: 1,
    duration: 1
}, 0.5)

$(".navigation-open").click(function() {
    console.log( "Navigation Open" );
    smoother.paused(true);
    navOpen.play();
});

$(".navigation-close").click(function() {
    console.log( "Navigation Close" );
    navOpen.reverse(1.4);
    smoother.paused(false);
});


// website Enter
function websiteEnter(){

  // Navigation on scroll
  $(".navigation").each(function (index) {
    let triggerElement = $(".navigation-placeholder");
    let targetElement = $(".menu-start");

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "100px top",
        scrub: 0
      }
    });
    t1.fromTo(targetElement, {
      opacity: "1",
      x: "0"
    },
      {
        opacity: "0",
        x: "1.5rem",
        duration: 1,
        autoAlpha: 0,
      }
    );
  });

  // Pin to top
  gsap.utils.toArray(".pin-top").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top", 
      pin: true, 
      pinSpacing: false 
    });
  });

  // Contact card
  $(".trigger-contact").click(function() {
    gsap.to(window, 1, {scrollTo:"#footer-box"});
	});

  let contactCardTrigger = $(".contact-card");
  let movingText = $(".contact-card_move");
  let movingTextOffset = $(".contact-card_move").innerWidth;

  let tContactCard = gsap.timeline({
    scrollTrigger: {
      trigger: contactCardTrigger,
      toggleActions: "restart pause resume pause",
      start: "top bottom"
    }
  });
  tContactCard.to(movingText, {
    xPercent: -25,
    duration: 20,
    ease:Linear.easeNone,
    repeat:-1, 
    repeatDelay: 0
  });

}
websiteEnter();

// Webflow interactions reset
function resetWebflow(data) {
  let parser = new DOMParser();
  let dom = parser.parseFromString(data.next.html, "text/html");
  let webflowPageId = $(dom).find("html").attr("data-wf-page");
  $("html").attr("data-wf-page", webflowPageId);
  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();
  window.Webflow && window.Webflow.require("ix2").init();
}


barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0,
        duration: 0.5
      });
    },
    enter(data) {
      let transitionData = data;
      return gsap.from(data.next.container, {
        opacity: 0,
        duration: 1
        onComplete: () => {
          $(window).scrollTop(0);
          
          // Get the current ScrollSmoother instance and 'reset' it
          var sm = ScrollSmoother.get();
          sm.scrollTo(0);
          sm.kill();

          // Recreating the ScrollSmoother
          ScrollSmoother.create({
            smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
            effects: true,           // looks for data-speed and data-lag attributes on elements
            smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
          });

          // Restart functions
          websiteEnter();
          pageEnter();
          resetWebflow(transitionData);
      }
      });
    }
  }]
});
