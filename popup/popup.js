function Note(text, color) {
    this.text = text;
    this.color = color;
}

const popupBody = document.querySelector("popup-body");


function displayNoteEditor() {
    const noteEditor = document.createElement("div");
    noteEditor.setAttribute("class", "note-editor")
    popupBody.prepend(noteEditor)
}

const newNote = document.querySelector(".new-note");

newNote.addEventListener("click", () => {

})


