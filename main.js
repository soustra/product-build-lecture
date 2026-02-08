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
