const addNotes = document.querySelector("#addNotes");
const NotesContainer = document.querySelector(".notesContainer");
const notes = document.querySelectorAll(".inputBox");

addNotes.addEventListener("click", ()=>{
    let inputNotes = document.createElement("p");
    let img = document.createElement("img");
    inputNotes.className = "inputBox";
    img.src = "./trash.png";
    inputNotes.setAttribute("contenteditable", "true");
    NotesContainer.appendChild(inputNotes).appendChild(img);
});

NotesContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
})