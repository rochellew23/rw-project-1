document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,TextPlugin)
    // slide show functions
    let slideIndex = 1;
    showDivs(slideIndex);
    const back = document.getElementById("backButton");
    const next = document.getElementById("nextButton");

    function showDivs(n) {
        let x = document.getElementsByClassName("slide");
        if (n > x.length) {slideIndex = 1}; 
        if (n < 1) {slideIndex = x.length};
        for ( let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        };
        x[slideIndex-1].style.display="block";  
        gsap.fromTo(x[slideIndex-1], {opacity:0}, {opacity:1, duration: 1.5})
    };

    function plusDivs(n) {
        showDivs(slideIndex += n);
    };

    back.addEventListener("click", function divs(){plusDivs(-1)});
    next.addEventListener("click", function divs(){plusDivs(1)});
});