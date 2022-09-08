var selectedGenre;
var selectedID;
var moviesList = [];
var moviesData = [
  {
    title: "",
    synopsis: "",
    poster: "",
  },
];

$("button").on("click", function (event) {
  event.preventDefault();
  selectedGenre = $("select").val();
  selectedID = $("option[value='" + selectedGenre + "']").attr("genreID");
  $("#selectedGenre").text(selectedGenre);
  fetchApi();

  moviesData["titles"] = moviesList[0][0][title];
  console.log(moviesData);
});

function fetchApi() {
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=c23913981d1239a82bcee942628971b5&with_genres=" +
      selectedID
  )
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data.results);
          moviesList = [data.results];
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to GitHub");
    });
}
