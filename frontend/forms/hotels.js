document
  .getElementById("hotelForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      yourName: document.getElementById("yourName").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      hotelLocation: document.getElementById("hotelLocation").value,
      starRating: document.getElementById("starRating").value,
      checkIn: document.getElementById("checkIn").value,
      checkOut: document.getElementById("checkOut").value,
      rooms: document.getElementById("rooms").value,
      guests: document.getElementById("guests").value,
    };

    fetch("/api/hotels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Booking submitted successfully!");
        console.log(data);
        document.getElementById("hotelForm").reset(); // Reset form after submission
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error submitting your booking.");
      });
  });
