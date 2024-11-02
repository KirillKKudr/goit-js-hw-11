

import { fetchImages } from './js/pixabay-api';
import { renderImages, showNoResultsMessage } from './js/render-functions';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.search-form');
const galleryContainer = document.querySelector('.gallery');
const perPage = 12;
let currentPage = 1;
let lightbox;


const initializeLightbox = () => {
  lightbox = new SimpleLightbox('.gallery a');
};


const showLoader = () => {
  document.querySelector('.loader').style.display = 'block';
};
const hideLoader = () => {
  document.querySelector('.loader').style.display = 'none';
};


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = event.currentTarget.elements.search.value.trim();

  if (query === '') {
    showNoResultsMessage();
    return;
  }

 
  showLoader();

  fetchImages(query, currentPage, perPage)
    .then(images => {
      hideLoader();
      if (images.length === 0) {
        showNoResultsMessage();
      } else {
        renderImages(images, galleryContainer);  
        initializeLightbox();  
        lightbox.refresh();
      }
      form.reset(); 
    })
    .catch(error => {
      hideLoader();
      console.error('Error processing images:', error);
      iziToast.error({ title: 'Error', message: 'Failed to load images' });
    });
});
