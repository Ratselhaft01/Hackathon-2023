

function formatText(command, value = null) {
    document.execCommand(command, false, value);
}

// function updateFormattedText() {
//     const inputField = document.getElementById("inputField");
//     const formattedText = document.getElementById("formattedText");
  
//     const inputText = inputField.value;
//     // Apply formatting or styling to a specific part of the inputText
//     const formattedHTML = `<span style="color: red;">${inputText.substr(0, 5)}</span>${inputText.substr(5)}`;
//     formattedText.innerHTML = formattedHTML;
//     formattedText.style.display = "block";
// }