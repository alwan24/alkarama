document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slide');
    const totalSlides = slideImages.length;
    let currentIndex = 0;
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 5000); // Change slide every 5 seconds
  });
