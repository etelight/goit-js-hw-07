import { galleryItems } from "./gallery-items.js";

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
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    })
    .join("");
}

function handleImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();
  galleryContainer.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

galleryContainer.addEventListener("click", handleImageClick);

function handleImageMouseOver(event) {
  event.target.style.cursor = "pointer";
}

function handleImageMouseOut(event) {
  event.target.style.cursor = "auto";
}

galleryContainer.addEventListener("mouseover", handleImageMouseOver);
galleryContainer.addEventListener("mouseout", handleImageMouseOut);
