// 1. Select all the necessary HTML elements using their IDs
// These include session, break, clock, stats, buttons for start/stop/clear and increment/decrement
const sessionEl = document.getElementById("session");
const breakEl = document.getElementById("break");
const clockEl = document.getElementById("clock");
const statsEl = document.getElementById("stats");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const clearBtn = document.getElementById("clear");

const sessDec = document.getElementById("sessDec");
const sessInc = document.getElementById("sessInc");
const breakDec = document.getElementById("breakDec");
const breakInc = document.getElementById("breakInc");

// 2. Define variables to store session length, break length, and time left in seconds
let sessionLength = 25;
let breakLength = 5;
let timeLeft = sessionLength * 60;

// 3. Define boolean flags to track whether the timer is running
// and whether it's currently a work session or a break
let isRunning = false;
let isSession = true;

// 4. Define an interval variable to hold the countdown loop
let interval = null;

// 5. Create a function called updateClock()
// This function should convert timeLeft (in seconds) into MM:SS format
// and display it inside the clock element
function updateClock() {
    const minutes = Math.floor(timeLeft / 60)
        .toString()
        .padStart(2, "0");
    const seconds = Math.floor(timeLeft % 60)
        .toString()
        .padStart(2, "0");
    clockEl.textContent = `${minutes}:${seconds}`;
}
// 6. Create a function called tick()
// This function will be called every second while the timer is running
function tick() {
    // If timeLeft > 0, decrease it by one and update the clock
    if (timeLeft > 0) {
        timeLeft--;
        updateClock();
    } else {
        // If timeLeft reaches 0:
        // - Clear the interval
        clearInterval(interval);
        // - Switch between session and break mode
        isSession = !isSession;
        // - Reset timeLeft based on the new mode
        timeLeft = (isSession ? sessionLength : breakLength) * 60;
        // - Update the stats text to show "Session" or "Break"
        statsEl.textContent = isSession ? "Session" : "Pause";
        updateClock();
        // - Restart the timer with setInterval(tick, 1000)
        interval = setInterval(tick, 1000);
    }
}

// 7. Add event listener to the Start button
// If the timer is not already running, start it using setInterval
startBtn.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(tick, 1000);
    }
});
// 8. Add event listener to the Stop button
// When clicked, stop the timer without resetting anything
stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    isRunning = false;
});

// 9. Add event listener to the Clear button
// When clicked:
clearBtn.addEventListener("click", () => {
    // - Stop the timer
    clearInterval(interval);
    isRunning = false;
    // - Reset to session mode
    isSession = true;
    // - Reset timeLeft to the original session length
    timeLeft = sessionLength * 60;
    // - Update the stats text to "Session"
    statsEl.textContent = "Session";
    // - Update the displayed time to match the reset value
    updateClock();
});

// 10. Add event listener to the Session Increment button
sessInc.addEventListener("click", () => {
    // Increase sessionLength (maximum of 60)
    if (sessionLength < 60) {
        // Update the session display
        sessionLength++;
        sessionEl.textContent = sessionLength;
        // If currently in session mode and not running, update timeLeft accordingly
        if (isSession && !isRunning) timeLeft = sessionLength * 60;

        // Then update the clock display
        updateClock();
    }
});

// 11. Add event listener to the Session Decrement button
// Decrease sessionLength (minimum of 1)
// Update the session display
// If currently in session mode and not running, update timeLeft accordingly
// Then update the clock display
sessInc.addEventListener("click", () => {
    if (sessionLength > 1) {
        sessionLength--;
        sessionEl.textContent = sessionLength;
        if (isSession && !isRunning) timeLeft = sessionLength * 60;
        updateClock();
    }
});

// 12. Add event listener to the Break Increment button
// Increase breakLength (maximum of 30)
// Update the break display
breakInc.addEventListener("click", () => {
    if (breakLength < 30) {
        breakLength++;
        breakEl.textContent = breakLength;
    }
});

// 13. Add event listener to the Break Decrement button
// Decrease breakLength (minimum of 1)
// Update the break display
breakDec.addEventListener("click", () => {
    if (breakLength > 1) {
        breakLength--;
        breakEl.textContent = breakLength;
    }
});

// 14. Call updateClock() once at the beginning to initialize the display
updateClock();
// 15. (Optional) Add theme toggle functionality
// Add event listener to a theme-toggle button that toggles a "light" class on the body
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
});
