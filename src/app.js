import { handleFormSubmit, loadMoreImages } from './search.js';
import { initializeSimpleLightbox } from './lightbox.js';

const loadMoreBtn = document.querySelector('.load-more');

loadMoreBtn.classList.add('hidden');

document
  .querySelector('#search-form')
  .addEventListener('submit', handleFormSubmit);
loadMoreBtn.addEventListener('click', loadMoreImages);

initializeSimpleLightbox();

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}
