function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Function to calculate and update the time spent
function updateTimer() {
    // Get the current timestamp in milliseconds
    const currentTime = new Date().getTime();

    // Calculate the time difference between the current time and the time when the user first loaded the page
    const timeDifference = currentTime - startTime;

    // Convert the time difference to hours, minutes, and seconds
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the formatted time in the timer element
    document.getElementById('timer').textContent = `${formatTime(hours)}h ${formatTime(minutes)}m ${formatTime(seconds)}s`;

    document.getElementById('timer-button').textContent = `${formatTime(hours)}h ${formatTime(minutes)}m ${formatTime(seconds)}s`;
}

// Get the timestamp when the user first loads the page
const startTime = new Date().getTime();

// Update the timer every second
setInterval(updateTimer, 1000);

// Call updateTimer initially to prevent delay in displaying the timer
updateTimer();

const btnScrollToTop = document.querySelector("#top-button");
const footer = document.querySelector("footer");

btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 450) {
        btnScrollToTop.style.opacity = "1"; 
    } else {
        btnScrollToTop.style.opacity = "0"; 
    }
});
