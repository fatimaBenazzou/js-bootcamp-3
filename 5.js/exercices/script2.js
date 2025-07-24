// const student = {
//     name: "Maomao",
//     grades: {
//         math: 85,
//         science: 100,
//         philo: 99,
//     },
//     getAverageGrade: function () {
//         const grades = Object.values(student.grades);
//         const sum = grades.reduce((total, grade) => total + grade, 0);
//         return (sum / grades.length).toFixed(2);
//     },
// };

// console.log(student.name + "'s average grade is " + student.getAverageGrade());
// const account = {
//     balance: 100,
//     deposit(amount) {
//         account.balance += amount;
//     },
//     withdraw(amount) {
//         if (account.balance >= amount) {
//             account.balance -= amount;
//         } else {
//             console.log("Error: Insufficient funds");
//         }
//     },
// };

// account.deposit(50);
// console.log("Current balance: ", account.balance);
// account.withdraw(200);
// console.log("Current balance: ", account.balance);
// account.withdraw(30);
// console.log("Current balance: ", account.balance);
const dictionary = {
    France: "Paris",
    Germany: "Berlin",
    Algeria: "Alger",
    Australia: "Canberra",
    China: "beijing",
};

function getCapital(country) {
    return dictionary[country] || "Capitsl not found";
}
