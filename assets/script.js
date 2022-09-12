var selectedGenre;
var selectedID;
var moviesList = [];
var moviesData = [];
var ticker = false;

// Button event
$("button").on("click", function (event) {
  event.preventDefault();
  selectedGenre = $("select").val();   // Get genre value name from selection
  selectedID = $("option[value='" + selectedGenre + "']").attr("genreID"); //Selects genreID with the correct ID attribute as per themovieAPI genre ID
  $("#selectedGenre").text(selectedGenre); // Render the selected genre text
  fetchApi(); //Runs fetch API
});

function rendermovies () { // Function to render movies into website

  if (ticker) { //This condition only happens if the ticker is true. Meaning that this part will only run in case there's an existing rendered list
    for (var i = 0; i < moviesList[0].length; i++) {

    // Set moviesData to the corresponding information from the API fetch object
    moviesData['title'] = moviesList[0][i]['title'];
    moviesData['poster'] = moviesList[0][i]['poster_path'];
    moviesData['synop'] = moviesList[0][i]['overview'];

    // Replacing DOM elements. As the elements have already been created on the first run of the code, this will simply replace them with the new information
    $('#tile' + i).replaceWith("<p id='tile" + i + "'><strong id='strong" + i + "'></strong> <br></p>");
    $('#strong'+ i).append(moviesData['title']);
    $('#tile' + i).append(moviesData['synop']);
    $('#img' + i).attr('src', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + (moviesData['poster']));
  }} 
  
  else { //This condition will run in case a list hasn't been rendered yet.
    ticker = true; //Sets ticker to true, so the condition above will run instead of this one.
    for (var i = 0; i < moviesList[0].length; i++) {

    // Set moviesData to the corresponding information from the API fetch object
    moviesData['title'] = moviesList[0][i]['title'];
    moviesData['poster'] = moviesList[0][i]['poster_path'];
    moviesData['synop'] = moviesList[0][i]['overview'];

    // Adding elements to the DOM. Elements are id based off index so the information is inserted in the correct positions as the loop moves on.
    $('.tiles-content').append("<div class ='box' id = 'tiles'> <article class='media'> <div class='media-left'><figure class='image is-128x128' id='figure'><img id='img" + i + "' alt='Image'></figure></div><div class='media-content'><div class='content'><p id='tile" + i + "'><strong id='strong" + i + "'></strong> <br></p></div></div></article></div>");
    $('#strong'+ i).append(moviesData['title']);
    $('#tile' + i).append(moviesData['synop']);
    $('#img' + i).attr('src', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + (moviesData['poster']));
  }}
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
