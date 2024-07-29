document.addEventListener('DOMContentLoaded', () => {
    const flowers = document.querySelectorAll('.flower');
    
    flowers.forEach(flower => {
        setRandomPosition(flower);
    });
});

function setRandomPosition(element) {
    const containerWidth = window.innerWidth;
    const randomX = Math.random() * containerWidth;
    element.style.left = `${randomX}px`;
}
