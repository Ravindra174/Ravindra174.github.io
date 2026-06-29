// Smooth fade-in animation on scroll

const fadeElements = document.querySelectorAll(
  ".hero-content, .hero-card, .stats div, .section, .card, .highlight"
);

fadeElements.forEach((element) => {
  element.classList.add("fade-item");
});

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -60px 0px"
  }
);

fadeElements.forEach((element) => {
  fadeObserver.observe(element);
});


// Header shadow while scrolling

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// Contact form placeholder message

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thank you for your message. This contact form will be connected to email service soon.");
    contactForm.reset();
  });
}
