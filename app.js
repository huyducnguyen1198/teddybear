document.addEventListener('DOMContentLoaded', () => {
    const clickPrompt = document.getElementById('click-prompt');
    const centeredText = document.getElementById('centered-text');
    const teddyContainer = document.getElementById('teddy-container');
    const audio = document.getElementById('mySong');
  
    // Initially, don't show the centered text and teddy images
    centeredText.style.display = 'none';
    teddyContainer.style.display = 'none';
  
    const showRandomTeddy = () => {
      const teddyNumber = Math.floor(Math.random() * 4) + 1;
      const imageWidth = window.innerWidth * 0.2;
      const teddyX = Math.random() * (window.innerWidth - imageWidth);
      const teddyY = Math.random() * (window.innerHeight - imageWidth);
  
      const image = document.createElement('img');
      image.src = `img/${teddyNumber}.png`;
      image.style.position = 'absolute';
      image.style.left = `${teddyX}px`;
      image.style.top = `${teddyY}px`;
      image.style.width = `${imageWidth}px`;
  
      teddyContainer.appendChild(image);
    };
  
    clickPrompt.addEventListener('click', () => {
      // Hide the "Click me" text
      clickPrompt.style.display = 'none';
  
      // Show the centered text
      centeredText.style.display = 'block';
  
      // Play the audio for 1 second
      audio.play();
      setTimeout(() => {
        // After 1 second, start showing teddy bears
        teddyContainer.style.display = 'block';
        setInterval(showRandomTeddy, 500);
      }, 1000); // Delay for showing teddies is 1 second
    });
  });
  