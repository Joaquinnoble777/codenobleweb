// Scroll suave (ya existente)
function scrollToServices() {
  const servicesSection = document.getElementById('services');
  servicesSection.scrollIntoView({ behavior: 'smooth' });
}

// Toggle menú móvil
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
