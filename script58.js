document.addEventListener("DOMContentLoaded", function () {
    const glass = document.querySelector(".glass");

    glass.addEventListener("mouseover", function () {
        glass.style.boxShadow = "0 0 30px rgb(145, 55, 55)";
    });

    glass.addEventListener("mouseout", function () {
        glass.style.boxShadow = "0 0 20px rgb(0, 0, 0)";
    });
});
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-10px";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Duración variable

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Crear corazones cada 300ms
setInterval(createHeart, 300);

// Reproducir música automáticamente
document.addEventListener("click", () => {
    document.getElementById("music").play();
});
