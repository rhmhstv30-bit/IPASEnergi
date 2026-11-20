var NAMA=["Panduan penggunaan","Tujuan","Materi","Simulasi dan contoh soal","Kuis","Rangkuman","Tentang"];
var KEY="energi_demo2",S={};
function $(i){return document.getElementById(i)}
function load(){try{S=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){S={}}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}

var HAL=[
 /* 0. Panduan penggunaan */
 function(){return '<h2 class="page">Halo, '+S.nama.split(" ")[0]+'. Siap belajar energi?</h2><p class="lead">Ada tujuh halaman di media ini. Menu di atas menunjukkan kamu sedang ada di halaman mana.</p><ol class="t"><li>Panduan penggunaan: halaman yang sedang kamu baca.</li><li>Tujuan: apa yang akan kamu kuasai.</li><li>Materi: slide tentang jenis-jenis energi.</li><li>Simulasi dan contoh soal: coba sendiri, lalu latihan menghitung.</li><li>Kuis: cek sejauh mana kamu paham.</li><li>Rangkuman: poin penting yang perlu diingat.</li><li>Tentang: informasi media belajar ini.</li></ol><div class="box"><b>Cara berpindah halaman</b>Klik nama halaman di menu, atau pakai tombol Lanjut dan Kembali di bagian bawah. Tombol kuning di menu menandai halamanmu sekarang.</div><div class="box"><b>Sebelum mulai</b>Pastikan internet aktif supaya slide dan kuis bisa tampil. Di HP, putar layar ke samping saat membaca slide.</div>'},
 /* 1. Tujuan */
 function(){return '<h2 class="page">Apa yang Akan Kamu Capai</h2><p class="lead">Setelah belajar bagian ini, kamu bisa:</p><ul class="t"><li>Menyebutkan jenis-jenis energi beserta contohnya.</li><li>Mengubah satuan massa, kecepatan, dan tinggi supaya siap dihitung.</li><li>Menghitung energi kinetik dan energi potensial.</li><li>Menyebutkan perubahan bentuk energi pada alat di sekitarmu.</li><li>Menghitung energi mekanik dan memakai kekekalannya.</li></ul><div class="box"><b>Kenapa ini penting?</b>Di bengkel, di lab komputer, bahkan di rumah, semua alat memakai dan mengubah energi. Paham hitungannya membantumu menilai alat itu dengan benar.</div>'},
 /* 2. Materi (Canva) */
 function(){return '<h2 class="page">Materi: Jenis-jenis Energi</h2><p class="lead">Baca slide satu per satu. Klik ikon layar penuh di pojok slide supaya lebih jelas.</p><div class="embed"><iframe loading="lazy" title="Jenis-jenis Energi Presentasi" src="https://www.canva.com/design/DAHbVFcas_g/OhYsgj1nlgncCNtvvn-40A/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe></div><p class="foot"><a href="https://www.canva.com/design/DAHbVFcas_g/OhYsgj1nlgncCNtvvn-40A/view?utm_content=DAHbVFcas_g&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Jenis-jenis Energi Presentasi</a> oleh Missel Putbyhah. Kalau slide tidak muncul, buka lewat link ini.</p>'},
 /* 3. Simulasi dan contoh soal */
 function(){return '<h2 class="page">Simulasi dan Contoh Soal</h2><p class="lead">Coba simulasinya dulu, lalu kerjakan soal di bawahnya.</p><div class="ph" id="simulasi-slot">Area simulasi<br>(bar energi dan benda bergerak muncul di sini)</div><ol class="t"><li>Atur massa benda, lalu catat energinya.</li><li>Naikkan tinggi awal. Tebak dulu sebelum menjalankan: energinya naik atau turun?</li><li>Bandingkan hasil simulasi dengan hitunganmu sendiri.</li></ol><h3 class="part">Contoh soal</h3><div class="box"><b>Rumus</b><div class="formula">Ek = ½ · m · v²</div>Ek dalam joule (J), m massa dalam kg, v kecepatan dalam m/s.</div><p class="lead">Tulis jawabanmu dalam joule, angkanya saja.</p><div class="box"><b>Soal</b>Sebuah benda bermassa 2 kg bergerak dengan kecepatan 3 m/s. Berapa energi kinetiknya?</div><div class="row"><input id="jw" inputmode="decimal" aria-label="Jawaban"><span>J</span><button class="btn" id="cek">Periksa</button></div><p class="fb" id="fb" role="status"></p>'},
 /* 4. Kuis (Wayground) */
 function(){return '<h2 class="page">Kuis</h2><p class="lead">Kerjakan semua soal sampai selesai, lalu lanjut ke Rangkuman.</p><div class="quiz"><iframe src="https://wayground.com/embed/quiz/6afe9a364276e942c457c191" title="Kuis Energi - Wayground" frameborder="0" allowfullscreen></iframe><a href="https://wayground.com/admin?source=embedFrame" target="_blank" rel="noopener">Explore more at Wayground.</a></div>'},
 /* 5. Rangkuman */
 function(){return '<h2 class="page">Rangkuman</h2><p class="lead">Poin yang perlu kamu ingat dari semua halaman.</p><ul class="t"><li>Energi adalah kemampuan untuk melakukan usaha. Satuannya joule (J).</li><li>Energi punya banyak bentuk, misalnya kinetik, potensial, panas, listrik, kimia, cahaya, bunyi, dan nuklir.</li><li>Energi bisa berubah bentuk. Kipas angin mengubah energi listrik menjadi energi gerak.</li><li>Hukum kekekalan energi: energi tidak dapat diciptakan atau dimusnahkan, hanya berubah bentuk.</li><li>Energi terbarukan (matahari, angin, air) tidak akan habis. Energi tak terbarukan (minyak bumi, batu bara) akan habis.</li></ul><div class="box"><b>Rumus penting</b><div class="formula">Ek = ½ · m · v²</div><div class="formula">Ep = m · g · h</div><div class="formula">Em = Ep + Ek</div></div>'},
 /* 6. Tentang */
 function(){return '<h2 class="page">Tentang</h2><p class="lead">Media belajar ini dibuat untuk membantumu memahami energi.</p><ul class="t"><li>Disusun oleh: [isi nama kamu]</li><li>Sekolah: [isi nama sekolah]</li><li>Mata pelajaran: IPAS, kelas X</li><li>Materi dibuat dengan Canva, kuis dengan Wayground.</li></ul>'}
];
var N=HAL.length-1;

