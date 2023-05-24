class cardNew extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");

    const autor = document.createElement("span");
    autor.textContent = "por " + (this.getAttribute("autor") || "Anonimo");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card_right");

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("img-src");
    newsImage.alt = "Imagem da notícia";

    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }
  style() {
    const style = document.createElement("style");
    style.textContent = `
    
  .card {
    width: 80%;
  
    box-shadow: -webkit-box-shadow 10px 9px 14px 1px rgba(0,0,0,0.43);
    -moz-box-shadow: 10px 9px 14px 1px rgba(0,0,0,0.43);
    box-shadow: 10px 9px 14px 1px rgba(0,0,0,0.43);
  
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  
    align-items: center;
    
    justify-content: space-between;
  
  }
  
  .card_left {
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    padding-left: 10px;
  }
  
  .card .card_left {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .card_left > h1 {
    margin: 15px;
    font-size: 25px;
  }
  
  .card .card_left > span {
    color: #313131;
  }
  
  .card .card_left  > p {
    color: #b0a4a4;
  }
  
  .card .card_right > img {
    width: 70%;
  }
  
    `;

    return style;
  }
}

customElements.define("card-new", cardNew);
