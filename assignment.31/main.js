var users = ["Wajeeha", "Samia", "Shariq", "Warisha", "Admin"];
users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    users.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello! ".concat(oneUser, " would you like to see a status report?"));
        }
        else {
            console.log("Hello! thank you for logging in again.");
        }
    });
}
