
import { fetchImages } from './js/pixabay-api';
import { renderImages, showNoResultsMessage } from './js/render-functions';

const form = document.querySelector('#search-form');
const galleryContainer = document.querySelector('#gallery');
const perPage = 12;
let currentPage = 1;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = event.currentTarget.elements.searchQuery.value.trim();

  if (query === '') {
    showNoResultsMessage();
    return;
  }

  fetchImages(query, currentPage, perPage)
    .then(images => {
      if (images.length === 0) {
        showNoResultsMessage();
      } else {
        renderImages(images, galleryContainer);
      }
      form.reset(); 
    })
    .catch(error => {
      console.error('Error processing images:', error);
    });
});
