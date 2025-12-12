document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
});

// Components
const headerHTML = `
  <div class="container nav-container">
    <a href="index.html" class="logo">☁️ Cloud Academy</a>
    <button class="mobile-menu-btn" onclick="toggleMenu()">☰</button>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="courses.html">Courses</a></li>
      <li><a href="guidance.html">Guidance</a></li>
      <li><a href="testimonials.html">Testimonials</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="register.html" class="btn btn-sm">Register</a></li>
    </ul>
  </div>
`;

const footerHTML = `
  <div class="container">
    <div class="footer-links">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
      <a href="privacy.html">Privacy Policy</a>
    </div>
    <p>&copy; 2024 Cloud Academy. All rights reserved.</p>
  </div>
`;

function loadHeader() {
  const header = document.querySelector('header');
  if (header) {
    header.innerHTML = headerHTML;
    setActiveLink();
  }
}

function loadFooter() {
  const footer = document.querySelector('footer');
  if (footer) {
    footer.innerHTML = footerHTML;
  }
}

function setActiveLink() {
  const path = window.location.pathname;
  const page = path.split("/").pop() || 'index.html'; // Default to index.html if empty
  
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    // Check if the link href matches the current page file name
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });
}

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// Form Validation Helper (Generic)
function validateForm(event) {
  event.preventDefault();
  alert("Thank you! Your information has been submitted successfully (Demo Mode).");
  event.target.reset();
}
