const photoSlideshow = document.getElementsByClassName('photoSlide');
const slideshowImages = document.querySelectorAll('.photoSlide img');

//Buttons
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const photoDot1 = document.getElementById('slideDot1');
const photoDot2 = document.getElementById('slideDot2');
const photoDot3 = document.getElementById('slideDot3');
const photoDot4 = document.getElementById('slideDot4');

// Runs automatic slideshow
var slideIndex = 0;
showSlides2(slideIndex);

// Next and Previous buttons
next.addEventListener("click", 
    () => {
        showSlides1(slideIndex += 1);
});

prev.addEventListener("click", 
    () => {
        showSlides1(slideIndex -= 1);
});

// Slideshow dots
photoDot1.addEventListener("click",
    () => {
        slideIndex = 1;
        showSlides1(slideIndex);
    });

photoDot2.addEventListener("click",
    () => {
        slideIndex = 2;
        showSlides1(slideIndex);
    });

photoDot3.addEventListener("click",
    () => {
        slideIndex = 3;
        showSlides1(slideIndex);
    });

photoDot4.addEventListener("click",
    () => {
        slideIndex = 4;
        showSlides1(slideIndex);
    });

// Manually change slide with prev and next buttons
function showSlides1(number) {
    // after the end, wraps around back to front
    if (number > slideshowImages.length) {
        slideIndex = 1;
    };
    // after the beginning, wraps around back to end
    if (number < 1) {
        slideIndex = slideshowImages.length;
    };
    // hides previous and next slides
    for (var i = 0; i < slideshowImages.length; i++) {
        slideshowImages[i].style.display = "none";
    };
    // displays the current slide
    slideshowImages[slideIndex - 1].style.display = "block";
};

// Automatically changes slides
function showSlides2() {
    // hides previous and next slides
    for (var i = 0; i < slideshowImages.length; i++) {
        slideshowImages[i].style.display = "none";
    }
    // increments slide
    slideIndex++;
    // after the beginning, wraps around back to end
    if (slideIndex > slideshowImages.length) {
        slideIndex = 1;
    };
    // displays the current slide
    slideshowImages[slideIndex - 1].style.display = "block";
    // automatically changes the slide
    setTimeout(showSlides2, 5000);
};
