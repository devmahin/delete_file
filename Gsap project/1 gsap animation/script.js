var tl = gsap.timeline()
tl.from(".nav1", {
    delay:1,
    opacity:0,
    y:10,
    duration:2,
})
// .from(".nav2", {
//     opacity:0,
//     y:5,
//     duration:2,
// })
.from(".sell h2", {
    opacity:0,
    scale:1.3,
    duration:1,
})
.from([".parfium" ,".light"], {
    opacity:0,
    scale:1.6,
    x:-60,
    duration:1,
})
.from([".sempu" , ".vitamin"], {
    opacity:0,
    scale:1.6,
    x:60,
    duration:1,
})