// Advanced Navigation & Page System - 2025
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.getAttribute('data-page');
    navigateTo(page);
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  const selectedPage = document.getElementById(page);
  if (selectedPage) {
    selectedPage.classList.remove('hidden');
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

// Video Player
document.querySelectorAll('[data-video-id]').forEach(video => {
  video.style.cursor = 'pointer';
  video.addEventListener('click', function() {
    const videoId = this.getAttribute('data-video-id');
    const modal = document.createElement('div');
    modal.className = 'video-modal active';
    modal.innerHTML = `<div class='video-content'><button class='close'>&times;</button><iframe width='100%' height='600' src='https://www.youtube.com/embed/${videoId}' frameborder='0' allowfullscreen></iframe></div>`;
    document.body.appendChild(modal);
    modal.querySelector('.close').onclick = () => modal.remove();
    modal.onclick = (e) => e.target === modal && modal.remove();
  });
});

// Contact Form
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('شكراً! تم استقبال رسالتك');
    form.reset();
  });
}

// Init
navigateTo('home');
navigateT o('home');
