let count = 0;
const text = document.querySelector("p");
const button1 = document.querySelector("#purasu");
const button2 = document.querySelector("#mainasu");

button1.addEventListener("click", () => {
    count = count + 1;
    text.textContent = count;
});

button2.addEventListener("click", () => {
    count = count - 1;
    text.textContent = count;
})