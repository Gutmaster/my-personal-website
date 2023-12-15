const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

document.addEventListener("keydown", function (event) {
    console.log(event);
    const newChar = document.createElement("p");
    newChar.style.fontSize = "25px";
    newChar.textContent = event.key;
    document.querySelector("body").appendChild(newChar);
});