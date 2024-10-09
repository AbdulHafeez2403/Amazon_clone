
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function changeSlide(n) {
        currentSlide += n;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1; // Go to last slide if at the beginning
        } else if (currentSlide >= slides.length) {
            currentSlide = 0; // Go to first slide if at the end
        }
        showSlide(currentSlide);
    }

    // Initialize the slider
    showSlide(currentSlide);
    setInterval(() => changeSlide(1), 5000); // Automatically change slide every 5 seconds

