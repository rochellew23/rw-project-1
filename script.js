document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    // choice page animations
    let choiceAnime = gsap.timeline({ delay: 1.5, onStart: playBGM2()})
    choiceAnime.from('#choiceImage', { opacity: 0, duration: 3 })
        .from('.choiceText', {
            opacity: 0,
            duration: 1,
        })
        .to('#turnRed', { color: '#800000', duration: 1 });

    //start page animation timeline
    let titleAnime = gsap.timeline({ delay: 1.5, });
    titleAnime.to('#title', {
        duration: 1,
        text: "Witch",
        ease: "steps(12)",
    })
        .to('#intro', {
            duration: 3,
            text: "What would you do for power?",
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
    const red = document.querySelectorAll(".turnToRed");
    red.forEach(function (text) {
        ["click", "mousemove"].forEach((event) => {
            text.addEventListener(event, () => {
                gsap.to(text, { color: '#800000', duration: 1.3 });
                console.log('text clicked!')
            })
        })
    })
});

//alert function
function wrongChoice(keyword) {
    switch (keyword) {
        case 'mouth':
            alert('No. Not my tongue.');
            break;
        case 'heart':
            alert('No. Not my heart');
            break;
        case 'arm':
            alert('No. Not my arm');
            break;
        case 'leg':
            alert('No. Not my leg.');
            break;
        default:
            break;
    }
}

// page turn sound effect
const page = new Audio('assets/sounds/pageturn.ogg');
const story = document.querySelectorAll(".storyButtons");

story.forEach(function (button) {
    button.addEventListener('click', () => { page.play() })
});