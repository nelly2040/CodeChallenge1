const prompt = require('prompt-sync')();

function speedDetector() {
    let speed = parseInt(prompt("Enter the speed of the car: "));
    if (speed < 70) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - 70) / 5);
        console.log(`Points: ${demeritPoints}`);
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

speedDetector();