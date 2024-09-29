function calculateGrade(marks) {
    // Validate input
    if (marks < 0 || marks > 100) {
      return "Invalid input. Marks must be between 0 and 100.";
    }
  
    if (marks >= 80) {
      return "A";
    } else if (marks >= 60) {
      return "B";
    } else if (marks >= 49) {
      return "C";
    } else if (marks >= 40) {
      return "D";
    } else {
      return "E";
    }
  }
  
  // Prompt user for input
  const marks = parseInt(prompt("Enter student's marks (0-100): "));
  
  // Calculate and display grade
  const grade = calculateGrade(marks);
  console.log("Grade:", grade);