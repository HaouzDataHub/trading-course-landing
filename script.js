// Professional Navigation System - 2025
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Hamburger Menu Toggle
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

// Navbar Navigation
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.getAttribute('data-page');
    navigateTo(page);
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Page Navigation Function
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  const selectedPage = document.getElementById(page);
  if (selectedPage) {
    selectedPage.classList.remove('hidden');
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

// Hero Buttons
const enrollBtn = document.getElementById('enroll-btn');
if (enrollBtn) {
  enrollBtn.addEventListener('click', () => {
    alert('Welcome! Course enrollment is now available.');
  });
}

const exploreBtn = document.getElementById('explore-btn');
if (exploreBtn) {
  exploreBtn.addEventListener('click', () => {
    navigateTo('courses');
    navLinks.forEach(l => l.classList.remove('active'));
    document.querySelector('[data-page="courses"]').classList.add('active');
  });
}

// Contact Form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent. We will contact you soon.');
    contactForm.reset();
  });
}

// Initialize
navigateTo('home');
