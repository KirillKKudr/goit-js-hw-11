
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderImages(images, container) {
  const markup = images.map(image => `
    <div class="photo-card">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      <div class="info">
        <p>Likes: ${image.likes}</p>
        <p>Views: ${image.views}</p>
        <p>Comments: ${image.comments}</p>
        <p>Downloads: ${image.downloads}</p>
      </div>
    </div>
  `).join('');
  container.innerHTML = markup;
}

export function showNoResultsMessage() {
  iziToast.info({
    title: 'Oops!',
    message: 'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    timeout: 3000,
  });
}
