// Obtén todos los elementos con la clase "hover-animation"
const blogCards = document.querySelectorAll('.hover-animation');

// Recorre cada elemento y agrega los event listeners
blogCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
    gsap.to(card, { y: -5, boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)', duration: 0.3 });
    });

    card.addEventListener('mouseleave', () => {
    gsap.to(card, { y: 0, boxShadow: 'none', duration: 0.3 });
    });
});
