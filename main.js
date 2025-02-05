const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateSliderPosition() {
    const cardWidth = cards[0].offsetWidth + 20; // Width of a card + margin
    slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});
