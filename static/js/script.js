document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // run on page load
});


let currentSlide = 0;
const slidesWrapper = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
const slider = document.querySelector(".slider");

let slideInterval;

// CREATE DOTS
slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");

    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlider();
        resetInterval();
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// UPDATE SLIDE + DOTS
function updateSlider() {
    slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");
}

// AUTO SLIDE
function startSlider() {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }, 4000);
}

// PAUSE ON HOVER
slider.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
});

slider.addEventListener("mouseleave", () => {
    startSlider();
});

// RESET TIMER AFTER CLICK
function resetInterval() {
    clearInterval(slideInterval);
    startSlider();
}

// INIT
startSlider();


function submit_booking(){
var name = $('#name').val();
var phone = $('#phone').val();
var email = $('#email').val();
var artist = $('#artist').val();
var msg = $('#msg').val();


if(name == ''){

alert('Enter name');

} else if(phone == '') {

alert('Enter phone');

} else if(email == '') {

alert('Enter email');

}  else if(msg == '') {

alert('Enter message');

} else {

$('#form_status').html('✔ Booking Saved');



}



}

