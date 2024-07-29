const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.classList.add("animate");

    setTimeout(() => {
    btn.classList.remove("animate");
    }, 600) // 1s = 1000ms
});