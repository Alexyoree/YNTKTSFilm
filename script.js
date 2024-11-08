const searchBar = document.getElementById("search-input");
const backButton = document.getElementById("back-button");
const films = document.querySelectorAll(".film");

function searchMovies() {
  const searchText = searchBar.value.toLowerCase().trim();
  let hasResults = false;

  films.forEach((film) => {
    const title = film.getAttribute("data-title").toLowerCase();

    if (title.includes(searchText)) {
      film.style.display = "block";
      hasResults = true;
    } else {
      film.style.display = "none";
    }
  });

  backButton.style.display = searchText && hasResults ? "inline" : "none";
}

function resetSearch() {
  searchBar.value = "";
  films.forEach((film) => {
    film.style.display = "block";
  });
  backButton.style.display = "none";
}

searchBar.addEventListener("keyup", searchMovies);
backButton.addEventListener("click", resetSearch);

document.addEventListener('DOMContentLoaded', function () {
  const detailButtons = document.querySelectorAll('.details-button');

  detailButtons.forEach(button => {
      button.addEventListener('click', function () {
          const filmTitle = this.parentElement.getAttribute('data-title');
          localStorage.setItem('selectedFilm', filmTitle);
          window.location.href = 'detail.html'; // Pind ah ke halaman detail
      });
  });
});