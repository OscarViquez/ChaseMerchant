$(document).ready(function () {
    console.log("ready!");
    // =================== Solutions Animation ==================== //

    let timelineSolutions = gsap.timeline({
        scrollTrigger: {
            trigger: '.solution__wrapper',

        },
    });

    timelineSolutions
        .from(".solution-p", { opacity: 0, duration: 1 }, "-1")
        .from(".solution-card ", { opacity: 0, duration: .5 },)

});