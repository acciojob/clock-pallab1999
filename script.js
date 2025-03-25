//your JS code here. If required.
// Create the timer element dynamically
const timerElement = document.createElement("p");
timerElement.id = "timer";
document.body.appendChild(timerElement);

// Function to update the timer
function updateTimer() {
    const now = new Date();
    timerElement.textContent = now.toLocaleString();
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to display the time immediately
updateTimer();
