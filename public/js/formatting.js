// // Get the button and the element to be modified
// const formatButton = document.getElementById("formatButton");
// const content = document.getElementById("content");

// // Add a click event listener to the button
// formatButton.addEventListener("click", function() {
//   // Change the HTML content when the button is clicked
//   content.innerHTML = "Formatted Text";
// });


function formatText(command, value = null) {
    document.execCommand(command, false, value);
  }