// Selecting elements
let sliders = document.querySelectorAll('.slide'),
    prevBtn = document.querySelector('.fa-chevron-left'),
    nextBtn = document.querySelector('.fa-chevron-right'),
    current = 0;

// Adding event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function showSlide(n) {
    sliders.forEach((slide, index) => {
        if (index === n) {
            slide.style.opacity = 1; // Fade in the current slide
            slide.classList.add('active');
            slide.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)'; // Add shadow effect to active slide
        } else {
            slide.style.opacity = 0; // Fade out all other slides
            slide.classList.remove('active');
            slide.style.boxShadow = 'none'; // Remove shadow from inactive slides
        }
    });
}



function nextSlide() {
    if (current < sliders.length - 1) {
        current++;
    } else {
        current = 0;
    }
    showSlide(current); // Call the function to display the current slide
}

function prevSlide(){
    if (current <= 0) {
        current = sliders.length - 1;
    } else {
        current--;
    }
    showSlide(current);
}

setInterval(() => {
    nextSlide();
}, 3000);

nextSlide();
prevSlide();
