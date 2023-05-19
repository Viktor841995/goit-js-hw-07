import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) =>
    `<li class = "gallery__items">
        <a class = "gallery__link js-target" href="${original}">
            <img date-image-description="${description}"
                class = "gallery__image js-target" 
                src="${preview}"
                data-source="${original}"
                alt="${description}" width=100%
            />
        </a>
    </li>`
    );

container.insertAdjacentHTML ('beforeend', markup.join(''));
container.addEventListener("click", onclick);

function onclick(evt) {
    evt.preventDefault();
    const isImgEl = evt.target.classList.contains("gallery__image");
    if (!isImgEl) {
      return;
    }

    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`
      );
      instance.show();
      
      if (evt.code === "Escape") {
        instance.close();
      };
};
  
    
