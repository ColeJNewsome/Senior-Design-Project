const appearingElements = document.querySelectorAll('.scrollappear');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

appearingElements.forEach(element => {
    observer.observe(element);
});

function CalculateResults() {
    let tds = document.getElementById("TDS").value;
    let pH = document.getElementById("pH").value;
    let temp = document.getElementById("Temp").value;
    let Bacteria = document.getElementById("Bacteria").value;
    if (tds == "" | pH == "" | temp == "" | Bacteria == "") {
        alert("Please fill in all fields");
        return;
    }
    else if (Bacteria === ("E. Coli" | "Other") | tds >= 1000 | temp >= 120 | pH <= 6 | pH >= 9) {
        document.getElementById("result").value = "DO NOT DRINK";
    }
    else if (tds >= 500 | pH <= 6.5 | pH >= 8.5 | temp >= 100) {
        document.getElementById("result").value = "Potentially Unsafe";
    }
    else if (tds < 500 & tds > 150){
        document.getElementById("result").value = "Likely Safe to Drink";
    }
    else {
        document.getElementById("result").value = "Safe to Drink*";
    }
}

    

