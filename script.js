// Professional Navigation & Micro-Interactions - 2025

// Elements
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const footerLinks = document.querySelectorAll(".footer-link");
const yearSpan = document.getElementById("year");

// ================= Hamburger Menu Toggle =================
if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    const isActive = navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isActive ? "true" : "false");
  });
}

// ================= Page Navigation Function =================
function navigateTo(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((p) => p.classList.add("hidden"));

  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Helper: update active states in navigation
function setActiveNav(pageId) {
  navLinks.forEach((l) => {
    const target = l.getAttribute("data-page");
    if (target === pageId) {
      l.classList.add("active");
    } else {
      l.classList.remove("active");
    }
  });
}

// ================= Navbar Links =================
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    if (!page) return;

    navigateTo(page);
    setActiveNav(page);

    // Close mobile menu
    if (navMenu && hamburger) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
});

// ================= Footer Links (same SPA behaviour) =================
footerLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    if (!page) return;

    navigateTo(page);
    setActiveNav(page);
  });
});

// ================= Hero Buttons =================
const enrollBtn = document.getElementById("enroll-btn");
if (enrollBtn) {
  enrollBtn.addEventListener("click", () => {
    navigateTo("pricing");
    setActiveNav("pricing");
  });
}

const exploreBtn = document.getElementById("explore-btn");
if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    navigateTo("courses");
    setActiveNav("courses");
  });
}

// ================= Contact Form =================
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = contactForm.querySelector("#name");
    const emailInput = contactForm.querySelector("#email");
    const messageInput = contactForm.querySelector("#message");

    // Simple front-end validation
    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || !email || !message) {
      alert("Please fill in all fields before sending your message.");
      return;
    }

    // Here you can later replace alert with real backend / email integration
    alert(
      "Thank you! Your message has been sent. You will receive a clear reply about the course soon."
    );

    contactForm.reset();
  });
}

// ================= Pricing Button =================
const pricingBtn = document.getElementById("pricing-btn");
if (pricingBtn) {
  pricingBtn.addEventListener("click", () => {
    // Placeholder – later you can redirect to Stripe/PayPal page
    alert("You will be redirected to a secure payment page. Thank you for your trust!");
  });
}

// ================= 2025 Micro-interactions: section reveal on scroll =================
function initScrollAnimations() {
  const animatedSections = document.querySelectorAll(
    ".hero-inner, .feature-item, .course-card, .contact-form, .page-header, .lesson-card, .pricing-card"
  );

  animatedSections.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity 420ms ease-out, transform 420ms ease-out";
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  animatedSections.forEach((el) => observer.observe(el));
}

// ================= Initial hero subtle reveal =================
function initHeroReveal() {
  const heroInner = document.querySelector(".hero-inner");
  if (!heroInner) return;

  heroInner.style.opacity = 0;
  heroInner.style.transform = "translateY(18px)";
  heroInner.style.transition = "opacity 450ms ease-out, transform 450ms ease-out";

  requestAnimationFrame(() => {
    heroInner.style.opacity = 1;
    heroInner.style.transform = "translateY(0)";
  });
}

// ================= Set current year in footer =================
function initYear() {
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
}

// ================= Initialize on DOMContentLoaded =================
window.addEventListener("DOMContentLoaded", () => {
  // Default page
  navigateTo("home");
  setActiveNav("home");

  // Hero animation
  initHeroReveal();

  // Scroll-based animations
  initScrollAnimations();

  // Footer year
  initYear();
});
