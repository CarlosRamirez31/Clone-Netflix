const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = "you token";
const IMG_URL = "https://image.tmdb.org/t/p/w500"
const preview_IMG = document.getElementById("preview_IMG");
const movie = document.querySelector(".hero");
const carousel1 = document.getElementById("carousel1");
const carousel2 = document.getElementById("carousel2");
const next = document.getElementById("next");

let count = 1;

next.addEventListener("click", () => {
  count++;
  if(count < 3) carousel();
})


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
                      <img src="${IMG_URL + data.backdrop_path}" alt="${data.title}">
                    <div>
                  `

  movie.insertAdjacentHTML("beforeend", element);
}

function insertImgs(data){
  let element = '';
  let contElement = 1;


  data.results.forEach(pelicula => {
    if(contElement < 7)
    { 
      element +=`
                  <div class="col-2 ">
                      <img class="img-fluid" src="${IMG_URL + pelicula.backdrop_path}" alt="${pelicula.title}">
                  </div>
                `;
    }
    contElement++;
  });

  return element;
}

async function carousel(){
  const url = `${BASE_URL}/movie/popular?language=es&page=${count}`;
  const response = await fetch(url, options);
  const data = await response.json();

  if(count == 1){
    carousel1.insertAdjacentHTML("beforeend", insertImgs(data));
  }
  else{
    carousel2.insertAdjacentHTML("beforeend", insertImgs(data));
  }
    
}