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
// Email validation
      const emailValue = emailInput.value.trim();
      if (!emailValue) {
        emailError.textContent = "Please enter your email.";
        emailInput.classList.add("input-error");
        isValid = false;
      } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
          emailError.textContent = "Please enter a valid email address.";
          emailInput.classList.add("input-error");
          isValid = false;
        }
      }
       // Message validation
      if (!messageInput.value.trim()) {
        messageError.textContent = "Please enter a message.";
        messageInput.classList.add("input-error");
        isValid = false;
      }
        if (isValid) {
        // Simulate success
        form.reset();
        if (successMessage) {
          successMessage.classList.remove("hidden");
        }
      }
    });
  }
// Read more / read less toggle
  const readMoreButtons = document.querySelectorAll(".read-more-btn");
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const target = document.getElementById(targetId);

      if (target) {
        const isHidden = target.classList.contains("hidden");
        target.classList.toggle("hidden");
        button.textContent = isHidden ? "Read less" : "Read more";
      }
    });
  });
});


