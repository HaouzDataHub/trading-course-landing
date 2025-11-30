// Professional Navigation & Micro-Interactions - 2025

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Hamburger Menu Toggle
if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}

// Page Navigation Function
function navigateTo(page) {
  const pages = document.querySelectorAll(".page");

  pages.forEach((p) => p.classList.add("hidden"));

  const selectedPage = document.getElementById(page);

  if (selectedPage) {
    selectedPage.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Navbar Navigation
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");

    navigateTo(page);

    // Close mobile menu
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");

    // Active state
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Hero Buttons
const enrollBtn = document.getElementById("enroll-btn");
if (enrollBtn) {
  enrollBtn.addEventListener("click", () => {
    alert("Welcome! Course enrollment is now available.");
  });
}

const exploreBtn = document.getElementById("explore-btn");
if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    navigateTo("courses");
    navLinks.forEach((l) => l.classList.remove("active"));
    const coursesLink = document.querySelector('[data-page="courses"]');
    if (coursesLink) {
      coursesLink.classList.add("active");
    }
  });
}

// Contact Form
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Thank you! Your message has been sent. You will receive a response soon."
    );
    contactForm.reset();
  });
}

// 2025 Micro-interactions: section reveal on scroll
function initScrollAnimations() {
  const animatedSections = document.querySelectorAll(
    ".hero-inner, .feature-item, .course-card, .contact-form, .page-header"
  );

  animatedSections.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(18px)";
    el.style.transition =
      "opacity 420ms ease-out, transform 420ms ease-out";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  animatedSections.forEach((el) => observer.observe(el));
}

// Initialize
window.addEventListener("DOMContentLoaded", () => {
  // Default page
  navigateTo("home");

  // Initial hero subtle reveal
  const heroInner = document.querySelector(".hero-inner");
  if (heroInner) {
    heroInner.style.opacity = 0;
    heroInner.style.transform = "translateY(18px)";
    heroInner.style.transition =
      "opacity 450ms ease-out, transform 450ms ease-out";
    requestAnimationFrame(() => {
      heroInner.style.opacity = 1;
      heroInner.style.transform = "translateY(0)";
    });
  }

  // Start scroll-based animations
  initScrollAnimations();
});
