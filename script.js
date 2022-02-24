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
    
    // let newNum = Math.random()
    // console.log(newNum)
    // const range = highNum - lowNum + 1
    // console.log(range)
    // newNum = newNum * range
    // console.log(newNum)
    // // console.log(lowNum + " is lowNum")
    // newNum = newNum + lowNum
    // console.log(newNum)
    // newNum = Math.floor(newNum)
    // console.log(newNum)
    numContainer.innerHTML = newNum;
    // console.log(newNum + ` max:${highNum} min: ${lowNum}`)
} )