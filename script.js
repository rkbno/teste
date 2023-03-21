const slideContainer = document.querySelector('.carousel-slide');
const slides = document.querySelectorAll('.carousel-slide img');

let slideIndex = 0;
const interval = setInterval(nextSlide, 3000);

function nextSlide() {
  slides[slideIndex].style.display = 'none';
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.display = 'block';
}

function prevSlide() {
  slides[slideIndex].style.display = 'none';
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  slides[slideIndex].style.display = 'block';
}

const prevBtn = document.createElement('span');
prevBtn.classList.add('carousel-btn', 'prev');
prevBtn.innerHTML = '&#10094;';
prevBtn.addEventListener('click', prevSlide);
slideContainer.appendChild(prevBtn);

const nextBtn = document.createElement('span');
nextBtn.classList.add('carousel-btn', 'next');
nextBtn.innerHTML = '&#10095;';
nextBtn.addEventListener('click', nextSlide);
slideContainer.appendChild(nextBtn);
