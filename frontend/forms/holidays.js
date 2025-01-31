// Get DOM elements
const contactLink = document.querySelector(".contact-link");

const contactFormWrapper = document.getElementById("contact-form-wrapper");
const closeFormButton = document.getElementById("close-form");

// Show the contact form when the navbar link is clicked
contactLink.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  contactFormWrapper.style.display = "flex";
});

// Hide the contact form when the close button is clicked
closeFormButton.addEventListener("click", () => {
  contactFormWrapper.style.display = "none";
});

// form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        form.reset(); // Reset the form after submission
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the email.");
    }
  });
});
