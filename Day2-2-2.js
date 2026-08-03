// Task 2 First PDF

var username = "mohanad";
var password = "12345678";

if (username == "") {
    alert("Username is required");
} else if (password.length < 8) {
    alert("Password must be at least 8 characters");
} else {
    console.log("Username: " + username);
    console.log("Password: " + password);
}

// Task 2 Second PDF

// Employee Data

var name = prompt("Enter your name:");
var age = Number(prompt("Enter your age:"));
var experience = Number(prompt("Enter years of experience:"));
var rating = Number(prompt("Enter your self rating (1-10):"));
var baseSalary = Number(prompt("Enter your base salary:"));

// Job Category

var category;

if (experience < 2) {
    category = "Junior";
} else if (experience <= 5) {
    category = "Mid-Level";
} else if (experience <= 10) {
    category = "Senior";
} else {
    category = "Expert";
}

// Performance using switch

var performance;

switch (rating) {
    case 9:
    case 10:
        performance = "Excellent";
        break;

    case 7:
    case 8:
        performance = "Good";
        break;

    case 5:
    case 6:
        performance = "Average";
        break;

    default:
        performance = "Needs Improvement";
}

// Bonus

var bonus = 0;

if (experience <= 2) {
    bonus = baseSalary * 0.10;
} else if (experience <= 5) {
    bonus = baseSalary * 0.15;
} else {
    bonus = baseSalary * 0.20;
}

var finalSalary = baseSalary + bonus;

// Shift

var hour = new Date().getHours();

var shift;

if (hour >= 9 && hour < 18) {
    shift = "Day Shift";
} else {
    shift = "Night Shift";
}

// Output

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Category: " + category);
console.log("Performance: " + performance);
console.log("Final Salary: " + finalSalary);
console.log("Shift: " + shift);

alert("Employee: " + name + "\nFinal Salary: " + finalSalary);

document.getElementById("result").innerHTML =
    "<h2>Employee Report</h2>" +
    "<p>Name: " + name + "</p>" +
    "<p>Age: " + age + "</p>" +
    "<p>Category: " + category + "</p>" +
    "<p>Performance: " + performance + "</p>" +
    "<p>Final Salary: " + finalSalary + "</p>" +
    "<p>Shift: " + shift + "</p>";