console.log("Running FIZZ BUZZ");

function main() {
    console.log("Running main");
    const myApp = document.getElementById("app");
    myApp.style.height = "200px";
    myApp.style.backgroundColor = "#00EE00";
    myApp.style.width = "150px";
    myApp.style.transform = "scale(0.7)";
    myApp.style.border = "#55DD66";
    myApp.innerText = "My awesome homework #03";
    myApp.textContent = "NEW TEXT";

    const myBoxes = document.getElementsByClassName("box");
    for (let i = 0; i < myBoxes.length; i++) {
        myBoxes[i].innerText = "BOX NO." + i;
    }

    for (const box of myBoxes) {
        box.style.backgroundColor = "aquamarine";
    }
    
    
}

main();
