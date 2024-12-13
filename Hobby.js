document.addEventListener('DOMContentLoaded', function () {
  // Select all images in the gallery
  const images = document.querySelectorAll('.gallery img');
  
  // Function to open image in full screen
  images.forEach(image => {
      image.addEventListener('click', function () {
          // Create a container for the full-screen view
          const fullScreenContainer = document.createElement('div');
          fullScreenContainer.classList.add('full-screen-container');
          
          // Create the full-screen image element
          const fullScreenImage = document.createElement('img');
          fullScreenImage.src = image.src;
          fullScreenContainer.appendChild(fullScreenImage);
          
          // Add the full-screen container to the body
          document.body.appendChild(fullScreenContainer);
          
          // Close the full-screen view when the user clicks anywhere on the container
          fullScreenContainer.addEventListener('click', function () {
              document.body.removeChild(fullScreenContainer);
          });
          
          // Close the full-screen view when pressing the Escape key
          document.addEventListener('keydown', function (event) {
              if (event.key === 'Escape') {
                  document.body.removeChild(fullScreenContainer);
              }
          });
      });
  });
});
