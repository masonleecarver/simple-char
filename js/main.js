import { loadHeaderFooter } from "./utils.js";

const poseImg = document.getElementById("pose-idea");

async function pickPose() {
    const source = await fetch('../public/json/idea-help.json');
    const data = await source.json();

    poseImg.src = data.poses[getRandom(data.poses)];


}

function getRandom(list) {
    return Math.floor(Math.random() * list.length);
}

loadHeaderFooter();
pickPose();