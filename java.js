document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');

    // Эффект наклона карточки за мышкой (только для ПК)
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 60;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 60;
            heroContent.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        // Плавный возврат в центр при уходе мыши
        document.addEventListener('mouseleave', () => {
            heroContent.style.transform = `rotateY(0deg) rotateX(0deg)`;
            heroContent.style.transition = 'transform 0.5s ease';
        });
    }
});
```[cite: 1, 2, 3]


