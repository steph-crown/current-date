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

    const template = document.getElementById("current-date");
    const templateNode = template.content.cloneNode(true);

    shadowRoot.appendChild(templateNode);

    // insert the date into the shadow DOM.
    const dateNode = shadowRoot.getElementById("date");
    dateNode.textContent = formattedDate;
  }
}

customElements.define("current-date", CurrentDate);

const template = document.getElementById("current-date");
const templateNode = template.content.cloneNode(true);

shadowRoot.appendChild(templateNode);

// insert the date into the shadow DOM.
const dateNode = shadowRoot.getElementById("date");
dateNode.textContent = formattedDate;
