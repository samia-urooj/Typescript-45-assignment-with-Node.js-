let users = ["Wajeeha", "Samia", "Shariq", "Warisha", "Admin"];

users.forEach((oneUser) => {
  if (oneUser === "Admin") {
    console.log(`Hello ${oneUser} would you like to see a status report?`);
  } else {
    console.log(`Hello! thank you for logging in again.`);
  }
});
