import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl= document.querySelector(".gallery");
const imgCard = createImgCard(galleryItems);

galleryEl.insertAdjacentHTML ("beforeend", imgCard);

galleryEl.addEventListener("click", onImgOriginalCard);

function createImgCard(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
    <li class = "gallery__items">
        <a class = "gallery__link" href = "${original}">
            <img 
                class = "gallery__image" 
                src = "${preview}"
                data-source = "${original}"
                alt = "${description}"
            />
        </a>
    </li>`
    }).join("");
}

function onImgOriginalCard(event) {
    event.preventDefault()
    if(!event.target.classList.contains("gallery__image")) {
        return;
    }
    console.log(event.target)
}
