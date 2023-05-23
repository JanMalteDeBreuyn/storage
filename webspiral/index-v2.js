// Register GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.set("html, body", { scrollBehavior: "auto" });

function resetAnimations(data) {
  // Header scroll
  let headerMarque = gsap.timeline({
    defaults: {
      duration: 40,
      repeat: -1,
      ease: Linear.easeNone
    }
  });
  headerMarque.to(".scroller-left", {
    xPercent: -50
  });
  headerMarque.to(
    ".scroller-right",
    {
      xPercent: 0
    },
    0
  );

  // Hover
  $(".scroller_item").each(function (index) {
    let tl = gsap.timeline({
      repeat: -1, // repeat infinite
      ease: "power2.in" // easing for the whole timeline
    });
    tl.from($(this).find(".floating-icon"), {
      scale: 0.6,
      opacity: 0,
      duration: 0.8,
      stagger: 0.5,
      ease: "power1.in"
    })
      .to(
        $(this).find(".scroller_item_overlay"),
        {
          scale: 1.3,
          duration: 4.8,
          ease: "power1.in"
        },
        0
      )
      .to(
        icon,
        {
          opacity: 0,
          duration: 0.8,
          stagger: 0.5,
          ease: "power1.in"
        },
        2.5
      );
    tl.pause();
    $(this).hover(
      function () {
        tl.restart();
      },
      function () {
        tl.pause();
        gsap.to($(this).find(".scroller_item_overlay"), {
          scale: 1,
          duration: 1.3
        });
        gsap.to($(this).find(".floating-icon"), {
          opacity: 0,
          duration: 0.3,
          stagger: 0.2,
          ease: "power1.in"
        });
      }
    );
  });

  // Marque
  $(".marque-infinite").each(function (index) {
    let movingTextLeft = $(this).find(".marque_move-left");
    let movingTextRightFast = $(this).find(".marque_move-right.is-fast");
    let movingTextRightMedium = $(this).find(".marque_move-right.is-medium");
    let movingTextRightSlow = $(this).find(".marque_move-right.is-slow");

    gsap.timeline().to(movingTextRightFast, {
      xPercent: -50,
      duration: 20,
      ease: Linear.easeNone,
      repeat: -1,
      repeatDelay: 0
    });
    gsap.timeline().to(movingTextRightMedium, {
      xPercent: -50,
      duration: 25,
      ease: Linear.easeNone,
      repeat: -1,
      repeatDelay: 0
    });
    gsap.timeline().to(movingTextRightSlow, {
      xPercent: -50,
      duration: 30,
      ease: Linear.easeNone,
      repeat: -1,
      repeatDelay: 0
    });
  });

  function slider1() {
    let splides = $(".slide-virtual-identities");
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
      new Splide(splides[i], {
        // Desktop on down
        perPage: 3,
        perMove: 1,
        focus: 0, // 0 = left and 'center' = center
        type: "slide", // 'loop' or 'slide'
        arrows: false, // 'slider' or false
        pagination: false, // 'slider' or false
        speed: 600, // transition speed in miliseconds
        dragAngleThreshold: 60, // default is 30
        autoWidth: false, // for cards with differing widths
        rewind: false, // go back to beginning when reach end
        rewindSpeed: 400,
        waitForTransition: false,
        updateOnMove: true,
        trimSpace: false, // true removes empty space from end of list
        breakpoints: {
          991: {
            // Tablet
            perPage: 2
          },
          767: {
            // Mobile Landscape
            perPage: 1
          },
          479: {
            // Mobile Portrait
            perPage: 1
          }
        }
      }).mount();
    }
  }
  slider1();

  function slider2() {
    let splides = $(".slide-ui-ux");
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
      new Splide(splides[i], {
        // Desktop on down
        perPage: 3,
        perMove: 1,
        focus: 0, // 0 = left and 'center' = center
        type: "slide", // 'loop' or 'slide'
        arrows: false, // 'slider' or false
        pagination: false, // 'slider' or false
        speed: 600, // transition speed in miliseconds
        dragAngleThreshold: 60, // default is 30
        autoWidth: false, // for cards with differing widths
        rewind: false, // go back to beginning when reach end
        rewindSpeed: 400,
        waitForTransition: false,
        updateOnMove: true,
        trimSpace: false, // true removes empty space from end of list
        breakpoints: {
          991: {
            // Tablet
            perPage: 2
          },
          767: {
            // Mobile Landscape
            perPage: 1
          },
          479: {
            // Mobile Portrait
            perPage: 1
          }
        }
      }).mount();
    }
  }
  slider2();

  function slider3() {
    let splides = $(".slide-webdesign");
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
      new Splide(splides[i], {
        // Desktop on down
        perPage: 3,
        perMove: 1,
        focus: 0, // 0 = left and 'center' = center
        type: "slide", // 'loop' or 'slide'
        arrows: false, // 'slider' or false
        pagination: false, // 'slider' or false
        speed: 600, // transition speed in miliseconds
        dragAngleThreshold: 60, // default is 30
        autoWidth: false, // for cards with differing widths
        rewind: false, // go back to beginning when reach end
        rewindSpeed: 400,
        waitForTransition: false,
        updateOnMove: true,
        trimSpace: false, // true removes empty space from end of list
        breakpoints: {
          991: {
            // Tablet
            perPage: 2
          },
          767: {
            // Mobile Landscape
            perPage: 1
          },
          479: {
            // Mobile Portrait
            perPage: 1
          }
        }
      }).mount();
    }
  }
  slider3();

  function slider4() {
    let splides = $(".slide-webflow");
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
      new Splide(splides[i], {
        // Desktop on down
        perPage: 3,
        perMove: 1,
        focus: 0, // 0 = left and 'center' = center
        type: "slide", // 'loop' or 'slide'
        arrows: false, // 'slider' or false
        pagination: false, // 'slider' or false
        speed: 600, // transition speed in miliseconds
        dragAngleThreshold: 60, // default is 30
        autoWidth: false, // for cards with differing widths
        rewind: false, // go back to beginning when reach end
        rewindSpeed: 400,
        waitForTransition: false,
        updateOnMove: true,
        trimSpace: false, // true removes empty space from end of list
        breakpoints: {
          991: {
            // Tablet
            perPage: 2
          },
          767: {
            // Mobile Landscape
            perPage: 1
          },
          479: {
            // Mobile Portrait
            perPage: 1
          }
        }
      }).mount();
    }
  }
  slider4();

  Splitting();
  let fx16Titles = [
    ...document.querySelectorAll(".fade-letters[data-splitting][data-effect16]")
  ];

  // GSAP Scroll Triggers
  let scroll = () => {
    fx16Titles.forEach((title) => {
      gsap.fromTo(
        title,
        {
          transformOrigin: "0% 50%",
          rotate: 1
        },
        {
          ease: "none",
          rotate: 0,
          scrollTrigger: {
            trigger: title,
            start: "top bottom",
            end: "top top",
            scrub: true
          }
        }
      );

      gsap.fromTo(
        title.querySelectorAll(".word"),
        {
          "will-change": "opacity",
          opacity: 0.2
        },
        {
          ease: "none",
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: title,
            start: "top bottom",
            end: "center top+=40%",
            scrub: true
          }
        }
      );
    });
  };
  scroll();
}
resetAnimations();