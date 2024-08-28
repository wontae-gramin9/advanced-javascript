const textArea = document.querySelector("#noteInput");
const saveButton = document.querySelector("#saveNote");
const container = document.querySelector("#notesContainer");

// const notes = ["Walk the dog", "remember to take the trash out"];
// localStorage.setItem("notes", JSON.stringify(notes));

const loadNotes = () => {
  const notes = JSON.parse(localStorage.getItem("notes")) ?? [];
  // for (let note of notes) {
  //   createNoteElement(note);
  // }
  notes.forEach(createNoteElement);
};
const createNoteElement = (content) => {
  const noteElement = document.createElement("li");
  noteElement.textContent = content;
  container.appendChild(noteElement);
};

saveButton.addEventListener("click", () => {
  const noteContent = textArea.value.trim();
  createNoteElement(noteContent);
  textArea.value = "";
  // save & update localStorage
  const notes = JSON.parse(localStorage.getItem("notes")) ?? [];
  notes.push(noteContent);
  localStorage.setItem("notes", JSON.stringify(notes));
});

loadNotes();

// // ***************************
// // OOP VERSION
// // ***************************

// class NoteApp {
//   constructor(containerSelector, inputSelector, saveButtonSelector) {
//     this.container = document.querySelector(containerSelector);
//     this.textArea = document.querySelector(inputSelector);
//     this.saveButton = document.querySelector(saveButtonSelector);
//     this.notes = JSON.parse(localStorage.getItem("notes")) ?? [];

//     this.saveButton.addEventListener("click", () => this.saveNote());
//     this.loadNotes();
//   }

//   loadNotes() {
//     this.notes.forEach((note) => this.createNoteElement(note));
//   }

//   createNoteElement(content) {
//     const noteElement = document.createElement("li");
//     noteElement.textContent = content;
//     this.container.appendChild(noteElement);
//   }

//   saveNote() {
//     const noteContent = this.textArea.value.trim();
//     if (noteContent) {
//       this.createNoteElement(noteContent);
//       this.textArea.value = "";
//       this.notes.push(noteContent);
//       this.updateLocalStorage();
//     }
//   }

//   updateLocalStorage() {
//     localStorage.setItem("notes", JSON.stringify(this.notes));
//   }
// }

// new NoteApp("#notesContainer", "#noteInput", "#saveNote");
