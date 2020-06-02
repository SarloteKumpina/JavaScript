// console.log("Running FIZZ BUZZ");


function main() {
    console.log("Running main");
    const myApp = document.getElementById("app");
    const myBoxes = document.getElementsByClassName("box");
    styleEl(myApp, "200px", "60%", "rgb(150, 130, 110)");
    styleEl(myBoxes[3] "100px", "200px", "rgb(70, 70, 110)");
}

function styleEl(myElement, height, width, bgColor) {
    myElement.style.height = height;
    myElement.style.width = width;
    myElement.style.backgroundColor = bgColor;
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
