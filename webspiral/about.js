
function pageEnter(){
    let t1Header = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-header-about",
      start: "top top",
      top: "bottom top",
      scrub: 1
    }
  });
  t1Header.to(".header-about_01", {
    yPercent: -40
  })
  t1Header.to(".header-about_02", {
    yPercent: -30
  }, 0)
  t1Header.to(".header-about_03", {
    yPercent: -20
  }, 0);

 $(".marque").each(function (index) {
  let trigger = $(this);
  let marqueLeft = $(this).find(".marque_move-left");
  let marqueRight = $(this).find(".marque_move-right");

  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top bottom",
      top: "bottom top",
      scrub: 1
    }
  });
  t1.fromTo(marqueLeft, {
    xPercent: -15
  }, {
     xPercent: -20,
    duration: 1
  });
  
  t1.fromTo(marqueRight, {
    xPercent: -30
  },{
  	xPercent: -25,
    duration: 1
  }, 0);
});
}
pageEnter();
