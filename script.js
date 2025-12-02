const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const yearSpan = document.getElementById("year");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Optional: close nav on link click (mobile)
navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Formspree contact form submission handler
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      alert("Thank you! Your message has been sent.");
      contactForm.reset();
    } else {
      alert("Oops! There was a problem sending your message.");
    }
  });
}
