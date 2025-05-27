// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';
import { clearGallery } from './js/render-functions.js';
import { showLoader } from './js/render-functions.js';
import { hideLoader } from './js/render-functions.js';
import { createGallery } from './js/render-functions.js';


const form = document.querySelector('.form');
const formInput = document.querySelector('[name="search-text"]')
const formBtn = document.querySelector("button");


form.addEventListener('submit', clickStart)
function clickStart(event) {
    event.preventDefault()
    let inputValue = formInput.value.trim();
    if (inputValue === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter valid values',
        });
        return;
    }

    clearGallery();
  showLoader();
 



    getImagesByQuery(inputValue)
    .then(response => {
      const data = response.data;
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!'
        });
        return;
      }
        createGallery(data.hits);
        console.log(data);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Try again!'
      });
    })
    .finally(() => {
      hideLoader();
    });
    
}


