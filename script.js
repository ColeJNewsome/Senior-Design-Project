const appearingElements = document.querySelectorAll('.scrollappear');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

appearingElements.forEach(element => {
    observer.observe(element);
});

function CalculateResults() {
    let tds = document.getElementById("TDS").value;
    let pH = document.getElementById("pH").value;
    let temp = document.getElementById("Temp").value;
    let Bacteria = document.getElementById("Bacteria").value;
    if (bacteria == ("EColi" | "Other") | tds >= 1000 | temp >= 120 | pH <= 6 | pH >= 9) {
        document.getElementById("result").innerHTML = "DO NOT DRINK";
        return;
    }
    else if (tds >= 500 | pH <= 6.5 | pH >= 8.5 | temp >= 100) {
        document.getElementById("result").innerHTML = "Potentially Unsafe or Unpleasant Taste";
        return;
    }
    else if (tds < 500 & tds > 150){
        document.getElementById("result").innerHTML = "Likely Safe to Drink";
        return result
    }
    else {
        document.getElementById("result").innerHTML = "Safe to Drink";
        return;
    }
}
    