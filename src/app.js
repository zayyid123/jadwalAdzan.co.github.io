/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import 'regenerator-runtime';
import './style/style.css';
import '@lottiefiles/lottie-player';
import './script/app-bar.js';
import './script/app-main.js';
import './script/app-description.js';
import './script/app-resultBulanan.js';
import './script/app-profil.js';
import './script/app-footer.js';
import moment from 'moment';
import Swal from 'sweetalert2';

const main = () => {
  const submitPlace = document.querySelector('#submitPlace');
  const myResult = document.querySelector('.myResult');
  const myResultBulanan = document.querySelector('.tableBulan');

  submitPlace.addEventListener('click', () => {
    const place = document.getElementById('Place').value;
    const year = moment().format('YYYY');
    const month = moment().format('MM');
    const day = moment().format('DD');

    fetch(`https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${place}/${year}/${month}.json`)
      .then((res) => res.json())
      .then((moreData) => {
        const nowDate = `${year}-${month}-${day}`;
        myResult.innerHTML = '';
        moreData.forEach((data) => {
          // macari data pada tanggal sekarang
          if (data.tanggal === nowDate) {
            myResult.innerHTML = `
                    <h3>${place.toUpperCase()} ${nowDate}</h3>
                    <table>
                        <tr style="font-weight: 700">
                            <td>Waktu</td>
                            <td>Jam</td>
                        </tr>
                        <tr>
                            <td>Imsyak</td>
                            <td>${data.imsyak}</td>
                        </tr>
                        <tr>
                            <td>shubuh</td>
                            <td>${data.shubuh}</td>
                        </tr>
                        <tr>
                            <td>terbit</td>
                            <td>${data.terbit}</td>
                        </tr>
                        <tr>
                            <td>dhuha</td>
                            <td>${data.dhuha}</td>
                        </tr>
                        <tr>
                            <td>dzuhur</td>
                            <td>${data.dzuhur}</td>
                        </tr>
                        <tr>
                            <td>ashr</td>
                            <td>${data.ashr}</td>
                        </tr>
                        <tr>
                            <td>magrib</td>
                            <td>${data.magrib}</td>
                        </tr>
                        <tr>
                            <td>isya</td>
                            <td>${data.isya}</td>
                        </tr>
                    </table>
                    `;
          }
        });
        myResultBulanan.innerHTML = `
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
            `;
        moreData.forEach((data) => {
          // mencari data berdasarkan bulan
          myResultBulanan.innerHTML += `
                <tr>
                    <td>${data.tanggal}</td>
                    <td>${data.imsyak}</td>
                    <td>${data.shubuh}</td>
                    <td >${data.terbit}</td>
                    <td>${data.dhuha}</td>
                    <td>${data.dzuhur}</td>
                    <td>${data.ashr}</td>
                    <td>${data.magrib}</td>
                    <td>${data.isya}</td>
                </tr>`;
        });
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'data berhasil di ubah',
          showConfirmButton: false,
          timer: 1500,
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
  });
};

document.addEventListener('DOMContentLoaded', main);
