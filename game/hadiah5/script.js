const kataTanggal = [
  "", // dummy index 0
  "Hati yang hancur",
  "yang tak pernah pulang",
  "dalam sunyi",
  "yang hilang arah",
  "di ujung senja",
  "yang kau lupakan",
  "yang menunggu jawab",
  "yang tertinggal",
  "yang tenggelam",
  "dalam pelukan semu",
  "tanpa nama",
  "Yang setengah jadi",
  "Yang tak sempat selesai",
  "Diantara hujan",
  "Yang hampir retak",
  "Dalam diam",
  "Yang pura pura kuat",
  "Yang merindukan pulang",
  "Dibawah rembulan",
  "Yang penuh luka",
  "Yang kau titip kan",
  "Dalam bayangan mu",
  "Yang patah dua",
  "Yang hilang arah",
  "Yang memudar perlahan",
  "Yang menanti jawab",
  "Yang terperangkap waktu",
  "Yang pernah percaya",
  "Yang jatuh diam diam",
  "Yang tak bisa lupa",
  "Yang masih menunggu"
];

const kataBulan = [
  "", // dummy index 0
  "Melodi",
  "Rindu",
  "Bayangan",
  "Senyuman",
  "Luka",
  "Harapan",
  "Langkah",
  "bisikan",
  "Mimpi",
  "Cahaya",
  "Rahasia",
  "Hujan"
];

$("#tembak").on("click", function () {
  const tanggal = parseInt($("#tanggal").val());
  const bulan = parseInt($("#bulan").val());

  if (!tanggal || !bulan) {
    alert("Pilih tanggal dan bulan dulu!");
    return;
  }

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

    const hasil = `${kataBulan[bulan]} ${kataTanggal[tanggal]}`;
    $(".result").text(hasil);
  }, 2000);
});
