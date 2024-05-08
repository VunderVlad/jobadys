// Selecting elements
let sliders = document.querySelectorAll('.slide');
let prevBtn = document.querySelector('.fa-chevron-left');
let nextBtn = document.querySelector('.fa-chevron-right');
let current = 0;

// Adding event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Function to remove active class from all slides
function resetSlides() {
    sliders.forEach(slide => {
        slide.classList.remove('active');
    });
}

// Function to show a specific slide
function showSlide(index) {
    resetSlides();
    sliders[index].classList.add('active');
}

// Function to show the next slide
function nextSlide() {
    current = (current + 1) % sliders.length;
    showSlide(current);
}

// Function to show the previous slide
function prevSlide() {
    current = (current - 1 + sliders.length) % sliders.length;
    showSlide(current);
}

// Show initial slide
showSlide(current);
