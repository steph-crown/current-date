class CurrentDate extends HTMLElement {
  constructor() {
    super();

    this.currentDate = new Date();
  }

  connectedCallback() {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    this.textContent = this.currentDate.toLocaleDateString("en-US", options);
  }
}

customElements.define("current-date", CurrentDate);
