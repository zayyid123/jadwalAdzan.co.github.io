class appFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p class="mb-0">Copyright © <span id="footer-cr-years">2021</span> jadwalAdzan.co All Right Reserved.</p>
        `;
  }
}

customElements.define('app-footer', appFooter);
