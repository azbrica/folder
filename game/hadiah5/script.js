const kataBulan = [
  "", // dummy index 0
  "Hidup tidak adil tapi",                // Jan
  "Ketika orang menghakimi mu",           // Feb
  "Bahkan ketika tidak ada yang percaya", // Mar
  "Kamu mungkin sedih dan khawatir",      // Apr
  "Tidak peduli seberapa lelahnya kamu",  // Mei
  "Orang lain mungkin menjatuhkan mu",    // Jun
  "Ketika setiap orang meninggalkan mu",  // Jul
  "Bahkan jika kamu gagal berkali kali",  // Agu
  "Ketika segala sesuatu tidak berjalan sesuai rencana", // Sep
  "Kamu mungkin terjebak sekarang",       // Okt
  "Ketika kamu merasa putus asa",         // Nov
  "Aku tau kamu sedang berjuang sekarang" // Des
];

const kataTanggal = [
  "", // dummy index 0
  "Jangan hilang harapan",  // 1
  "Selalu ingat",           // 2
  "Pegang teguh imanmu",    // 3
  "Tetap bertahan karena",  // 4
  "Jangan lupa bahwa",      // 5
  "Tetap Berusaha karena",  // 6
  "Perhatikan itu",         // 7
  "Ingatkan dirimu bahwa",  // 8
  "Menjadi kuat karena"     // 9
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
  const tanggalPenuh = $("#tanggal").val().trim();
  const bulan = parseInt($("#bulan").val());
  const nama = $("#nama").val().trim();

  if (!tanggalPenuh || !bulan || !nama) {
    alert("Pilih tanggal, bulan, dan masukkan nama!");
    return;
  }

  const tanggalPertama = parseInt(tanggalPenuh.charAt(0)); // ambil digit pertama
  const hurufAwal = nama.charAt(0).toUpperCase();

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

    const hasil = `${kataBulan[bulan]} ${kataTanggal[tanggalPertama]} ${kataNama[hurufAwal] || ""}`;
    $(".result").text(hasil);
  }, 2000);
});
