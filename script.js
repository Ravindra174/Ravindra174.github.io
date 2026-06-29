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


// Smooth scrolling for same-page menu links

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// Header shadow effect while scrolling

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
