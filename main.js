// Form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");

      const nameError = document.getElementById("name-error");
      const emailError = document.getElementById("email-error");
      const messageError = document.getElementById("message-error");
      const successMessage = document.getElementById("form-success");

      let isValid = true;
      // Reset errors
      [nameError, emailError, messageError].forEach((el) => {
        if (el) el.textContent = "";
      });
      [nameInput, emailInput, messageInput].forEach((input) => {
        if (input) input.classList.remove("input-error");
      });
      if (successMessage) {
        successMessage.classList.add("hidden");
      }
       // Name validation
      if (!nameInput.value.trim()) {
        nameError.textContent = "Please enter your name.";
        nameInput.classList.add("input-error");
        isValid = false;
      }

