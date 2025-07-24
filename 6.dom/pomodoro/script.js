// 1. Select all the necessary HTML elements using their IDs
// These include session, break, clock, stats, buttons for start/stop/clear and increment/decrement

// 2. Define variables to store session length, break length, and time left in seconds

// 3. Define boolean flags to track whether the timer is running
// and whether it's currently a work session or a break

// 4. Define an interval variable to hold the countdown loop

// 5. Create a function called updateClock()
// This function should convert timeLeft (in seconds) into MM:SS format
// and display it inside the clock element

// 6. Create a function called tick()
// This function will be called every second while the timer is running
// If timeLeft > 0, decrease it by one and update the clock
// If timeLeft reaches 0:
// - Clear the interval
// - Switch between session and break mode
// - Reset timeLeft based on the new mode
// - Update the stats text to show "Session" or "Break"
// - Restart the timer with setInterval(tick, 1000)

// 7. Add event listener to the Start button
// If the timer is not already running, start it using setInterval

// 8. Add event listener to the Stop button
// When clicked, stop the timer without resetting anything

// 9. Add event listener to the Clear button
// When clicked:
// - Stop the timer
// - Reset to session mode
// - Reset timeLeft to the original session length
// - Update the stats text to "Session"
// - Update the displayed time to match the reset value

// 10. Add event listener to the Session Increment button
// Increase sessionLength (maximum of 60)
// Update the session display
// If currently in session mode and not running, update timeLeft accordingly
// Then update the clock display

// 11. Add event listener to the Session Decrement button
// Decrease sessionLength (minimum of 1)
// Update the session display
// If currently in session mode and not running, update timeLeft accordingly
// Then update the clock display

// 12. Add event listener to the Break Increment button
// Increase breakLength (maximum of 30)
// Update the break display

// 13. Add event listener to the Break Decrement button
// Decrease breakLength (minimum of 1)
// Update the break display

// 14. Call updateClock() once at the beginning to initialize the display

// 15. (Optional) Add theme toggle functionality
// Add event listener to a theme-toggle button that toggles a "light" class on the body
