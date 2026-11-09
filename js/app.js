var NAMA=["Tujuan Pembelajaran","Materi","Simulasi","Latihan Hitung","Game","Evaluasi Akhir"];
var KEY="energi_demo2",S={};
function $(i){return document.getElementById(i)}
function load(){try{S=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){S={}}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}

var HAL=[
 function(){return '<h2 class="page">Halo, '+S.nama.split(" ")[0]+'. Siap belajar energi?</h2><p class="lead">Ada enam tahap yang akan kamu lewati.</p><ol class="t"><li>Tujuan Pembelajaran: apa yang akan kamu kuasai.</li><li>Materi: konsep dan rumus, dibagi per bagian kecil.</li><li>Simulasi: coba sendiri, ubah angkanya, lihat hasilnya.</li><li>Latihan Hitung: soal bertahap dengan umpan balik.</li><li>Game: tantangan berskor.</li><li>Evaluasi Akhir: cek sejauh mana kamu paham.</li></ol>'},
 function(){return '<h2 class="page">Apa yang Akan Kamu Capai</h2><p class="lead">Setelah belajar bagian ini, kamu bisa:</p><ul class="t"><li>Mengubah satuan massa, kecepatan, dan tinggi supaya siap dihitung.</li><li>Menghitung energi kinetik dan energi potensial.</li><li>Menyebutkan perubahan bentuk energi pada alat di sekitarmu.</li><li>Menghitung energi mekanik dan memakai kekekalannya.</li></ul><div class="box"><b>Kenapa ini penting?</b>Di bengkel, di lab komputer, bahkan di rumah, semua alat memakai dan mengubah energi. Paham hitungannya membantumu menilai alat itu dengan benar.</div>'},
 function(){return '<h2 class="page">Energi Kinetik</h2><p class="lead">Bagian 1 dari 4. Energi kinetik adalah energi yang dimiliki benda karena geraknya.</p><p>Makin berat bendanya dan makin cepat geraknya, makin besar energinya. Kecepatan punya pengaruh lebih besar, karena nilainya dikuadratkan.</p><div class="box"><b>Rumus</b><div class="formula">Ek = ½ · m · v²</div>Ek dalam joule (J), m massa dalam kg, v kecepatan dalam m/s.</div><div class="box"><b>Contoh di sekitarmu</b>Isi contoh kasus yang dekat dengan jurusan siswa di sini.</div>'},
 function(){return '<h2 class="page">Coba Sendiri di Simulasi</h2><p class="lead">Ubah nilainya, lalu perhatikan apa yang berubah.</p><div class="ph">Area simulasi<br>(bar energi dan benda bergerak muncul di sini)</div><ol class="t"><li>Atur massa benda, lalu catat energinya.</li><li>Naikkan tinggi awal. Tebak dulu sebelum menjalankan: energinya naik atau turun?</li><li>Bandingkan hasil simulasi dengan hitunganmu sendiri.</li></ol>'},
 function(){return '<h2 class="page">Latihan Hitung</h2><p class="lead">Soal 1 dari 5. Tulis jawabanmu dalam joule, angkanya saja.</p><div class="box"><b>Soal</b>Sebuah benda bermassa 2 kg bergerak dengan kecepatan 3 m/s. Berapa energi kinetiknya?</div><div class="row"><input id="jw" inputmode="decimal" aria-label="Jawaban"><span>J</span><button class="btn" id="cek">Periksa</button></div><p class="fb" id="fb" role="status"></p>'},
 function(){return '<h2 class="page">Tantangan Energi</h2><p class="lead">Selesaikan misi, kumpulkan skor.</p><div class="ph">Area game</div><div class="score"><div><span>Skor</span><strong>0</strong></div><div><span>Level</span><strong>1</strong></div></div>'},
 function(){return '<h2 class="page">Evaluasi Akhir</h2><p class="lead">Soal 1 dari 10. Pilih satu jawaban.</p><div class="box"><b>Soal</b>Isi soal pilihan ganda muncul di sini.</div><label class="opt"><input type="radio" name="o">Pilihan A</label><label class="opt"><input type="radio" name="o">Pilihan B</label><label class="opt"><input type="radio" name="o">Pilihan C</label><label class="opt"><input type="radio" name="o">Pilihan D</label>'},
 function(){return '<h2 class="page">Kerja bagus, '+S.nama.split(" ")[0]+'.</h2><p class="lead">Kamu sudah sampai di akhir. Skor dan hasilmu akan tampil di sini.</p><div class="score"><div><span>Skor akhir</span><strong>–</strong></div></div>'}
];
var N=HAL.length-1;

function render(){
  var p=S.p||0; $("isi").innerHTML=HAL[p]();
  var mid=p>=1&&p<=6; $("bar").hidden=!mid;
  if(mid){
    var r="";for(var k=0;k<=60;k++){var h=k%10==0?20:(k%5==0?14:8);r+='<line x1="'+(k*10)+'" y1="26" x2="'+(k*10)+'" y2="'+(26-h)+'" stroke="currentColor" stroke-width="1.2"/>'}
    $("rule").innerHTML='<rect x="0" y="0" width="'+(600*p/6)+'" height="26" fill="var(--amber)" opacity=".6"/>'+r; $("rule").style.color="var(--ink)";
    $("prog").textContent="Tahap "+p+" dari 6: "+NAMA[p-1];
  }
  $("kembali").style.visibility=p==0?"hidden":"visible";
  $("lanjut").textContent=p==0?"Mulai":(p==N?"Ulangi dari awal":(p==N-1?"Selesai":"Lanjut"));
  var c=$("cek"); if(c)c.onclick=cek;
}
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
  S={nama:a,absen:b,kelas:c,p:0};save();kirimData({nama:a,absen:b,kelas:c,tahap:"Masuk",skor:"0"});$("err").textContent="";show();window.scrollTo(0,0);
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

/* ===== Suara klik =====
   Suara dibuat langsung oleh browser (tanpa file audio), jadi tidak perlu isi folder aset.
   Untuk mematikan, hapus blok ini atau ubah SUARA menjadi false. */
var SUARA=true, audioCtx=null;
function bunyi(){
  if(!SUARA)return;
  try{
    var AC=window.AudioContext||window.webkitAudioContext; if(!AC)return;
    if(!audioCtx)audioCtx=new AC();
    if(audioCtx.state==="suspended")audioCtx.resume();
    var t=audioCtx.currentTime, o=audioCtx.createOscillator(), g=audioCtx.createGain();
    /* Suara "pop" lembut: nada sinus naik cepat seperti gelembung, lalu hilang halus.
       Ubah angka untuk menyetel: 380 = nada awal, 760 = nada akhir, 0.16 = volume (maks 1). */
    o.type="sine";
    o.frequency.setValueAtTime(380,t);
    o.frequency.exponentialRampToValueAtTime(760,t+0.05);
    g.gain.setValueAtTime(0.0001,t);
    g.gain.exponentialRampToValueAtTime(0.16,t+0.012);
    g.gain.exponentialRampToValueAtTime(0.0001,t+0.11);
    o.connect(g); g.connect(audioCtx.destination);
    o.start(t); o.stop(t+0.12);
  }catch(e){}
}
/* Satu pendengar untuk semua tombol, termasuk yang muncul belakangan (misalnya tombol Periksa) dan pilihan jawaban. */
document.addEventListener("click",function(e){
  var el=e.target.closest&&e.target.closest("button, .opt");
  if(el&&!el.disabled)bunyi();
},true);

load();show();kirimUlang();
