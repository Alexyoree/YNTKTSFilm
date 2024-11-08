document.addEventListener("DOMContentLoaded", function () {
  const filmTitle = localStorage.getItem("selectedFilm");

  const filmImage = {
    "The Conjuring":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjn47GbKMHb34jhBKdjQ9zoQT94SDU_kHlg&s",
    "Squid Game Season 1":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWM18Qk28W5Pj3h9p5_41NdW4JECAabsuWQ&s",
    "Terrifier 1": "https://i.ytimg.com/vi/fN5j1MtGO2Q/maxresdefault.jpg",
    "Terrifier 3":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq4r9euTzC_Ocmn7kaWjEwuZWsyU6zzlb4mA&s",
    Chucky:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQAsC6DV6U5H2g_6H_MmwlET1YSbUXSO95A&s",
    "The Spongebob Movie":
      "https://material.asset.catchplay.com/PAR-IN-001-A0084/artworks/posters/PAR-IN-001-A0084-P448.jpg?hash=1597286215",
    "The Spiderman: No Way Home":
      "https://i.ytimg.com/vi/GpB_t6S1wjE/maxresdefault.jpg",
    "The Conjuring: The Devil Made Me Do It":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuX19RbqwoNZeyB7gbM1FzmMy3dmySzosihw&s",
    "The Glory":
      "https://cdn0-production-images-kly.akamaized.net/BtFA0PO51VXgxdppYB82xEKvcXw=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4335162/original/076664400_1677145188-332207135_872608243809492_58247024185510785_n.jpg",
    "Five Nights at Freddy":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWlk9Gr8UpSyttOSsKl6pw8wXfZDygbSGSRQ&s",
    "The Squid Game Season 2":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhn-mZ9GDb7hrdTcDbcVbsStQhK5moWQ37gA&s",
    "The Exorcist: Believer":
      "https://i.ytimg.com/vi/PIxpPMyGcpU/maxresdefault.jpg",
    "The Terrifier 2": "https://i.ytimg.com/vi/x5DhuDSArTI/maxresdefault.jpg",
    "Despicable Me 4":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymFS6s19B7d9DMIiE4redNyxxLx7Sxs0FKw&s",
  };

  // Objek untuk menyimpan deskripsi film
  const filmDescription = {
    "The Conjuring":
      "Film horor yang menceritakan tentang penyelidikan paranormal.",
    "Squid Game Season 1": "Serial thriller yang menguji batas moral manusia.",
    "Terrifier 1": "Film horor yang mengikuti seorang pembunuh berantai.",
    "Terrifier 3": "Sekuel dari film horor Terrifier yang lebih menegangkan.",
    Chucky: "Film tentang boneka yang hidup dan membunuh.",
    "The Spongebob Movie": "Petualangan Spongebob dan teman-temannya.",
    "The Spiderman: No Way Home":
      "Petualangan Spiderman yang melibatkan multiverse.",
    "The Conjuring: The Devil Made Me Do It":
      "Kasus nyata yang melibatkan kekuatan jahat.",
    "The Glory": "Drama yang menggambarkan perjuangan dan balas dendam.",
    "Five Nights at Freddy":
      "Film horor yang terinspirasi dari permainan video populer.",
    "The Squid Game Season 2":
      "Lanjutan dari serial yang menguji batas manusia dalam permainan mematikan.",
    "The Exorcist: Believer":
      "Film yang melanjutkan kisah horor klasik tentang pengusiran setan.",
    "The Terrifier 2":
      "Sekuel dari film horor yang menampilkan pembunuh berantai yang lebih brutal.",
    "Despicable Me 4":
      "Petualangan baru Gru dan Minions yang penuh tawa dan aksi.",
  };

  // Menampilkan informasi film di halaman
  document.getElementById("film-title").textContent = filmTitle;
  document.getElementById("film-image").src = filmImage[filmTitle];
  document.getElementById("film-description").textContent =
    filmDescription[filmTitle];

  // Menambahkan event listener untuk tombol kembali
  document.getElementById("back-button").addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
