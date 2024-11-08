// Mengambil elemen dari DOM
const searchBar = document.getElementById("search-input");
const backButton = document.getElementById("back-button");
const films = document.querySelectorAll(".film");

// Fungsi untuk mencari film berdasarkan input pengguna
function searchMovies() {
    const searchText = searchBar.value.toLowerCase().trim();
    let hasResults = false;

    films.forEach((film) => {
        const title = film.getAttribute("data-title").toLowerCase();

        // Menampilkan film yang sesuai dengan pencarian
        if (title.includes(searchText)) {
            film.style.display = "block";
            hasResults = true;
        } else {
            film.style.display = "none";
        }
    });

    // Menampilkan atau menyembunyikan tombol kembali
    backButton.style.display = searchText && hasResults ? "inline" : "none";
}

// Fungsi untuk mereset pencarian
function resetSearch() {
    searchBar.value = "";
    films.forEach((film) => {
        film.style.display = "block"; // Menampilkan semua film
    });
    backButton.style.display = "none"; // Menyembunyikan tombol kembali
}

// Event listener untuk pencarian film
searchBar.addEventListener("keyup", searchMovies);
backButton.addEventListener("click", resetSearch);

// Event listener untuk memuat detail film saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    const detailButtons = document.querySelectorAll('.details-button');

    detailButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filmTitle = this.parentElement.getAttribute('data-title');
            localStorage.setItem('selectedFilm', filmTitle); // Menyimpan judul film yang dipilih
            window.location.href = 'detail.html'; // Pindah ke halaman detail
        });
    });
}); 