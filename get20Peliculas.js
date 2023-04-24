const API_KEY = '1ce52f5f95a2acce305a563bd35c19ec';
const TOP20_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=1ce52f5f95a2acce305a563bd35c19ec&language=es-MX&page=1';

getPeliculas(TOP20_URL);
function getPeliculas(url){
  fetch(url).then(res => res.json()).then(data=>{
    console.log(data)
    data.results.forEach(pelicula => {
      const PeliculaElemento = document.createElement('div');
      PeliculaElemento.innerHTML = 
      `<div onClick="SendMail('${pelicula.title}','${pelicula.overview}')" class="Pelicula row container justify-content-center">
          <img class="PeliculaImagen" src="https://image.tmdb.org/t/p/original${pelicula.poster_path}"/>
          <span class="PeliculaDesc">${pelicula.overview}</span>
          <span class="PeliculaNombre">${pelicula.title}</span>
          <span style="color: greenyellow" class="PeliculaCalificacion">${pelicula.vote_average}</span>
        </div>`;
      
      
      document.getElementById('Peliculas').appendChild(PeliculaElemento)
    });
  })
}