import arrayImg from "./arrayGallary.js"

const jsGallery = document.querySelector('.js-gallery');
const jsLightbox = document.querySelector('.js-lightbox');
const lightboxImages = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('.lightbox__button');

arrayImg.forEach((el) => {
  jsGallery.insertAdjacentHTML('beforeend', 
  `<li class = "gallery__item">
  <a class = "gallery__link" href=${el.original}>
  <img class="gallery__image" src="${el.preview}" data-source ="${el.original}" alt="${el.description}">
  </a>
  </li>`)
})

const galleryCall = function(e){
  e.preventDefault();
  if (e.target.nodeName === "IMG"){
    lightboxImages.src = e.target.dataset.source;
    jsLightbox.classList.add('is-open');
  }
}

closeModalBtn.addEventListener('click',() => {
  lightboxImages.src = '';
  jsLightbox.classList.remove('is-open');
});

jsGallery.addEventListener('click', galleryCall);