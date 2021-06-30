const movieUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8f364fc7ff62a17f97bdee22493fafa&page=1";

const searchUrl =
  'https://api.themoviedb.org/3/search/movie?api_key=b8f364fc7ff62a17f97bdee22493fafa&query="';

const img = "https://image.tmdb.org/t/p/w1280";

const searchForm = document.querySelector("#form");
const inputValue = document.querySelector("#search");

showMovies(movieUrl)

async function showMovies(url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      var movieList = data.results;
      console.log(movieList)
      var showMoviesList = "";
      movieList.forEach((e) => {
        
        showMoviesList += `
            
            <div class="movie-card">
            <img src="${img}${e.poster_path}" alt="">
            <div class="movie-info">
                <h3>${e.title}</h3>
                <p>${e.vote_average}</p>
            </div>
            <div class="overview">
                <h5>Overview</h5>
                <p>${e.overview}</p>
            </div>
        </div>

            `;

            document.querySelector('.movie-container').innerHTML = showMoviesList;
      });
    });
}

searchForm.addEventListener("submit", (el) => {
  el.preventDefault();
  var inputMovieName = inputValue.value;
 if(inputMovieName && inputMovieName !== ''){
    showMovies(searchUrl + inputMovieName);
    inputValue.value = ''
 }else{
     console.log(window.location.reload)
 }


});
