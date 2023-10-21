export default class saver {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");
        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave) {

    }

    static deleteNote(id) {

    }
}




// function save() {
//     let text = document.getElementById("textEditor").innerText.toString();
//     console.log(text)
//     // Send the HTML data to the server for saving
//     fetch('/save', {
//         method: 'POST',
//         body: JSON.stringify({ text }),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     .then(response => response.json())
//     .then(data => alert(data.message));
// }

// function load() {
//     fetch('/load')
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('textEditor').innerHTML = data.text;
//     });
// }