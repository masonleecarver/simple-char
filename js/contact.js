import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

const contactForm = document.getElementById("contact-form");

emailjs.init( {
    publicKey: 'vwNa7T9khdJami_rz'
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    emailjs.sendForm('service_gmail', 'template_df9f09g', contactForm)
        .then(() => {
            contactForm.reset();
            alert("We've recieved your email!");
        }, (error) => {
            console.log('Failed...', error);
            alert("something went wrong.");
        })
});
