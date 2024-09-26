document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    //start page animation timeline
    let titleAnime = gsap.timeline({ delay: 1.5, });
    titleAnime.to('#title', {
        duration: 1,
        text: "Witch",
        ease: "steps(12)",
    })
        .to('#intro', {
            duration: 3,
            text: "What would you sacrifice for power?",
            ease: "steps(20)",
        })
        .from('#startButton', {
            duration: 2,
            opacity: 0,
        });

    // slide show functions
    let slideIndex = 1;
    showDivs(slideIndex);
    const back = document.getElementById("backButton");
    const next = document.getElementById("nextButton");

    function showDivs(n) {
        let x = document.getElementsByClassName("slide");
        if (n > x.length) { slideIndex = 1 };
        if (n < 1) { slideIndex = x.length };
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            //gsap.to(x[i], {opacity: 0})
        };
        x[slideIndex - 1].style.display = "block";
        gsap.from(x[slideIndex - 1], { x: 1500, duration: 1.5 });
    };

    function plusDivs(n) {
        showDivs(slideIndex += n);
    };

    back.addEventListener("click", function divs() { plusDivs(-1) })
    next.addEventListener("click", function divs() { plusDivs(1) })

    //red text animations
    const red = document.querySelectorAll(".turnRed");
    red.forEach(function (text) {
        text.addEventListener('click', () => {
            gsap.to()
        })
    })

    //choice.html animations
    let choiceAnime = gsap.timeline();
});

//play bg music
const musicPlay1 = document.getElementById("startBGM1");
const bgm1 = new Audio('assets/sounds/The-Shifting-Mound_(Movement-II)_Brandon-Boone.ogg');

musicPlay1.addEventListener("click", ()=>{bgm1.play()})

// page turn sound effect
const page = new Audio('assets/sounds/pageturn.ogg');
const story = document.querySelectorAll(".storyButtons");

story.forEach(function (button) {
    button.addEventListener('click', () => { page.play() })
});