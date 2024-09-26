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
        if (n > x.length) { slideIndex = 1};
        if (n < 1) { slideIndex = x.length };
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        };
        x[slideIndex - 1].style.display = "block";
        let turnRed = gsap.timeline();
        turnRed.from(x[slideIndex - 1], {x: 1500, duration: 1 })
        .to('.turnToRed', {color: "#660000", delay: 1.2});
    };

    function plusDivs(n) {
        showDivs(slideIndex += n);
    };

    back.addEventListener("click", function divs() { plusDivs(-1) })
    next.addEventListener("click", function divs() { plusDivs(1) })

    //choice.html animations
    let choiceAnime = gsap.timeline();
    /*
    const page = new Audio('assets/sounds/pageturn.ogg');
    // page turn sounds when button is pressed
    

    for (let i = 0; i < turn.length; i++) {
        let audioButton = turn[i];
        audioButton.addEventListener('click', () => {
            page.play();
            console.log("button clicked")
        })
        
    }
        */
});

/*
const page = document.getElementById("pageTurn");
const turn = document.querySelectorAll(".storyButton");

function playPage() {
    page.play();
}

turn.addEventListener('click', function play() { playPage() });
*/
