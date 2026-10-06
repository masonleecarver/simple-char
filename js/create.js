import { loadHeaderFooter, getLocalStorage, setLocalStorage, generateID } from "./utils.js";
import './generation.js';

loadHeaderFooter();

const charForm = document.getElementById("character-form");

charForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const dataObject = Object.fromEntries(formData.entries());

    const character = {
        id: generateID(),
        ...dataObject
    }

    console.log(`Attemping to add character...`)
    try {

        let char_list = getLocalStorage("char-list") || [];
        char_list.push(character);
        setLocalStorage("char-list", char_list);

        alert("Character saved successfully!");
        charForm.reset();


    } catch (err) {
        console.log(`Error saving character: ${err}`);
    }

})