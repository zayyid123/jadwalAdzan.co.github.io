class appBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h1>jadwal<span>Adzan</span>.co</h1>
        `;
  }
}

customElements.define('app-bar', appBar);
