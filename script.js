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
    imgElement.classList.add("img-fluid");

    // Add image to container
    imageContainer.appendChild(imgElement);

    // black border
    const allImages = imageContainer.querySelectorAll('img');
    allImages.forEach(img => {
        img.style.border = '3px solid black';
    });
}

// Change image every 3 seconds
setInterval(generateRandomImage, 3000);