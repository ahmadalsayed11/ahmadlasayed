/*!
* Start Bootstrap - Blog Home v5.0.9 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.querySelectorAll(".image-container").forEach(container => {
    const img = container.querySelector(".zoom-image");
    const magnifier = container.querySelector(".magnifier");

    container.addEventListener("mousemove", function (e) {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left; // X-coordinate inside the image
        const y = e.clientY - rect.top;  // Y-coordinate inside the image

        // Update magnifier's position
        magnifier.style.left = `${e.clientX - rect.left}px`;
        magnifier.style.top = `${e.clientY - rect.top}px`;

        // Update magnifier's background
        magnifier.style.backgroundImage = `url(${img.src})`;
        magnifier.style.backgroundPosition = `-${x * 2}px -${y * 2}px`; // Adjust for zoom
        magnifier.style.display = "block";
    });

    container.addEventListener("mouseleave", function () {
        magnifier.style.display = "none";
    });
});
