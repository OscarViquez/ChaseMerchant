
let timelineLanding = gsap.timeline()
timelineLanding.fromTo('.landing-img__container', {
    opacity: 0
}, {
    opacity: 1,
    delay: .5,
    duration: 1
})
// .fromTo('.landing-text__company', {
//     opacity: 0,
//     x: 20
// }, {
//     x: 0,
//     opacity: 1,
//     duration: .5
// },">-.5")
// .fromTo('.landing-text__animation', {
//     opacity: 0,
//     x: 20
// }, {
//     x: 0,
//     opacity: 1,
//     duration: .7
// })
.fromTo('.landing__btn', {
    opacity: 0,
    x: 20
}, {
    x: 0,
    opacity: 1,
    duration: .7
}, ">-.5")

    // scrollTrigger: {
    //     trigger: '.landing__wrapper',

    // },
    // timelineLanding
    //     .from(".landing-img__container", { opacity: 0, duration: .5 }, "-1")
    //     .from(".landing-text__company", { opacity: 0, duration: .5 },)
    //     .from(".landing-text__animation", { x: 20, opacity: 0, duration: .5 })
    //     .from(".landing__btn", { opacity: 0, duration: .5 })


    // =================== Solutions Animation ==================== //

    // let timelineSolutions = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.solution__wrapper',

    //     },
    // });

    // timelineSolutions
    //     .from(".solution-p", { opacity: 0, duration: 1 }, "-1")
    //     .from(".solution-card ", { opacity: 0, duration: .5 },)
