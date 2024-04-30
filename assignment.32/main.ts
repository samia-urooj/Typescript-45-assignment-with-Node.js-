let current_users = ["Samia", "Farha", "Muneeba", "Shanza", "Alia"];
let new_users = ["Farha", "Alia", "Hania", "Sara", "Zainab"];

new_users.forEach((new_one_user) => {
  let our_condition = current_users.some(
    (current_one_user) =>
      current_one_user.toLowerCase() === new_one_user.toLowerCase()
  );
  if (our_condition) {
    console.log(
      `Sorry ${new_one_user} is already taken, you need to enter a new username.`
    );
  } else {
    console.log(`The username ${new_one_user} is availaible.`);
  }
});
