var selectedGenre;
var selectedID;
var movieslist= [];

$("button").on("click", function (event) {
  event.preventDefault();
  selectedGenre = $("select").val();
  selectedID = $("option[value='" + selectedGenre + "']").attr("genreID");
  $("#selectedGenre").text(selectedGenre);
  fetchApi();
});

function fetchApi() {
fetch("https://api.themoviedb.org/3/discover/movie?api_key=c23913981d1239a82bcee942628971b5&with_genres=" + selectedID)
.then(function (response) {
  if (response.ok) {
    console.log(response);
    response.json().then(function (data) {
      console.log(data.results);
      movieslist = [data.results];
    });
  } else {
    alert('Error: ' + response.statusText);
  }
})
.catch(function (error) {
  alert('Unable to connect to GitHub');
});
};