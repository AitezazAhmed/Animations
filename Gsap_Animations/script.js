
/**
 * @type {import("gsap").gsap}
 */
const gsap = window.gsap;

gsap.to(".box1",{
    x:1000,
    duration:2,
    delay:0.5,
    borderRadius:"100px",
    backgroundColor:"pink",
    scaleX:1.4,
    scaleY:1,
    repeat:-1,
    yoyo:1,
    rotate:360
})
gsap.from(".box2",{
    x:1000,
    duration:2,
    delay:0.5,
    borderRadius:"100px",
    backgroundColor:"pink",
    scaleX:1.4,
    scaleY:1,
    repeat:-1,
    yoyo:1,
    rotate:360
})
gsap.from("h1",{
    y:50,
    duration:1,
    delay:0.5,
    opacity:0,
    repeat:-1,
    yoyo:1
})
var tl=gsap.timeline()
tl.from(".box3",{
  
    y:50,
    duration:0.5,
    delay:0.5,
    yoyo:1,
    repeat:-1,
    borderRadius:"50%"
 
})
tl.from(".box4",{
    y:50,
    duration:0.5,
    delay:0.5,
    yoyo:1,
    repeat:-1,
     borderRadius:"50%"
   
})
tl.from(".box5",{
  
    y:50,
    duration:0.5,
    delay:0.5,
    yoyo:1,
    repeat:-1,
     borderRadius:"50%"
   
})

