const headertop = document.querySelector("#headertop");
const headerbanner = document.querySelector("#headerbanner");
const timeline = gsap.timeline();

timeline.fromTo("#header__top *", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
timeline.fromTo(header__banner, { opacity: 0, xPercent: 100 }, { opacity: 1, xPercent: 0, duration: 1, stagger: 0.2 });


 let listSection = document.querySelectorAll("#main section");
 for (let i = 0; i < listSection.length; i++) {
    const section = listSection[i];
gsap.fromTo(
    "#main section",
    {
        opacity: 0,
        y: 40,
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#main section",
            start: "top 70%",
            end: "bottom center",
            markers:false,
        },

    });
}
let listQuestion = document.querySelectorAll("#search section");

let listQuestion2 = document.querySelectorAll("#search__image");
for (let i = 0; i < listQuestion.length; i++) {
    const section = listQuestion[i];
gsap.fromTo(
    "#search section *",
    {
        opacity: 0,
        xPercent: 100,
    },
    {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#search__image",
            start: "top 70%",
            end: "bottom center",
            markers: false,
        },

    });
    }
for (let i = 0; i < listQuestion2.length; i++) {
    const section = listQuestion2[i];
    gsap.fromTo(
        "#search__image",
        {
            opacity: 0,
            xPercent: -100,
        },
        {
            opacity: 1,
            xPercent: 0,
            duration: 2,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#search__image",
                start: "top 70%",
                end: "bottom center",
                markers: false,
            },
            
        });
    }

    let listMenu = document.querySelectorAll("#menu section");
for (let i = 0; i < listMenu.length; i++) {
const section = listMenu[i];
gsap.fromTo(
    "#menu section *",
    {
        opacity: 0,
        y: 40,
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#menu section",
            start: "top 70%",
            end: "bottom center",
            markers: false,
        },
        
    });
}
let plans = document.querySelectorAll("#plans section");
for (let i = 0; i < plans.length; i++) {
    const section = plans[i];
    gsap.fromTo(
        "#plans section ",
        {
            opacity: 0,
            y: 40,
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#plans section",
                start: "top 70%",
                end: "bottom center",
                markers:false,
            },
            
        });
    }