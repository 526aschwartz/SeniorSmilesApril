const images = [
    'imgs/bsket.JPG',
    'imgs/card.JPG',
    'imgs/st.JPG',
    'imgs/val.JPG'
];

// Function to generate a random image
function generateRandomImage() {
    // Randomly select an image index
    const randomIndex = Math.floor(Math.random() * images.length);

    // Get the image container div
    const imageContainer = document.getElementById("imageContainer");

    // If an image is already displayed, remove it
    if (imageContainer.innerHTML !== "") {
        imageContainer.innerHTML = "";
    }

    // Create an image element
    const imgElement = document.createElement("img");
    imgElement.src = images[randomIndex]; 
    imgElement.alt = "Random Image"; 
    imgElement.classList.add("img-fluid"); 

    // Add the image to the container
    imageContainer.appendChild(imgElement);

    // Apply border using forEach
    const allImages = imageContainer.querySelectorAll('img');
    allImages.forEach(img => {
        img.style.border = '2px solid black';
    });
}

const images = document.querySelectorAll('img')

images.forEach(function(img){
    img.style.border = '2px solid black'
}
)
// 3 seconds
setInterval(generateRandomImage, 3000);