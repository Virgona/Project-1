var selectedGenre;
var selectedID;
var moviesList = [];
var moviesData = [];
var ticker = false;
var titleFetch;

// Button event
$(".button").on("click", function (event) {
  event.preventDefault();
  selectedGenre = $("select").val();   // Get genre value name from selection
  selectedID = $("option[value='" + selectedGenre + "']").attr("genreID"); //Selects genreID with the correct ID attribute as per themovieAPI genre ID
  $("#selectedGenre").text(selectedGenre + "!"); // Render the selected genre text
  localStorage.setItem('genre', selectedGenre); // placing the selected genre into the local storage
  fetchApi(); //Runs fetch API
});

// This function is being called below and will run when the page loads.
function init() {
  // Get stored tasks from localStorage
  var storedTitles = JSON.parse(localStorage.getItem("title0"));

  // If tasks were retrieved from localStorage, update the tasks array to it
  if (storedTitles !== null) {
    for (var i = 0; i < 20; i++) {
      ticker = true;
      moviesData['title'] = JSON.parse(localStorage.getItem('title' + i));
      moviesData['poster'] = JSON.parse(localStorage.getItem('poster_path' + i));
      moviesData['synop'] = JSON.parse(localStorage.getItem('overview' + i));
      $('.tiles-content').append("<div class ='box' id = 'tiles'> <article class='media'> <div class='media-left'><figure class='js-modal-trigger image is-128x128' data-target='modal-js-example" + i + "' id='figure'><img id='img" + i + "' alt='Image'></figure></div><div class='media-content'><div class='content'><p id='tile" + i + "'><strong id='strong" + i + "'></strong> <br></p></div></div></article></div>");
      $('#strong' + i).append(moviesData['title']);
      $('#tile' + i).append(moviesData['synop']);
      $('#img' + i).attr('src', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + (moviesData['poster']));
    }
  }
  // retrives the previously selected genre and displays it in the results section on reload
  if (!selectedGenre) {
    var lastGenre = localStorage.getItem("genre");
    $("#selectedGenre").text(lastGenre + "!");
  }
}

init();

function renderMovies() { // Function to render movies into website

  if (ticker) { //This condition only happens if the ticker is true. Meaning that this part will only run in case there's an existing rendered list
    for (var i = 0; i < moviesList[0].length; i++) {

      // Set moviesData to the corresponding information from the API fetch object
      moviesData['title'] = moviesList[0][i]['title'];
      moviesData['poster'] = moviesList[0][i]['poster_path'];
      moviesData['synop'] = moviesList[0][i]['overview'];
      localStorage.setItem('title' + i, JSON.stringify(moviesList[0][i]['title']));
      localStorage.setItem('poster_path' + i, JSON.stringify(moviesList[0][i]['poster_path']));
      localStorage.setItem('overview' + i, JSON.stringify(moviesList[0][i]['overview']));

      // Replacing DOM elements. As the elements have already been created on the first run of the code, this will simply replace them with the new information
      $('#tile' + i).replaceWith("<p id='tile" + i + "'><strong id='strong" + i + "'></strong> <br></p>");
      $('#strong' + i).append(moviesData['title']);
      $('#tile' + i).append(moviesData['synop']);
      $('#img' + i).attr('src', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + (moviesData['poster']));
    }
  }

  else { //This condition will run in case a list hasn't been rendered yet.
    ticker = true; //Sets ticker to true, so the condition above will run instead of this one.
    for (var i = 0; i < moviesList[0].length; i++) {

      // Set moviesData to the corresponding information from the API fetch object
      moviesData['title'] = moviesList[0][i]['title'];
      moviesData['poster'] = moviesList[0][i]['poster_path'];
      moviesData['synop'] = moviesList[0][i]['overview'];
      localStorage.setItem('title' + i, JSON.stringify(moviesList[0][i]['title']));
      localStorage.setItem('poster_path' + i, JSON.stringify(moviesList[0][i]['poster_path']));
      localStorage.setItem('overview' + i, JSON.stringify(moviesList[0][i]['overview']));

      // Adding elements to the DOM. Elements are id based off index so the information is inserted in the correct positions as the loop moves on.
      $('.tiles-content').append("<div class ='box' id = 'tiles'> <article class='media'> <div class='media-left'><figure class='js-modal-trigger image is-128x128' data-target='modal-js-example' id='figure'><img id='img" + i + "' alt='Image'></figure></div><div class='media-content'><div class='content'><p id='tile" + i + "'><strong id='strong" + i + "'></strong> <br></p></div></div></article></div>");
      $('#strong' + i).append(moviesData['title']);
      $('#tile' + i).append(moviesData['synop']);
      $('#img' + i).attr('src', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + (moviesData['poster']));
    }
  }
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
          renderMovies();
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to GitHub");
    });
}

function modalFunction() {
  document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }

    function closeModal($el) {
      $el.classList.remove('is-active');
    }

    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      var $target = document.getElementById(modal);

      $trigger.addEventListener('click', () => {
        targetElID = $target.id.slice(-1);
        titleFetch = "https://api-gate2.movieglu.com/filmLiveSearch/?query=" + localStorage.getItem('title' + $target.id.slice(-1)).replace(/ /g, "+").replace(/"/g, "").trim() + "&n=1";
        console.log(titleFetch);
        moviegluID();
        openModal($target);
      });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');

      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;

      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });
}

modalFunction();

function moviegluID() {

  var settings = {
    "url": titleFetch,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "api-version": "v200",
      "geolocation": "33.0;151.0",
      "Authorization": "Basic VVNZRDpUVzkzek5mcXJrdzU=",
      "client": "USYD",
      "x-api-key": "tJvVDxsFgg2DKbIS4hxjX8Cew0dnPf0T9SDeFfWz",
      "device-datetime": "2022-09-13T19:42:58+10:00",
      "territory": "AU",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    movieResponse = [response];
    moviesID = movieResponse[0]['films'][0]['film_id'];
    console.log(moviesID);
    movieTrailer();
  });
}

function movieTrailer() {

  var settings = {
    "url": "https://api-gate2.movieglu.com/trailers/?film_id=" + moviesID,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "api-version": "v200",
      "geolocation": "-22.0;14.0",
      "Authorization": "Basic VVNZRF9YWDoxMDc1dG42bEZHWEc=",
      "client": "USYD",
      "x-api-key": "Eety63pHfI2z23yh7XBKi45GRhcR7wz569n3QLe1",
      "device-datetime": "2022-09-13T19:42:58+10:00",
      "territory": "XX",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  $.ajax(settings).then(function (response) {
    trailerResp = [response];
    trailerUrl = trailerResp[0]['trailers']['high'][0]['film_trailer'];
    console.log(trailerUrl);
    renderUrl();
  });
}

function renderUrl() {
  document.getElementById(targetElID).setAttribute('src', trailerUrl);
}