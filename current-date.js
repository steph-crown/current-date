class CurrentDate extends HTMLElement {
  constructor() {
    super();

    this.currentDate = new Date();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" }); // Create Shadow DOM

    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const formattedDate = this.currentDate.toLocaleDateString("en-US", options);

    shadowRoot.innerHTML = `
    <style>
      p {
        text-align: center;
        font-weight: normal;
        padding: 1em;
        margin: 0 0 2em 0;
        background-color: #eee;
        border: 1px solid #666;
        color: red;
      }
    </style>

    <p>${formattedDate}</p>`;
  }
}

customElements.define("current-date", CurrentDate);
