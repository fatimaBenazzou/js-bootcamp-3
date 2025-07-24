// const header = document.getElementById("header");
// console.log(header.textContent);
const header = document.querySelector("#header");
// header.textContent = "Welcome to Advanced DOM Manipulation!";
header.innerHTML = "<span>Welcome to <strong>DOM</strong>!</span>";
header.addEventListener("click", () => {
    alert("Header clicked!");
});
console.log(header.textContent);

// const descriptions = document.querySelectorAll(".description");
// console.log(descriptions);

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
    console.log({ event });
    alert("Button clicked!");
});

document.addEventListener("keydown", (event) => {
    console.log(event);
    // console.log(`Key pressed: ${event.key}`);
});
