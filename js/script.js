document.addEventListener("DOMContentLoaded", () => {
    function updateCountdown() {
        const eventDate = new Date("2025-02-29T09:00:00").getTime(); // Set event date
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft <= 0) {
            document.getElementById("timer").innerHTML = "Event Started!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `
            <div class='timer-section'><strong>${days}</strong><span>Days</span></div>
            <div class='timer-section'><strong>${hours}</strong><span>Hours</span></div>
            <div class='timer-section'><strong>${minutes}</strong><span>Minutes</span></div>
            <div class='timer-section'><strong>${seconds}</strong><span>Seconds</span></div>
        `;
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
});

window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    if (window.scrollY > document.querySelector(".header").offsetHeight - 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    function createShootingStar() {
        const star = document.createElement("div");
        star.classList.add("shooting-star");

        // Random start position
        let startX = Math.random() * window.innerWidth;
        let startY = Math.random() * window.innerHeight * 0.3; // Starts from the top area

        star.style.left = startX + "px";
        star.style.top = startY + "px";
        star.style.animation = `shooting-star ${Math.random() * 1.5 + 0.5}s linear`;

        document.body.appendChild(star);

        // Remove after animation ends
        setTimeout(() => {
            star.remove();
        }, 1500);
    }

    setInterval(createShootingStar, 300); // New star every 0.3s
});

const symbols = ['<', '>', '{', '}', ']', '[', '+', '-', '=', ';', '/', '*'];
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff', '#ffff00'];
const bgContainer = document.getElementById("bg-container");

function createSymbol() {
    const symbol = document.createElement("div");
    symbol.classList.add("symbol");
    symbol.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.style.left = `${Math.random() * 100}vw`;
    symbol.style.top = `${Math.random() * 100}vh`;
    symbol.style.color = colors[Math.floor(Math.random() * colors.length)];
    symbol.style.filter = `drop-shadow(0 0 5px ${symbol.style.color}) drop-shadow(0 0 10px ${symbol.style.color})`;
    symbol.style.animationDuration = `${Math.random() * 5 + 3}s`;
    bgContainer.appendChild(symbol);

    setTimeout(() => {
        symbol.remove();
    }, 8000);
}

setInterval(createSymbol, 300);


