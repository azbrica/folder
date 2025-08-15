// script.js baru
const kataTanggal = [
  "", // dummy index 0
  "Jangan hilang harapan",
  "Selalu ingat",
  "Pegang teguh imanmu",
  "Tetap bertahan karena",
  "Jangan lupa bahwa",
  "Tetap Berusaha karena",
  "Perhatikan itu",
  "Ingatkan dirimu bahwa",
  "Menjadi kuat karena",
  "Hidup tidak adil tapi",
  "Ketika orang menghakimi mu",
  "Bahkan ketika tidak ada yang percaya",
  "Kamu mungkin sedih dan khawatir",
  "Tidak peduli seberapa lelahnya kamu",
  "Orang lain mungkin menjatuhkan mu",
  "Ketika setiap orang meninggalkan mu",
  "Bahkan jika kamu gagal berkali kali",
  "Ketika segala sesuatu tidak berjalan sesuai rencana",
  "Kamu mungkin terjebak sekarang",
  "Ketika kamu merasa putus asa",
  "Aku tau kamu sedang berjuang sekarang",
  "Selalu bersyukur",
  "Tetap semangat",
  "Percaya pada proses",
  "Jangan takut mencoba",
  "Terus melangkah",
  "Tetap rendah hati",
  "Jangan mudah menyerah",
  "Terus berjuang",
  "Jadilah dirimu sendiri"
];

const kataBulan = [
  "", // dummy index 0
  "Hidup tidak adil tapi",
  "Ketika orang menghakimi mu",
  "Bahkan ketika tidak ada yang percaya",
  "Kamu mungkin sedih dan khawatir",
  "Tidak peduli seberapa lelahnya kamu",
  "Orang lain mungkin menjatuhkan mu",
  "Ketika setiap orang meninggalkan mu",
  "Bahkan jika kamu gagal berkali kali",
  "Ketika segala sesuatu tidak berjalan sesuai rencana",
  "Kamu mungkin terjebak sekarang",
  "Ketika kamu merasa putus asa",
  "Aku tau kamu sedang berjuang sekarang"
];

const kataNama = {
  A: "Tuhan Mendengarkan, percaya pada waktunya",
  B: "Kamu lebih kuat dari pada ketakutanmu",
  C: "Doa mu akan segera terwujud",
  D: "Tantangan hidup membentukmu",
  E: "Dalam waktunya, Tuhan akan menjadikannya",
  F: "Kamu akan menjadi sukses, tetap berjuang",
  G: "Segala yang terjadi pasti ada alasannya",
  H: "Kamu ciptaan Tuhan yang luar biasa",
  I: "Hidupmu ada tujuan yang hebat",
  J: "Tuhan tidak akan meninggalkanmu",
  K: "Doa mu akan segera terjadi",
  L: "Setiap kegagalan adalah pelajaran",
  M: "Tuhan punya rencana yang luar biasa untukmu, Percayalah!",
  N: "Usahamu akan di hargai, bersabarlah",
  O: "Kamu punya ratusan alasan untuk menjadi sukses",
  P: "Kamu akan bersinar percayalah padaku",
  Q: "Keluarga mu percaya padamu, kamu dapat melakukannya",
  R: "Kamu sangat cukup, dan Tuhan bangga punya kamu",
  S: "Perjuangan mu akan membuat mu jadi lebih baik",
  T: "Mimpi mu menunggu mu, tetap semangat dan berjuang",
  U: "Kamu tidak sendiri, Tuhan selalu bersama mu",
  V: "Selama kamu memiliki Tuhan, kamu punya segalanya",
  W: "Kamu dilahirkan untuk sukses, percaya prosesnya",
  X: "Kamu kuat dari apa yg kamu pikir",
  Y: "Tuhan tidak akan pernah membiarkan hidup mu hampa",
  Z: "Tuhan akan bersama mu dalam pertempuran ini"
};

$("#tembak").on("click", function () {
  const tanggal = parseInt($("#tanggal").val());
  const bulan = parseInt($("#bulan").val());
  const nama = $("#nama").val().trim();

  if (!tanggal || !bulan || !nama) {
    alert("Pilih tanggal, bulan, dan masukkan nama!");
    return;
  }

  const awalan = nama.charAt(0).toUpperCase();

  const position = $(this).position();
  $(".wrapper").addClass("active");
  $(".gun").css({
    transform: "translateY(" + (position.top - 3) + "px)"
  });

  setTimeout(function () {
    $(".wrapper").removeClass("active");
    $(".gun").css({
      transform: "translateY(1000px)"
    });

    const hasil = `${kataBulan[bulan]} ${kataTanggal[tanggal]} ${kataNama[awalan] || ""}`;
    $(".result").text(hasil);
  }, 2000);
});
