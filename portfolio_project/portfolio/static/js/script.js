// Typed.js Initialization
document.addEventListener('DOMContentLoaded', function () {
  var typed = new Typed('#element', {
    strings: ['Web Developer', 'Software Developer', 'Tech Enthusiast'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });
});


// Highlight Navigation on Scroll
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('main section');

window.addEventListener('scroll', () => {
let current = '';
sections.forEach(section => {
    const sectionTop = section.offsetTop - 50; // Adjust for header height
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
    }
});
navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
    }
});
});

// Scroll Animations using Intersection Observer
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
    } else {
        entry.target.classList.remove('fade-in');
    }
});
}, { threshold: 0.1 });

const animatableElements = document.querySelectorAll('.animatable');
animatableElements.forEach(el => observer.observe(el));

// Back-to-Top Button
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.classList.add('back-to-top');
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
if (window.scrollY > 300) {
    backToTop.style.display = 'block';
} else {
    backToTop.style.display = 'none';
}
});

// Filter Projects
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    projects.forEach(project => {
        if (project.classList.contains(category) || category === 'all') {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
});
});

