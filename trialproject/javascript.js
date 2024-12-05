// Array of image URLs
const images = [
    "coffee2.png",
    "cup.png",
    "logoo.png"
  ];
  
  // Keep track of the current image index
  let currentIndex = 0;
  
  // Get the image element and the next button
  const displayImage = document.getElementById("display-image");
  const nextArrow = document.getElementById("next-arrow");
  
  // Function to change the image
  function showNextImage() {
    // Increment the index and wrap around if needed
    currentIndex = (currentIndex + 1) % images.length;
    
    // Update the image source
    displayImage.src = images[currentIndex];
  }
  
  // Add a click event listener to the button
  nextArrow.addEventListener("click", showNextImage);
  