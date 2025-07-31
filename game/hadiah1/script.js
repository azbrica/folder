let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');
const totalSlides = slides.length

//Initialize
document.getElementById('total-slides').textContent = totalSlides;

function updateSlider() {
    //Remove active class from all slides & thumbnails
    slides.forEach(slide => slide.classList.remove('active'));
    thumbnails.forEach(thumb => thumb.classList.remove('active'));

    //Add active class to current slide & thumbnail
    slides[currentSlide].classList.add('active');
    thumbnails[currentSlide].classList.add('active');

    //Update slide counter
    document.getElementById('current-slide').textContent = currentSlide + 1;
}

function changeSlide(direction) {
    currentSlide += direction;

    if(currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateSlider();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider()
}

//Event listeners for navigation buttons
document.querySelector('.nav-prev').addEventListener('click', function(e) {
    e.preventDefault();
    changeSlide(-1);
});

document.querySelector('.nav-next').addEventListener('click', function(e) {
    e.preventDefault();
    changeSlide(1);
});

//Event listeners for thumbnails
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function(e) {
        e.preventDefault();
        goToSlide(index)
    });
});

//Auto play functionality
let autoPlayInterval = setInterval(() => {
    changeSlide(1)
}, 5000);

//Pause auto play  on hover
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(() => {
        changeSlide(1)
    }, 6000);
});

//Keyboard navigation
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if(e.key === 'ArrowRight') {
        changeSlide(1)
    }
});

//Touch/swipe support for mobile
let startX = 0;
let endX = 0;

sliderContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchend', (e) => {
    endX = e.changeTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = startX - endX;

    if(Math.abs(diff) > swipeThreshold) {
        if(diff > 0) {
            changeSlide(1);
        } else {
            changeSlide(-1)
        }
    }
}