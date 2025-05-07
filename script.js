const images = [
    'imgs/bsket.JPG',
    'imgs/card.JPG',
    'imgs/st.JPG',
    'imgs/val.JPG'
];

// Function to generate a random image
function generateRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageContainer = document.getElementById("imageContainer");

    // Clear previous image
    imageContainer.innerHTML = "";

    // Create new image
    const imgElement = document.createElement("img");
    imgElement.src = images[randomIndex];
    imgElement.alt = "Random Image";
    imgElement.classList.add("img-fluid");

    // Add image to container
    imageContainer.appendChild(imgElement);

    // Apply black border to all images (only one in this case) using forEach
    const allImages = imageContainer.querySelectorAll('img');
    allImages.forEach(img => {
        img.style.border = '2px solid black';
    });
}

// Change image every 3 seconds
setInterval(generateRandomImage, 3000);