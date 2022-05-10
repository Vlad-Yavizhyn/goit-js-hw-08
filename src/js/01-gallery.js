// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const imgContainer = document.querySelector('.gallery');
const cardsMarkup = createImgMarkup(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createImgMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `      
    <div class="gallery__item">
        <a class="gallery__link" href="${original}" >
          <img
            class="gallery__image"
            src="${preview}" data-source="${original}" 
            alt="${description}" 
          />
        </a>
    </div>
    `
    }).join('');
};

var lightbox = new SimpleLightbox('.gallery a', { 
    overlayOpacity: 0.7,
    spinner: true,
     });
console.log(galleryItems);
