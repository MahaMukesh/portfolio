// Dark Mode Toggle
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Project Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    cards.forEach(card => {
      card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? 'block' : 'none';
    });
  });
});

// Contact Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msgEl = document.getElementById('form-message');
  if (!name || !email || !message) {
    msgEl.textContent = 'Please fill all fields.';
    msgEl.style.color = 'red';
    return;
  }
  msgEl.textContent = `Thank you, ${name}! Your message has been sent.`;
  msgEl.style.color = 'green';
  form.reset();
});
