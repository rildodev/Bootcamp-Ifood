class cardNew extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = this.get;
  }
  build() {}
  style() {}
}

customElements.define("card-new", cardNew);