function render(){
  var p=S.p||0, m=$("menu");
  $("isi").innerHTML=HAL[p]();
  if(!m.children.length){
    m.innerHTML=NAMA.map(function(n,i){return '<button class="tab" data-p="'+i+'">'+n+'</button>'}).join("");
  }
  Array.prototype.forEach.call(m.children,function(b,i){if(i==p)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current")});
  var cur=m.children[p]; if(cur)m.scrollLeft+=cur.getBoundingClientRect().left-m.getBoundingClientRect().left-(m.clientWidth-cur.offsetWidth)/2;
  var r="";for(var k=0;k<=60;k++){var h=k%10==0?20:(k%5==0?14:8);r+='<line x1="'+(k*10)+'" y1="26" x2="'+(k*10)+'" y2="'+(26-h)+'" stroke="currentColor" stroke-width="1.2"/>'}
  $("rule").innerHTML='<rect x="0" y="0" width="'+(600*(p+1)/(N+1))+'" height="26" fill="var(--amber)" opacity=".6"/>'+r; $("rule").style.color="var(--ink)";
  $("prog").textContent="Halaman "+(p+1)+" dari "+(N+1)+": "+NAMA[p];
  $("kembali").style.visibility=p==0?"hidden":"visible";
  $("lanjut").textContent=p==N?"Ulangi dari awal":"Lanjut";
  var c=$("cek"); if(c)c.onclick=cek;
}
$("menu").onclick=function(e){var b=e.target.closest(".tab");if(b){S.p=+b.dataset.p;save();render();window.scrollTo(0,0)}};
function cek(){
  var v=parseFloat($("jw").value.replace(",",".")),f=$("fb");
  if(isNaN(v)){f.className="fb no";f.textContent="Isi dulu jawabanmu dengan angka.";return}
  var m={9:["ok","Tepat. Ek = ½ · 2 · 3² = 9 J."],18:["no","Hampir. Rumus Ek punya ½ di depan, jadi hasilmu perlu dibagi dua."],3:["no","Kecepatan harus dikuadratkan dulu: 3² = 9, baru dikalikan yang lain."],6:["no","Kamu mengalikan massa dan kecepatan. Energi kinetik memakai v², bukan v."]};
  var x=m[v]||["no","Belum tepat. Tulis rumusnya dulu, lalu masukkan angkanya satu per satu."];
  f.className="fb "+x[0];f.textContent=x[1];
}
function show(){
  var ok=S.nama&&S.absen&&S.kelas; $("v-login").hidden=!!ok; $("v-app").hidden=!ok;
  if(ok){$("w-nama").textContent=S.nama;$("w-info").textContent="Absen "+S.absen+", "+S.kelas;render()}
}
function go(d){S.p=Math.max(0,Math.min(N,(S.p||0)+d));save();render();window.scrollTo(0,0)}
$("lanjut").onclick=function(){if((S.p||0)==N){S.p=0;save();render();window.scrollTo(0,0)}else go(1)};
$("kembali").onclick=function(){go(-1)};
$("masuk").onclick=function(){
  var a=$("nama").value.trim(),b=$("absen").value.trim(),c=$("kelas").value;
  if(!a||!b||!c){$("err").textContent="Lengkapi nama, nomor absen, dan kelas sebelum masuk.";return}
  if(!/^\d{1,3}$/.test(b)){$("err").textContent="Nomor absen hanya berisi angka.";return}
  S={nama:a,absen:b,kelas:c,p:0};save();kirimData({nama:a,absen:b,kelas:c,tahap:"Masuk",skor:""});$("err").textContent="";show();window.scrollTo(0,0);
};
$("keluar").onclick=function(){S={};save();show();window.scrollTo(0,0)};

/* ===== Pengiriman data ke Google Form =====
   Alamat form dan kode kolom (entry) diambil dari link pra-pengisian.
   Jika kolom di form diubah/dibuat ulang, kode entry harus diperbarui. */
var FORM_URL="https://docs.google.com/forms/d/e/1FAIpQLSfJk8SsTCjcu2yxaoPipzzYZ8ZP4pWLqsUqbyncbPPlNUi_Bg/formResponse";
var KOLOM={nama:"entry.1283408016",absen:"entry.433066223",kelas:"entry.924447670",tahap:"entry.1182115751",skor:"entry.1764623562"};
var QKEY="energi_antrean";

function paket(d){var b=new URLSearchParams();for(var k in KOLOM)b.append(KOLOM[k],d[k]==null?"":d[k]);return b.toString()}
function kirimSatu(str){return fetch(FORM_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:str})}
function antre(){try{return JSON.parse(localStorage.getItem(QKEY))||[]}catch(e){return[]}}
function simpanAntre(a){try{localStorage.setItem(QKEY,JSON.stringify(a))}catch(e){}}

/* Kirim data. Jika gagal (misalnya tidak ada internet), simpan dulu di antrean. */
function kirimData(d){
  var s=paket(d);
  return kirimSatu(s).catch(function(){var a=antre();a.push(s);simpanAntre(a)});
}
/* Kirim ulang antrean saat internet kembali atau saat halaman dibuka lagi. */
function kirimUlang(){
  var a=antre(); if(!a.length)return; simpanAntre([]);
  a.forEach(function(s){kirimSatu(s).catch(function(){var b=antre();b.push(s);simpanAntre(b)})});
}
window.addEventListener("online",kirimUlang);

/* ===== Suara klik lembut (dibuat lewat Web Audio, tanpa file) ===== */
var SUARA=true,AC=null;
function pop(){
  if(!SUARA)return;
  try{
    AC=AC||new (window.AudioContext||window.webkitAudioContext)();
    var t=AC.currentTime,o=AC.createOscillator(),g=AC.createGain();
    o.type="sine"; o.frequency.setValueAtTime(520,t); o.frequency.exponentialRampToValueAtTime(220,t+.09);
    g.gain.setValueAtTime(.0001,t); g.gain.exponentialRampToValueAtTime(.1,t+.008); g.gain.exponentialRampToValueAtTime(.0001,t+.12);
    o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t+.14);
  }catch(e){}
}
document.addEventListener("click",function(e){if(e.target.closest("button")||e.target.matches(".opt input"))pop()});

/* Hormati pengaturan "kurangi animasi" di perangkat */
if(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches){["sw","st"].forEach(function(i){var s=$(i);if(s&&s.pauseAnimations)s.pauseAnimations()})}

load();show();kirimUlang();
