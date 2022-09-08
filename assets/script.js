function fetchApi() {
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=c23913981d1239a82bcee942628971b5&with_genres=35"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

fetchApi();

$("button").on("click", function (event) {
  event.preventDefault();
  var selectedGenre = $("select").val();
  console.log(selectedGenre);
  $("#selectedGenre").text(selectedGenre);
});

function renderTiles() {}
