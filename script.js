// Get the elements for the lightbox
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.getElementById('close-btn');

// Get all thumbnail images
const thumbnails = document.querySelectorAll('.thumbnail');

// Open the lightbox when a thumbnail is clicked
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const fullSizeSrc = thumbnail.src.replace('thumbnail', 'full'); // Adjust this based on your image naming convention
    const caption = thumbnail.getAttribute('data-caption');

    lightboxImg.src = fullSizeSrc;
    lightboxCaption.innerText = caption;

    lightboxOverlay.style.display = 'flex'; // Show the lightbox
  });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
  lightboxOverlay.style.display = 'none'; // Hide the lightbox
});

// Close the lightbox when the overlay is clicked
lightboxOverlay.addEventListener('click', (e) => {
  if (e.target === lightboxOverlay) {
    lightboxOverlay.style.display = 'none'; // Hide the lightbox
  }
});
