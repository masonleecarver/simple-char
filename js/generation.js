const helpButton = document.getElementById("generate");
const myName = document.getElementById("name");
const myAge = document.getElementById("age");
const myMBTI = document.getElementById("mbti");
const myEnam = document.getElementById("enam");
const myTraits = document.querySelectorAll("#traits input");
const myHobbies = document.querySelectorAll("#hobbies input");
const myDesires = document.querySelectorAll("#desires input");
const myBlock = document.getElementById("block")

helpButton.addEventListener('click', async function() {
    const source = await fetch("../public/json/idea-help.json");
    const data = await source.json();
    const traitsCopy = [...data.traits];
    const hobbiesCopy = [...data.hobbies];
    const desiresCopy = [...data.desires];

    myName.value = data.names[getRandom(data.names)];
    myAge.value = data.ages[getRandom(data.ages)];

    const chosenMBTI = data.mbtis[getRandom(data.mbtis)];
    myMBTI.value = `${chosenMBTI.type}: ${chosenMBTI.name}`;

    const chosenEnam = data.ennanagrams[getRandom(data.ennanagrams)];
    myEnam.value = `${chosenEnam.number}: ${chosenEnam.title}`;

    getRandomMultiple(traitsCopy, myTraits);
    getRandomMultiple(hobbiesCopy, myHobbies);
    getRandomMultiple(desiresCopy, myDesires);

    myBlock.value = data.roadblocks[getRandom(data.roadblocks)];

})

function getRandom(list) {
    return Math.floor(Math.random() * list.length);
}

function getRandomMultiple(list, element) {
    element.forEach(trait => {
        const randomIndex = getRandom(list)
        let chosen = list[randomIndex];
        trait.value = chosen;
        list.splice(randomIndex, 1);
    })
    
}



