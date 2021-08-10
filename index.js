console.log("ready!");

let timelineLanding = gsap.timeline({
    scrollTrigger: {
        trigger: '.landing__wrapper',

    },
});

timelineLanding
    .from(".landing-text__company", { opacity: 0, duration: .5 }, '-1')
    .from(".landing-text__animation", { opacity: 0, duration: .7 })
    .from(".landing__btn", { opacity: 0, duration: .2 })


// =================== Solutions Animation ==================== //

let timelineSolutions = gsap.timeline({
    scrollTrigger: {
        trigger: '.solution__wrapper',

    },
});

timelineSolutions
    .from(".solution-p", { opacity: 0, duration: .7 }, "-1")
    .from(".solution-card ", { opacity: 0, duration: .5 },)


// =================== Solutions Animation ==================== //


let timelineProvideCards = gsap.timeline({
    scrollTrigger: {
        trigger: '.provide__wrapper',

    },
});

timelineProvideCards
    .from(".provide-text__animation", { opacity: 0, duration: .7 }, "-1")
    .from(".provide-btn__animation ", { opacity: 0, duration: .5 },)

