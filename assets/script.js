var selectedGenre;
var selectedID;
var moviesList = [];
var moviesData = [];

// Button event
$("button").on("click", function (event) {
  event.preventDefault();
  selectedGenre = $("select").val();   // Get genre value name from selection
  selectedID = $("option[value='" + selectedGenre + "']").attr("genreID"); //Selects genreID with the correct ID attribute as per themovieAPI genre ID
  $("#selectedGenre").text(selectedGenre); // Render the selected genre text
  fetchApi(); //Runs fetch API
});

function rendermovies () {
  moviesData['title'] = moviesList[0][0]['title'];
  moviesData['poster'] = moviesList[0][0]['poster_path'];
  moviesData['synop'] = moviesList[0][0]['overview'];
  $('strong').append(moviesData['title']);
  $('#tile0').append(moviesData['synop']);
  $('img').attr('src', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + (moviesData['poster']));
}

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
          console.log(moviesData);
          rendermovies();
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to GitHub");
    });
}
