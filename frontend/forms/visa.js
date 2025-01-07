function toggleReturnDate() {
  const travelType = document.getElementById("journeyType").value;
  const returnDateContainer = document.getElementById("returnDateContainer");

  if (travelType === "Return") {
    // Ensure this matches the option value
    returnDateContainer.style.display = "block";
  } else {
    returnDateContainer.style.display = "none";
  }
}

document
  .getElementById("journeyType")
  .addEventListener("change", toggleReturnDate); // Add this line

// Call toggleReturnDate on page load to set initial state
toggleReturnDate();

document.getElementById("visaForm").onsubmit = function (event) {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  data.journeyType = document.getElementById("journeyType").value;
  data.departureDate = document.getElementById("departureDate").value;

  fetch("/api/visa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        alert("Form submitted successfully!");
        this.reset(); // Reset the form
      } else {
        alert("Error submitting the form. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error submitting the form. Please try again.");
    });
};
