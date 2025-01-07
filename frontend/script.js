const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
const servicesDropdown = document.querySelector(".services");
const servicesContent = document.querySelector(".services + .dropdown-content");
const umrahDropdown = document.querySelector(".umrah");
const umrahContent = document.querySelector(".umrah + .dropdown-content");
const icon = burger.querySelector("i");

// Toggle menu visibility when the burger icon is clicked
burger.addEventListener("click", () => {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none"; // Close menu
    icon.classList.replace("fa-xmark", "fa-bars"); // Change to burger icon
  } else {
    navLinks.style.display = "flex"; // Open menu
    icon.classList.replace("fa-bars", "fa-xmark"); // Change to close icon
  }
});

// Toggle visibility of "Our Services" submenu
servicesDropdown.addEventListener("click", (e) => {
  e.preventDefault();
  if (servicesContent.style.display === "block") {
    servicesContent.style.display = "none";
  } else {
    servicesContent.style.display = "block";
    umrahContent.style.display = "none"; // Close Umrah menu if open
  }
});

// Toggle visibility of "Umrah" submenu
umrahDropdown.addEventListener("click", (e) => {
  e.preventDefault();
  if (umrahContent.style.display === "block") {
    umrahContent.style.display = "none";
  } else {
    umrahContent.style.display = "block";
    servicesContent.style.display = "none"; // Close Services menu if open
  }
});

// Close the navbar when clicking outside of it
document.addEventListener("click", (event) => {
  const isClickInsideNav =
    navLinks.contains(event.target) || burger.contains(event.target);

  if (!isClickInsideNav && window.innerWidth <= 768) {
    navLinks.style.display = "none"; // Close the main navigation
    icon.classList.replace("fa-xmark", "fa-bars"); // Change to burger icon
  }
});

// Adjust navbar display on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.style.display = "flex"; // Show nav links on larger screens
  } else {
    navLinks.style.display = "none"; // Hide nav links on smaller screens
  }
});

// Prevent nav links from hiding on desktop
const otherLinks = navLinks.querySelectorAll("a:not(.services,.umrah)"); // All links except "Our Services" and "Umrah"
otherLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.style.display = "none"; // Only hide on small screens
      icon.classList.replace("fa-xmark", "fa-bars"); // Change to burger icon
    }
  });
});

// Ensure the navbar remains open for larger screens
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 768) {
    navLinks.style.display = "flex"; // Show nav links for larger screens
  }
});

// Add event listener to the logo to reload the page
document.querySelector(".logo").addEventListener("click", () => {
  location.reload();
});

// Hajj Form

// Get DOM elements
const navcontactLink = document.querySelector(".contact-link");
const maincontactLink = document.querySelector("#contact-link");
const footercontactLink = document.querySelector("#Contact-link");

const mainRamadanContact = document.querySelector("#ramadan-contact");
const footerRamadanContact = document.querySelector(".ramadan-contact");
const ContactUs = document.querySelector("#contact-us-form");

const contactFormWrapper = document.getElementById("contact-form-wrapper");
const closeFormButton = document.getElementById("close-form");

// Show the contact form when the navbar link is clicked
navcontactLink.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  contactFormWrapper.style.display = "flex";
});
maincontactLink.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  contactFormWrapper.style.display = "flex";
});
footercontactLink.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  contactFormWrapper.style.display = "flex";
});

// For Ramadan
mainRamadanContact.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  contactFormWrapper.style.display = "flex";
});

footerRamadanContact.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  contactFormWrapper.style.display = "flex";
});

ContactUs.addEventListener("click", (e) => {
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

// Array of background images
const images = [
  "https://cdn.jsdelivr.net/gh/t1m0thyj/WDD-website@gh-pages/images/previews/Coast_day.jpg",
  "https://cdn.jsdelivr.net/gh/t1m0thyj/WDD-website@gh-pages/images/previews/cyberpunk_night.jpg",
  "https://cdn.jsdelivr.net/gh/t1m0thyj/WDD-website@gh-pages/images/thumbnails/24hr-Tahoe-Mix_day.png",
  "https://images.squarespace-cdn.com/content/v1/535b1632e4b0ab57db46e48b/1571362181927-KQ1GMNX5GL11RCFCBO7Z/06.jpg?format=750w",
  "https://cdn.jsdelivr.net/gh/t1m0thyj/WDD-website@gh-pages/images/previews/Coastline_night.jpg",
];

// Current image index
let currentIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
  const hero = document.getElementById("hero"); // Ensure 'hero' is properly selected
  if (hero) {
    hero.style.backgroundImage = `url(${images[currentIndex]})`; // Correct syntax with template literals
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
  }
}

// Change the background image every 5 seconds
setInterval(changeBackgroundImage, 5000);
