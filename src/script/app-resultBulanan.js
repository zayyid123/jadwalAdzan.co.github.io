class appBulanan extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="resultBulanan">
            <h2>Hasil Bulanan</h2>
            <div class="myResultBulanan">
            <table class="tableBulan">
                <tr>
                    <td><b>Tanggal</b></td>
                    <td><b>Imsyak</b></td>
                    <td><b>Shubuh</b></td>
                    <td><b>Terbit</b></td>
                    <td><b>Dhuha</b></td>
                    <td><b>Dzuhur</b></td>
                    <td><b>Ashr</b></td>
                    <td><b>Maghrib</b></td>
                    <td><b>Isya</b></td>
                </tr>
            </table>
            </div>
        </div>
        `;
  }
}

customElements.define('app-bulanan', appBulanan);
