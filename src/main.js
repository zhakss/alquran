let main = document.querySelector('.row');
let url = 'https://equran.id/api/surat';
async function data() {
  let res = await fetch(url);
  let data = await res.json();
  let surah = '';
  data.forEach(surat => {
    surah += `
    <div class="col"
    onclick="location.href='src/surah/surah.html?id=${surat.nomor}'">
      <div class="title">${surat.nomor}. ${surat.nama}</div>
      <div>${surat.nama_latin}</div>
      <div>(${surat.arti})</div>
    </div>
    `;
  });
  main.innerHTML = surah;
  console.log(data);
};
data();