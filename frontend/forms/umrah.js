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

// For hotels
const hotels = [
  {
    images: [
      "imgs/Hotelimages/Makkah/OlyanPalace/image2.WebP",
      "imgs/Hotelimages/Makkah/OlyanPalace/image3.WebP",
      "imgs/Hotelimages/Makkah/OlyanPalace/image4.WebP",
    ],
  },
  {
    images: [
      "imgs/Hotelimages/Makkah/QaswaTower/image2.WebP",
      "imgs/Hotelimages/Makkah/QaswaTower/image3.WebP",
      "imgs/Hotelimages/Makkah/QaswaTower/image4.WebP",
    ],
  },
  {
    images: [
      "imgs/Hotelimages/Makkah/ElafAjyad/image2.WebP",
      "imgs/Hotelimages/Makkah/ElafAjyad/image3.WebP",
      "imgs/Hotelimages/Makkah/ElafAjyad/image4.WebP",
    ],
  },
  {
    images: [
      "imgs/Hotelimages/Makkah/Saraya/image2.WebP",
      "imgs/Hotelimages/Makkah/Saraya/image3.WebP",
      "imgs/Hotelimages/Makkah/Saraya/image4.WebP",
    ],
  },
  {
    images: [
      "imgs/Hotelimages/Madina/PullmanZamzam/image2.WebP",
      "imgs/Hotelimages/Madina/PullmanZamzam/image3.WebP",
      "imgs/Hotelimages/Madina/PullmanZamzam/image4.WebP",
    ],
  },
  {
    images: [
      "imgs/Hotelimages/Madina/TaibaFront/image2.WebP",
      "imgs/Hotelimages/Madina/TaibaFront/image3.WebP",
      "imgs/Hotelimages/Madina/TaibaFront/image4.WebP",
    ],
  },
  {
    images: [
      "imgs/Hotelimages/Madina/AmjatSalam/image2.WebP",
      "imgs/Hotelimages/Madina/AmjatSalam/image3.WebP",
      "imgs/Hotelimages/Madina/AmjatSalam/image4.WebP",
    ],
  },
  {
    images: [
      "imgs/Hotelimages/Madina/AlRiyaz/image2.WebP",
      "imgs/Hotelimages/Madina/AlRiyaz/image3.WebP",
      "imgs/Hotelimages/Madina/AlRiyaz/image4.WebP",
    ],
  },
];

function startImageRotation() {
  hotels.forEach((hotel, index) => {
    let imageIndex = 0;
    const imageElement = document.getElementById(`hotel-image-${index}`);
    const defaultImage = imageElement.src; // Save the default image

    // Function to rotate images
    const rotateImage = () => {
      imageIndex = (imageIndex + 1) % hotel.images.length;
      imageElement.src = hotel.images[imageIndex];
    };

    // Add event listeners for mouseenter and mouseleave
    imageElement.addEventListener("mouseenter", () => {
      // Start rotating images when hovered
      imageElement.rotationInterval = setInterval(rotateImage, 2000);
    });

    imageElement.addEventListener("mouseleave", () => {
      // Stop rotating images when mouse leaves and reset to the default image
      clearInterval(imageElement.rotationInterval);
      imageElement.src = defaultImage;
    });
  });
}

startImageRotation();

// Array of background images
const images = [
  "https://i.pinimg.com/736x/f5/46/48/f5464852fc4422886ba93fd5fc9fdb47.jpg",
  "https://media.istockphoto.com/id/1200588618/photo/green-dome-in-medina-kingdom-of-saudi-arabia.jpg?s=612x612&w=0&k=20&c=rD2fHo7q_2zDT5y2BXVnb5rwteP7OWkNssLOowEwv-Q=",
  "https://media.istockphoto.com/id/1760128029/photo/medina-saudi-arabia-al-masjid-an-nabawi-al-haram.jpg?s=612x612&w=0&k=20&c=lDz1_BAlG4puBJV980vuKNzGG2UJqguG1hqWbCNuJZs=",
  "https://media.istockphoto.com/id/482206266/photo/kaaba-in-mecca.jpg?s=612x612&w=0&k=20&c=wwzNu3XMQpCRVdAcBbeerUGaew0Fk2nGPQkH98Wj474=",
];

// Current image index
let currentIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
  const hero = document.getElementById("img"); // Ensure 'hero' is properly selected
  if (hero) {
    hero.style.backgroundImage = `url(${images[currentIndex]})`; // Correct syntax with template literals
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
  }
}

// Change the background image every 5 seconds
setInterval(changeBackgroundImage, 4000);
