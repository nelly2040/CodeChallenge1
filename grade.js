const prompt = require('prompt-sync')();

function getGrade() {
    let marks = parseFloat(prompt("Enter student marks (0-100): "));
    if (marks >= 0 && marks <= 100) {
        if (marks > 79) {
            console.log("Grade: A");
        } else if (marks >= 60) {
            console.log("Grade: B");
        } else if (marks >= 49) {
            console.log("Grade: C");
        } else if (marks >= 40) {
            console.log("Grade: D");
        } else {
            console.log("Grade: E");
        }
    } else {
        console.log("Invalid input. Marks should be between 0 and 100.");
    }
}

getGrade();