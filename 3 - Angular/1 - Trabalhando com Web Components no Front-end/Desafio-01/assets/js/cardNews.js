class cardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = "<h1>H1</h1>";
  }
}

customElements.define("card-news", cardNews);
