

function pageEnter(){
    let t1Header = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-header-home",
      start: "top top",
      top: "bottom top",
      scrub: 1
    }
  });
  t1Header.to(".header-home_left", {
    yPercent: -20
  })
  t1Header.to(".header-home_right", {
    yPercent: -10
  }, 0);



// Spiral Service
  let trigger = $(this);
  let marqueLeft = $(this).find(".marque_move-left");
  let marqueRight = $(this).find(".marque_move-right");

  let t1Marque = gsap.timeline({
    scrollTrigger: {
      trigger: ".marque",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });
  t1Marque.fromTo(".marque_move-left", {
    xPercent: -16
  }, {
     xPercent: -23,
    duration: 1
  });
  
  t1Marque.fromTo(".marque_move-right", {
    xPercent: -28
  },{
  	xPercent: -22,
    duration: 1
  }, 0);

  let t1MarqueScreens = gsap.timeline({
    scrollTrigger: {
      trigger: ".marque-screens",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });
  
  t1MarqueScreens.fromTo(".screen-left", {
    x:"random(-100, -50)",
    y:"random(20, 40)"
  }, {
    x:"random(-150, -200)",
    y:"random(-20, -40)",
    duration: 1
  });
  
  t1MarqueScreens.fromTo(".screen-right", {
    x:"random(-200, -250)",
    y:"random(20, 40)"
  },{
  	x:"random(-100, -50)",
    y:"random(-20, -40)",
    duration: 1
  }, 0);
}
pageEnter();
