const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = "Youu Token";
const IMG_URL = "https://image.tmdb.org/t/p/w500"
const preview_IMG = document.getElementById("preview_IMG");
const movie = document.querySelector(".hero");

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`

  }
};

async function preview(){
  const url = `${BASE_URL}/movie/2?language=es`;
  const response = await fetch(url, options);
  const data = await response.json();

  const element = `
                    <div class="movie-info">
                      <h1>${data.title}</h1>
                      <p>${data.overview}</p>
                    </div>
                    <div class="movie">
                      <img src="${IMG_URL + data.backdrop_path}" alt="Imagen">
                    <div>
                  `

  movie.insertAdjacentHTML("beforeend", element);
}

preview();