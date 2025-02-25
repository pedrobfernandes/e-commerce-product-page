// Takes care of the lightbox and image navigation

const lightbox = document.getElementById('lightbox');
const closeLightboxButton = document.getElementById('close-lightbox-button');
const lightboxThumbnails = document.querySelectorAll('.lightbox-thumbnail');
const desktopThumbnails = document.querySelectorAll('.desktop-thumbnail');
const lightboxMainImage = document.getElementById('lightbox-main-image');
const deskopMainImage = document.getElementById('desktop-main-image');

const images =
[
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg',
];

let currentIndex = 0;


function updateMainImage(index)
{
    const mainImage = document.querySelector('.main-image-container img');
    lightboxMainImage.src = images[index];
    mainImage.src = images[index];

    lightboxThumbnails.forEach((thumbnail, i) =>
    {
        if (i === index)
        {
            thumbnail.classList.add('active');
        }
        else
        {
            thumbnail.classList.remove('active');
        }
    });
}

/*
    Takes care of reseting the main image on
    exiting the lightbox on desktop view
*/
function resetMainImage()
{
    currentIndex = 0;
    updateMainImage(currentIndex);
}

document.querySelector('.main-image-container img')
    .addEventListener('click', () =>
{
    lightbox.classList.add('show');
});

closeLightboxButton.addEventListener('click', () =>
{
    lightbox.classList.remove('show');
    resetMainImage();
});


/*
    Takes care of setting the given clicked thumbnail to
    be the main image, activating the active class on it
    and removing it on the rest of them.
*/
lightboxThumbnails.forEach((thumbnail, index) =>
{
    thumbnail.addEventListener('click', () =>
    {
        currentIndex = index;
        const newSrc = thumbnail.src.replace('-thumbnail', '');
        lightboxMainImage.src = newSrc;

        lightboxThumbnails.forEach(t => t.classList.remove('active'));
        thumbnail.classList.add('active');
    });
});


/*
    Same as above except is  for the desktop view
    image switch
*/
desktopThumbnails.forEach((thumbnail, index) =>
{
    thumbnail.addEventListener('click', () =>
    {
        currentIndex = index;
        const newSrc = thumbnail.src.replace('-thumbnail', '');
        deskopMainImage.src = newSrc;

        desktopThumbnails.forEach(t => t.classList.remove('active'));
        thumbnail.classList.add('active');
    });
});

/*
    These ones take care of the next-image and previous-image
    buttons, to handle next image and previous image navigation
    both on mobile view and desktop view with lightbox
*/

// Mobile buttons
document.getElementById('prev-button-mobile')
    .addEventListener('click', () =>
{
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateMainImage(currentIndex);
});


document.getElementById('next-button-mobile')
    .addEventListener('click', () =>
{
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateMainImage(currentIndex);
});


// Lightbox buttons
document.getElementById('prev-button-lightbox')
    .addEventListener('click', () =>
{
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateMainImage(currentIndex);
});


document.getElementById('next-button-lightbox')
    .addEventListener('click', () =>
{
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateMainImage(currentIndex);
});
