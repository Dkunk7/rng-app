const genButton = document.querySelector("#generate");
const numContainer = document.querySelector("#num-container");

function generateNumExclusive(min, max) { // Maybe implement this later? The min is inclusive still; max is not. Do I want that? How would I make the min exlcusive?
    const newNum = Math.floor(Math.random() * (max - min) + min)
}

function generateNumInclusive(min, max) {
}

genButton.addEventListener("click", function() {
    const lowNum = parseInt(document.querySelector("#low-num").value);
    const highNum = parseInt(document.querySelector("#high-num").value);
    const newNum = Math.floor(Math.random() * (highNum - lowNum + 1) + lowNum);

    if (!newNum) {
        return;
    } else numContainer.innerHTML = newNum;
} )