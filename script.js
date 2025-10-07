const appearingElements = document.querySelectorAll('.scrollappear');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

appearingElements.forEach(element => {
    observer.observe(element);
});