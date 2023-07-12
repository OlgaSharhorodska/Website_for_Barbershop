const form = document.querySelector("[name='booking_form']");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { user_name, user_email, user_password } = event.target.elements;

  console.log("user_name: ", user_name.value);
  console.log("user_email: ", user_email.value);
  console.log("user_pass: ", user_password.value);
});
