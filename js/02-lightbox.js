import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const markup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", markup);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
         
        </li>
      `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function handleImageMouseOver(event) {
  event.target.style.cursor = "pointer";
}

function handleImageMouseOut(event) {
  event.target.style.cursor = "auto";
}

galleryContainer.addEventListener("mouseover", handleImageMouseOver);
galleryContainer.addEventListener("mouseout", handleImageMouseOut);
