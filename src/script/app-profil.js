import myPhoto from '../assets/profil.png';
import fb from '../assets/facebook.png';
import ig from '../assets/instagram.png';
import github from '../assets/github.png';

class appProfil extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h1 style="margin-top: 10px; text-align: center;">My Profil</h1>
        <div class="myProfil">
            <div class="profil card">
                <h3 class="title">Mochamad Muzayyid AL Hakim</h2>

                <figure>
                    <img src="${myPhoto}" alt="My profile">
                </figure>

                <p>Assalamualaikum perkenalkan saya Mochamad Muzayyid Al Hakim bisa dipanggil zayyid saya adalah mahasiswa TI Universitas Negeri Surabaya.</p>
            </div>
            <div class="sosmed card">
                <h3>Social Media</h2>
                <div>
                    <a href="https://www.instagram.com/zayyid_123/" target="_blank" rel="noopener"><img src="${ig}" alt="My profile"></a>
                    <a href="https://www.facebook.com/mochamad.zayyid" target="_blank" rel="noopener"><img src="${fb}" alt="My profile"></a>
                    <a href="https://github.com/zayyid123" target="_blank" rel="noopener"><img src="${github}" alt="My profile"></a>
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define('app-profil', appProfil);
