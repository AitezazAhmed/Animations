/**
 * @type {import("gsap").gsap}
 */
const gsap = window.gsap;



gsap.from("#page1 #box1",{
    scale:0,
    delay:1,
    duration:1,
    borderRadius:"50%"
})
gsap.from("#page2 #box2",{
    scale:0,
    borderRadius:"50%",
    scrollTrigger:{
        trigger:"#page2 #box2",
        markers:true,
        scroller:"body",
        scrub:5,
        start:"top 90%",
        end:"top 50%"
       
    }
})
gsap.from("#page3 #box3",{
    scale:0,
    delay:1,
    duration:1,
    x:700,
    rotate:360,
    borderRadius:"50%",
    scrollTrigger:{
        trigger:"#page3 #box3",
        markers:true,
        scroller:"body",
        scrub:5,
        start:"top 90%",
        end:"top 50%"
       
    }
})