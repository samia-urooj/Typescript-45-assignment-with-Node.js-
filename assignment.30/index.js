var users = ["Wajeeha", "Samia", "Shariq", "Warisha", "Admin"];
//console.log(`Hello! ${users[4]} would you like to see a status report?`);
//users.pop();
//users.forEach(oneUser => console.log(`Hello! ${oneUser} thank you for logging in again.`));
users.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, " would you like to see a status report?)"));
    }
    else {
        console.log("Hello! thank you for logging in again.");
    }
});
