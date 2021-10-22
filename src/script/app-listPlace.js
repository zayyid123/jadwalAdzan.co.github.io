import Swal from 'sweetalert2';

class appListPlace extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<datalist id="Places"></datalist>';

    this.renderCities();
  }

  renderCities() {
    const listElement = this.querySelector('datalist');

    fetch('https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/kota.json')
      .then((res) => res.json())
      .then((cities) => {
        cities.forEach((city) => {
          listElement.innerHTML += `<option value="${city}">`;
        });
      })
      .catch((error) => {
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: `${error}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }
}

customElements.define('app-listplace', appListPlace);
