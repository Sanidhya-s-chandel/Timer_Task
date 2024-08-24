let interval;

function startCountdown() {
    const inputHours = document.getElementById('inputHours').value;
    const inputMinutes = document.getElementById('inputMinutes').value;
    const inputSeconds = document.getElementById('inputSeconds').value;

    let hours = parseInt(inputHours) || 0;
    let minutes = parseInt(inputMinutes) || 0;
    let seconds = parseInt(inputSeconds) || 0;

    let countdownSeconds = hours * 3600 + minutes * 60 + seconds;

    if (countdownSeconds <= 0) {
        alert('Please enter a valid time.');
        return;
    }

    const timerElement = document.getElementById('timer');
    let remainingTime = countdownSeconds;

    clearInterval(interval); 

    interval = setInterval(() => {
        let displayHours = Math.floor(remainingTime / 3600);
        let displayMinutes = Math.floor((remainingTime % 3600) / 60);
        let displaySeconds = remainingTime % 60;

        displayHours = displayHours < 10 ? '0' + displayHours : displayHours;
        displayMinutes = displayMinutes < 10 ? '0' + displayMinutes : displayMinutes;
        displaySeconds = displaySeconds < 10 ? '0' + displaySeconds : displaySeconds;

        timerElement.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;

        if (remainingTime > 0) {
            remainingTime--;
        } else {
            clearInterval(interval);
            timerElement.textContent = "Time's Up!";
            alert("Time's Up!");
        }
    }, 1000);
}

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(interval);
    document.getElementById('timer').textContent = '00:00:00';
});