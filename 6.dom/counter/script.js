const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const resetButton = document.getElementById("reset");
const decrementButton = document.getElementById("decrement");

let counterValue = 0;

function updateCounter() {
    counterElement.textContent = counterValue;
    if (counterValue > 0) {
        counterElement.style.color = "green";
    } else if (counterValue < 0) {
        counterElement.className = "negative";
    } else {
        counterElement.className = "neutral";
    }
}

incrementButton.addEventListener("click", () => {
    counterValue++;
    updateCounter();
});

decrementButton.addEventListener("click", () => {
    counterValue--;
    updateCounter();
});
resetButton.addEventListener("click", () => {
    counterValue = 0;
    updateCounter();
});

// setInterval(() => {
//     counterValue--;
//     counterElement.textContent = counterValue;
// }, 1000);
