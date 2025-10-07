const appearingElements = document.querySelectorAll('.scroll-appear');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

appearingElements.forEach(element => {
    observer.observe(element);
});