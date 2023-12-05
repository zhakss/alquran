function getURL(e) {
  const pageURL = window.location.search.substring(1);
  const urlVariable = pageURL.split('&');
  for (let i = 0; i < urlVariable.length; i++) {
      const parameterName = urlVariable[i].split('=');
    if (parameterName[0] == e) {
      return parameterName[1];
    }
  }
}
let id = getURL('id');
console.log(id);
let main = document.querySelector('.main');
let judul = document.querySelector('.title');
let url = `https://equran.id/api/surat/${id}`;
async function data() {
  let res = await fetch(url);
  let data = await res.json();
  let title = '';
  let surah = '';
  for(let i = 0; i < data.ayat.length; i++){
  surah += `
  <div class="col">
    <div>${data.ayat[i].nomor}.</div>
    <div class="ar">${data.ayat[i].ar}</div>
    <b class="tr">${data.ayat[i].tr}</b>
    <div class="id">${data.ayat[i].idn}</div>
  </div>
  `;
  };
  title += `
  <div class="col">
    <div class="title">${data.nomor}. ${data.nama}</div>
    <b class="tr">${data.nama_latin}</b>
    <div class="id">${data.arti}</div>
  </div>
  `;
  main.innerHTML = surah;
  judul.innerHTML = title;
  document.title = `${data.nama_latin}`;
  console.log(data);
};
data();
