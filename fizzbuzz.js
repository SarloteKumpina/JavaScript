// console.log("Running FIZZ BUZZ");


function main() {
    console.log("Running main");
    const myApp = document.getElementById("app");
    const myBoxes = document.getElementsByClassName("box");
    styleEl(myApp, "100%", "60%", "rgb(150, 130, 110)");
    styleEl(myBoxes[3], "100px", "200px", "rgb(70, 70, 110)");
    styleEl(myBoxes[1], "50px", "100px", "rgb(90, 70, 90)", "I am a simple boxy");
    addNewElement(myApp, "hr");
    addNewElement(myApp, "p", "", [], "MY PARAGRAPH");
    addNewElement(myApp, "p", "mySpceialPar", [], "MY PARAGRAPH whoo");
    addNewElement(myApp, "p", "", ["round-corners", "green-bg"], "MY PARAGRAPH haa");

    for (let i = 1; i < 101; i++) {
        let myClassList = ["box"];
        if (i%2 === 0){
            myClassList.push("round-corners", "green-bg")
        } else {
            myClassList.push("round-corners", "orange-bg")
        }
        addNewElement(myApp, "div", "my-box-id"+i, myClassList, +i);
    }
}

function styleEl(myElement, height, width, bgColor, text = "") {
    myElement.style.height = height;
    myElement.style.width = width;
    myElement.style.backgroundColor = bgColor;
    if (text !== "") {
        myElement.innerText = text;
    }
}   

function addNewElement(parent, tag, id = null, myClassList = [], text = "", styleObj = {}) {
    const newEl = document.createElement(tag);
    if (id !== "") {
        newEl.id = id;
    }
    if (myClassList.length > 0) {
        newEl.classList.add(...myClassList)
    }
    if (text !== "") {
        newEl.innerText = text};
    parent.appendChild(newEl);
}
    
//did not call this function
function unusedFunction () {
    myApp.style.height = "200px";
    myApp.style.backgroundColor = "#00EE00";
    myApp.style.width = "150px";
    myApp.style.transform = "scale(0.7)";
    myApp.style.border = "solid black 5px";
    myApp.innerText = "My awesome homework #03";
    myApp.textContent = "NEW TEXT";



    const myBoxes = document.getElementsByClassName("box");
    for (let i = 0; i < myBoxes.length; i++) {
        myBoxes[i].innerText = "BOX NO." + i;
    }

    for (const box of myBoxes) {
        // box.style.backgroundColor = "aquamarine";
        box.classList.add("round-corners");
        box.classList.add("green-bg");

    Array.from(myBoxes).forEach((element) => {
        element.style.border = "solid green 2px";
    })
    }
}

main();
