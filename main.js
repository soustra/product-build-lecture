class LottoBall extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const number = this.getAttribute('number');
    const ball = document.createElement('div');
    ball.textContent = number;

    const style = document.createElement('style');
    style.textContent = `
      div {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--light-text-color);
        font-size: 24px;
        font-weight: bold;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2), inset 0 -3px 5px rgba(0,0,0,0.3);
        background-color: ${this.getBallColor(number)};
        text-shadow: 0 0 5px rgba(0,0,0,0.3);
      }
    `;

    this.shadowRoot.innerHTML = ''; // Clear previous render
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(ball);
  }

  getBallColor(number) {
    const num = parseInt(number, 10);
    if (num <= 10) return 'var(--ball-color-2)'; // Yellow
    if (num <= 20) return 'var(--ball-color-4)'; // Blue
    if (num <= 30) return 'var(--ball-color-1)'; // Red
    if (num <= 40) return 'var(--ball-color-5)'; // Purple
    return 'var(--ball-color-3)'; // Green
  }
}

customElements.define('lotto-ball', LottoBall);


document.getElementById('generate-btn').addEventListener('click', () => {
  const numbersContainer = document.getElementById('numbers');
  numbersContainer.innerHTML = ''; // Clear previous numbers

  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }

  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

  sortedNumbers.forEach((number, index) => {
    setTimeout(() => {
      const lottoBall = document.createElement('lotto-ball');
      lottoBall.setAttribute('number', number);
      numbersContainer.appendChild(lottoBall);
    }, index * 200); // Stagger the animation
  });
});

// Dark/Light Mode Toggle
const modeToggleBtn = document.getElementById('mode-toggle');
const body = document.body;

function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    applyTheme('light');
  } else {
    applyTheme('dark');
  }
}

// Set initial theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('dark'); // Default to dark if system preference is dark
} else {
  applyTheme('light'); // Default to light
}

// Affiliate Inquiry Link Toggle
const affiliateInquiryLink = document.getElementById('affiliate-inquiry-link');
const affiliateInquirySection = document.getElementById('affiliate-inquiry-section');

affiliateInquiryLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  if (affiliateInquirySection.style.display === 'none' || affiliateInquirySection.style.display === '') {
    affiliateInquirySection.style.display = 'block';
  } else {
    affiliateInquirySection.style.display = 'none';
  }
});

// Multi-language Support
let translations = {};
const languageSelect = document.getElementById('language-select');

async function loadTranslations(lang) {
  try {
    const response = await fetch(`translations/${lang}.json`);
    translations = await response.json();
    applyTranslations();
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });
  // Special case for input placeholders if needed
  const imageUploadInput = document.getElementById('image-upload');
  if (imageUploadInput && translations['select_image_to_upload']) {
    imageUploadInput.setAttribute('title', translations['select_image_to_upload']); // Example for tooltip
    // For file input pseudo-element, CSS needs to be dynamic or use a label
    // For now, I'll update the title/aria-label or similar for accessibility
  }
}

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  loadTranslations(lang);
}

// Event listener for language switcher
if (languageSelect) { // Check if element exists (not all pages have it)
  languageSelect.addEventListener('change', (event) => {
    setLanguage(event.target.value);
  });
}


// Initialize language on page load
const userPreferredLang = localStorage.getItem('lang') || navigator.language.split('-')[0] || 'en';
if (languageSelect) {
  languageSelect.value = userPreferredLang;
}
setLanguage(userPreferredLang);


