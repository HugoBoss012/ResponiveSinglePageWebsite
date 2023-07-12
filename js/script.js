//AJAX Function to show dummy data on tiles
function fetchPopupData() {
    return fetch('https://dummyurl.com/popupdata') // Replace with the actual URL for your dummy data
      .then(response => response.json())
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Load the popup content for each tile
  function loadPopupContent() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
      const popupContent = tile.querySelector('.popup-content');
      const para1 = tile.querySelector('#para1');
      const para2 = tile.querySelector('#para2');
      
      fetchPopupData()
        .then(data => {
          // Update the popup content with the fetched data
          para1.textContent = data.para1;
          para2.textContent = data.para2;
          
          // Show the popup content
          popupContent.style.display = 'block';
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  }


  function scrollToNextElement() {
    var currentElement = event.target; // Get the clicked <p> element
    var nextElement = currentElement.nextElementSibling; // Get the next sibling element
  
    if (nextElement) {
      var elementPosition = nextElement.offsetTop; // Calculate the position of the next element
  
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth" // Use smooth scrolling
      });
    }
  }
  
