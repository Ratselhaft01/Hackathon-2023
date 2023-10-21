
function searchFiles() {
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = ""; // Clear previous results

    // Get a list of all files in the input type=file element
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.multiple = true;
    fileInput.style.display = "none";

    // Attach an event listener to the file input to handle selected files
    fileInput.addEventListener("change", function() {
        const files = Array.from(fileInput.files);
        const results = files.filter(file => file.name.includes(searchTerm));
        displaySearchResults(results);
    });

    // Trigger the file input dialog
    fileInput.click();
}

function displaySearchResults(results) {
    const searchResults = document.getElementById("searchResults");
    if (results.length === 0) {
        searchResults.innerHTML = "No results found.";
        return;
    }

    document.getElementById('fileInput').addEventListener('change', function () {
        var fileInput = document.getElementById('fileInput');
        var imagePreview = document.getElementById('imagePreview');
        var file = fileInput.files[0];
    
        if (file) {
            var reader = new FileReader();
    
            reader.onload = function (e) {
                imagePreview.src = e.target.result;
            };
    
            reader.readAsDataURL(file);
        } else {
            imagePreview.src = '';
        }
    });
    

    results.forEach(result => {
        const listItem = document.createElement("li");
        listItem.textContent = result.name;
        searchResults.appendChild(listItem);
    });
}