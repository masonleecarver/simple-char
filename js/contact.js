import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

async function sendEmail(message) {
    try {
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({message}),
        })

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "Request failed");
        }

        console.log('Email sent successfully!');
    } catch (error) {
        console.error("email failed", error.message);
    }
}