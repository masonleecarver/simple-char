import { getLocalStorage, setLocalStorage } from "./utils.js";

export default class CharacterDetails {

    constructor(charID, dataSource) {
        this.charID = charID;
        this.dataSource = dataSource;
        this.char = this.findElementById(this.charID);
        
        const deleteButton = document.getElementById("deleteButton");

        deleteButton.addEventListener('click', () => {
            this.deleteChar();
            
        });


    }

    init() {
        this.renderCharDetails();
    }

    editInit() {
        this.renderEditDetails();

        const savebutton = document.getElementById("saveChar");

        savebutton.addEventListener('click', () => {
            this.saveChar();
        });

        
    }

    renderEditDetails() {
        fillEditTemplate(this.char)
    }

    renderCharDetails() {
        charDetailsTemplate(this.char);
    }

    findElementById(id) {
        return this.dataSource.find(char => char.id === id);
    }

    saveChar() {
        const form = document.getElementById("edit-page");
        const data = new FormData(form);
        const dataObject = Object.fromEntries(data.entries());

        const editedChar = {
            id: this.charID,
            ...dataObject
        }

        const index = this.dataSource.findIndex(
            char => char.id === this.charID
        );

        if (index !== -1) {
            this.dataSource[index] = editedChar;
            setLocalStorage("char-list", this.dataSource);
        }

        this.char = editedChar;

    }

    deleteChar() {
        const index = this.dataSource.findIndex(
            char => char.id === this.charID
        );

        if (index !== -1) {
            this.dataSource.splice(index, 1);
            setLocalStorage("char-list", this.dataSource);
        }
        
        window.location.href = "../characters.html";
    }

}

function charFields() {
   const fields = [
        "name",
        "age",
        "mbti",
        "enam",
        "trait1",
        "trait2",
        "trait3",
        "trait4",
        "trait5",
        "trait6",
        "hobby1",
        "hobby2",
        "hobby3",
        "desire1",
        "desire2",
        "block",
        "backstory"
    ]; 

    return fields;

}

function charDetailsTemplate(char) {
    const fields = charFields();

    fields.forEach(field => {
        document.getElementById(field).textContent = char[field];
    });

    if (char.backstory === "") {
        document.getElementById("backstory").textContent = `Edit ${char.name} to add a backstory!`;
    }

    const edit = document.getElementById("editChar");

    edit.href = `../edit/?char=${char.id}`;
    edit.textContent = `Edit ${char.name}`;
}

function fillEditTemplate(char) {
    const fields = charFields();

    fields.forEach(field => {
        document.getElementById(field).value = char[field];
    });

    document.querySelector("#goBack").href = `../character_pages/?char=${char.id}`;
}