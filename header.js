class CustomHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
          :host {
              --header-bg: #139848;
              --header-text: #ffffff;
              --primary-color: #ffd700;
              --secondary-color: #302681;
              --contrast-text: #000000;
              --padding-base: 1rem;
              --font-size-medium: 1.2rem;
              --border-radius: 8px;
              --link-hover: #f0f0f0;
          }
          header {
              background: var(--header-bg);
              color: var(--header-text);
              padding: var(--padding-base);
              text-align: center;
              position: relative;
          }
          .header-img {
              max-width: 6rem;
              position: absolute;
              top: 0.5rem;
              right: 0.5rem;
          }
          .yellow-line {
              background: var(--primary-color);
              height: 0.3rem;
              width: 100%;
          }
          nav ul {
              list-style: none;
              padding: 0;
              margin-top: var(--padding-base);
              display: flex;
              justify-content: center;
              gap: var(--padding-base);
          }
          nav ul li a {
              background: var(--secondary-color);
              color: var(--header-text);
              text-decoration: none;
              padding: 0.5rem 1rem;
              font-size: var(--font-size-medium);
              font-weight: bold;
              border-radius: var(--border-radius);
              display: inline-block;
              transition: background 0.3s, color 0.3s;
          }
          nav ul li a:hover,
          nav ul li a:focus {
              background: var(--link-hover);
              color: var(--contrast-text);
          }
      </style>
      <header>
          <h1>The Internet in Brazil</h1>
          <nav>
              <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="history.html">History</a></li>
                  <li><a href="impact.html">Impact</a></li>
              </ul>
          </nav>
      </header>
      <div class="yellow-line"></div>
    `;
  }
}
customElements.define('custom-header', CustomHeader);
