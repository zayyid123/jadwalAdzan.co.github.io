// eslint-disable-next-line import/extensions
import './app-listPlace.js';

class appMain extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <form id="myMain" onsubmit="return false">
            <h1>Jadwal Adzan</h1>
            <div class="mainApp">
                <div class="input">
                    <h2>Input data tempat</h2>
                    <div>
                        <label for="Place">Place :</label>
                        <input list="Places" name="Place" id="Place" required>
                        <app-listplace></app-listplace>
                    </div>

                    <div>
                        <button id="submitPlace" type="submit">submit</button>
                    </div>
                </div>

                <div class="result">
                    <h2>Hasil</h2>
                    <div class="myResult">
                        <p>silahkan masukkan data tempat anda</p>
                    </div>
                </div>

                <app-bulanan></app-bulanan>
            </div>
        </form>
        `;
  }
}

customElements.define('app-main', appMain);
