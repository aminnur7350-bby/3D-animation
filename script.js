
const planet = document.getElementById("planet");
const startButton = document.getElementById("startButton");
const colorButton = document.getElementById("colorButton");

let animationRunning = true;


/* CREATE PARTICLES */

const particleContainer = document.getElementById("particles");

for (let i = 0; i < 80; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (4 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    const size = 2 + Math.random() * 4;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particleContainer.appendChild(particle);
}


/* MOUSE 3D EFFECT */

document.addEventListener("mousemove", function (event) {

    if (!planet || !animationRunning) {
        return;
    }

    const x =
        (event.clientX / window.innerWidth - 0.5) * 30;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 30;

    planet.style.transform =
        `rotateX(${-y}deg) rotateY(${x}deg)`;
});


/* START / PAUSE */

if (startButton) {

    startButton.addEventListener("click", function () {

        animationRunning = !animationRunning;

        if (animationRunning) {

            planet.style.animationPlayState = "running";

            startButton.textContent = "Pause 3D";

        } else {

            planet.style.animationPlayState = "paused";

            startButton.textContent = "Start 3D";
        }

    });
}


/* CHANGE COLOR */

if (colorButton) {

    colorButton.addEventListener("click", function () {

        const colors = [
            ["#93c5fd", "#2563eb", "#172554"],
            ["#f0abfc", "#c026d3", "#581c87"],
            ["#86efac", "#16a34a", "#14532d"],
            ["#fde68a", "#f59e0b", "#78350f"],
            ["#fca5a5", "#dc2626", "#7f1d1d"]
        ];

        const randomColor =
            colors[Math.floor(Math.random() * colors.length)];

        planet.style.background =
            `radial-gradient(
                circle at 30% 30%,
                ${randomColor[0]},
                ${randomColor[1]} 40%,
                ${randomColor[2]} 75%,
                #020617
            )`;

    });
}
