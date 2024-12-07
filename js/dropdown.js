import { movies } from '../lib/movies.js';

export function getMovies() {
  const selectElement = document.getElementById('xmas-favorites');

  movies.forEach((movie) => {
    const value = movie.Title.replace(/ /g, '_');
    const newOption = new Option(movie.Title, value);
    selectElement.add(newOption);
  });
  selectElement.addEventListener('change', (event) => {
    console.log(event.target.value);
  });
}
