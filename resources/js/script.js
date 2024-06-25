
document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.textContent = 'Hello, World!';
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  