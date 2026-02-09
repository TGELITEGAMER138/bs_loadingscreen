document.addEventListener('DOMContentLoaded', function () {

    // Selecting DOM elements

    const slidesContainer = document.querySelector('.slides');

    const prevBtn = document.querySelector('.prev-btn');

    const nextBtn = document.querySelector('.next-btn');

    const sliderContainer = document.querySelector('.slider');

    const fullscreenOverlay = document.querySelector('.fullscreen-overlay');

    const fullscreenImg = document.querySelector('.fullscreen-img');

    const closeBtn = document.querySelector('.close-btn');

    const backgroundElement = document.querySelector('.background');



    // Initializing variables

    let currentIndex = 0;

    const images = config.images;

    let autoSlideInterval;



    // ==============================

    // BACKGROUND HANDLER

    // ==============================



    // Base styles

    backgroundElement.style.position = "absolute";

    backgroundElement.style.top = "0";

    backgroundElement.style.left = "0";

    backgroundElement.style.width = "100%";

    backgroundElement.style.height = "100%";

    backgroundElement.style.overflow = "hidden";



    if (config.background.type === "video") {



        // YouTube background

        if (config.background.videoProvider === "youtube") {

            const iframe = document.createElement("iframe");



            iframe.src = `https://www.youtube.com/embed/${config.background.url}?autoplay=1&mute=1&loop=1&playlist=${config.background.url}&controls=0&showinfo=0`;

            iframe.frameBorder = "0";

            iframe.allow = "autoplay; encrypted-media";

            iframe.allowFullscreen = true;



            iframe.style.width = "100%";

            iframe.style.height = "100%";

            iframe.style.position = "absolute";

            iframe.style.top = "0";

            iframe.style.left = "0";

            iframe.style.pointerEvents = "none";



            backgroundElement.appendChild(iframe);

        }



    } else if (config.background.type === "localvideo") {



        // Local video background

        const video = document.createElement("video");



        video.src = config.background.url;

        video.autoplay = true;

        video.muted = true;

        video.loop = true;

        video.playsInline = true;



        video.style.width = "100%";

        video.style.height = "100%";

        video.style.objectFit = "cover";

        video.style.position = "absolute";

        video.style.top = "0";

        video.style.left = "0";



        backgroundElement.appendChild(video);



    } else {



        // Image background

        backgroundElement.style.backgroundImage = `url(${config.background.url})`;

        backgroundElement.style.backgroundSize = "cover";

        backgroundElement.style.backgroundPosition = "center";

    }



    // ==============================

    // IMAGE SLIDER

    // ==============================



    function loadImages() {

        slidesContainer.innerHTML = '';

        sliderContainer.innerHTML = '';



        images.forEach((image, index) => {

            const img = document.createElement('img');

            img.src = image;

            img.addEventListener('click', () => openFullscreen(index));

            slidesContainer.appendChild(img);

        });



        updateDots(currentIndex);

        showImage(currentIndex);

        startAutoSlide();

    }



    function showImage(index) {

        const imgs = slidesContainer.querySelectorAll('img');

        imgs.forEach((img, i) => {

            img.classList.remove('active', 'previous', 'next');

            if (i === index) img.classList.add('active');

            else if (i === (index - 1 + imgs.length) % imgs.length) img.classList.add('previous');

            else if (i === (index + 1) % imgs.length) img.classList.add('next');

        });



        const slideWidth = slidesContainer.children[0].clientWidth + 20;

        const offset = (index * slideWidth) - ((slidesContainer.clientWidth - slideWidth) / 2);

        slidesContainer.style.transform = `translateX(-${offset}px)`;



        updateDots(index);

    }



    function updateDots(index) {

        sliderContainer.innerHTML = '';



        const dotsToShow = 4;

        let start = Math.max(index - Math.floor(dotsToShow / 2), 0);

        let end = Math.min(start + dotsToShow, images.length);



        if (end - start < dotsToShow) {

            start = Math.max(end - dotsToShow, 0);

        }



        for (let i = start; i < end; i++) {

            const dot = document.createElement('div');

            dot.classList.add('slider-dot');

            if (i === index) dot.classList.add('active');

            dot.addEventListener('click', () => {

                currentIndex = i;

                showImage(currentIndex);

                resetAutoSlide();

            });

            sliderContainer.appendChild(dot);

        }

    }



    function openFullscreen(index) {

        fullscreenImg.src = images[index];

        fullscreenOverlay.style.display = 'flex';

    }



    function closeFullscreen() {

        fullscreenOverlay.style.display = 'none';

    }



    function prevImage() {

        currentIndex = (currentIndex - 1 + images.length) % images.length;

        showImage(currentIndex);

        resetAutoSlide();

    }



    function nextImage() {

        currentIndex = (currentIndex + 1) % images.length;

        showImage(currentIndex);

        resetAutoSlide();

    }



    function startAutoSlide() {

        autoSlideInterval = setInterval(nextImage, config.autoSlideInterval);

    }



    function resetAutoSlide() {

        clearInterval(autoSlideInterval);

        startAutoSlide();

    }



    prevBtn.addEventListener('click', prevImage);

    nextBtn.addEventListener('click', nextImage);

    closeBtn.addEventListener('click', closeFullscreen);



    loadImages();



    // ==============================

    // LOGO

    // ==============================



    const logoContainer = document.querySelector('.logo-container');



    if (config.logoURL) {

        const logoImg = document.createElement('img');

        logoImg.src = config.logoURL;

        logoImg.alt = 'Server Logo';

        logoContainer.appendChild(logoImg);

    }

});