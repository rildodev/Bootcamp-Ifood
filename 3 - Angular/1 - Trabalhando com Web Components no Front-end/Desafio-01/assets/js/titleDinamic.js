class titleDinamic extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    //base componente
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = "Olá";

    //estilizar o componente
    const style = document.createElement("style");
    style.textContent = `
    h1 {
        color: red;
        }
    `;

    //enviar para a shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}

customElements.define("title-dinamic", titleDinamic);