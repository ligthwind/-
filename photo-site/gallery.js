const galleryLinks = Array.from(document.querySelectorAll("[data-gallery-item]"));
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
let activeIndex = 0;

function openLightbox(index) {
  activeIndex = index;
  const item = galleryLinks[activeIndex];
  const image = item.querySelector("img");
  lightboxImage.src = item.href;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = item.dataset.caption || image.alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

function moveLightbox(step) {
  const nextIndex = (activeIndex + step + galleryLinks.length) % galleryLinks.length;
  openLightbox(nextIndex);
}

galleryLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openLightbox(index);
  });
});

document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
document.querySelector(".lightbox-prev").addEventListener("click", () => moveLightbox(-1));
document.querySelector(".lightbox-next").addEventListener("click", () => moveLightbox(1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") moveLightbox(-1);
  if (event.key === "ArrowRight") moveLightbox(1);
});
