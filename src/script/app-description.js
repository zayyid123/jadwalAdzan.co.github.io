class appDescription extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <section class="myHome">
                <lottie-player class="anmLottie1" src="https://assets10.lottiefiles.com/packages/lf20_vsbadcxj.json" background="transparent"  speed="1" loop  autoplay></lottie-player>
                <div class="mainDescript">
                    <p class="descript">Cek jadwal sholat sekarang lebih mudah</p>
                    <h2>Tetap istiqomah, dan jaga kesehatan</h2>
                    <p>Platform digital penyedia layanan cek jadwal sholat</p>
                    <p></p>
                    <a href="#myMain"><button>mulai</button></a>
                </div>
            </section>
        `;
  }
}

customElements.define('app-description', appDescription);
