document.addEventListener('DOMContentLoaded', () =>
{
    // Takes care of the lightbox and image navigation

    const lightbox = document.getElementById('lightbox');
    const closeLightboxButton = document.getElementById('close-lightbox-button');
    const lightboxThumbnails = document.querySelectorAll('.lightbox-thumbnail');
    const desktopThumbnails = document.querySelectorAll('.desktop-thumbnail');
    const lightboxMainImage = document.getElementById('lightbox-main-image');
    const deskopMainImage = document.getElementById('desktop-main-image');

    // images for the ligthbox
    const images =
    [
        './images/image-product-1.jpg',
        './images/image-product-2.jpg',
        './images/image-product-3.jpg',
        './images/image-product-4.jpg',
    ];

    /*
        using this one to set the correct image as the main
        image on image switching. And, to reset to te first
        image on lightbox exit.
    */
    let currentIndex = 0;


    // Takes care of updating the main image
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


    /*
        Takes care of setting the given clicked thumbnail to
        be the main image, activating the active class on it
        and removing it on the rest of them.
    */
    function setMainImage(thumbnails, mainImage)
    {

        thumbnails.forEach((thumbnail, index) =>
        {
            thumbnail.addEventListener('click', () =>
            {
                currentIndex = index;
                const newSrc = thumbnail.src.replace('-thumbnail', '');
                mainImage.src = newSrc;

                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                thumbnail.classList.add('active');
            });
        });
    }


    /*
        These one take care of the next-image and previous-image
        buttons, to handle next image and previous image navigation
        both on mobile view and desktop view with lightbox
    */

    function navigateTrougthImageButtons(previousId, nextId)
    {
        document.getElementById(previousId).addEventListener('click', () =>
        {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            updateMainImage(currentIndex);
        });

        document.getElementById(nextId).addEventListener('click', () =>
        {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            updateMainImage(currentIndex);
        });
    }


    /*
        This one ensures the lightbox don't appear automatically,
        for instance, if the screen is 490px and you click on the
        main image and then you immediately resize the screen for
        550 or higher.
    */
    document.querySelector('.main-image-container img')
        .addEventListener('click', () =>
    {
        if (window.innerWidth >= 550)
        {
            lightbox.classList.add('show');
        }
    });

    closeLightboxButton.addEventListener('click', () =>
    {
        lightbox.classList.remove('show');
        resetMainImage();
    });


    // Ensures the ligthbox is hidden if the screen gets lower than 550px
    window.addEventListener('resize', () =>
    {
        if (window.innerWidth < 550)
        {
            lightbox.classList.remove('show');
        }
    });

    setMainImage(lightboxThumbnails, lightboxMainImage);
    setMainImage(desktopThumbnails, deskopMainImage);

    navigateTrougthImageButtons('prev-button-mobile', 'next-button-mobile');
    navigateTrougthImageButtons('prev-button-lightbox', 'next-button-lightbox');
});
