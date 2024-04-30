var current_users = ["Samia", "Farha", "Muneeba", "Shanza", "Alia"];
var new_users = ["Farha", "Alia", "Hania", "Sara", "Zainab"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) {
        return current_one_user.toLowerCase() === new_one_user.toLowerCase();
    });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken, you need to enter a new username."));
    }
    else {
        console.log("The username ".concat(new_one_user, " is availaible."));
    }
});
