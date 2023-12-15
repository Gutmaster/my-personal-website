const body = document.querySelector("body")

const h2 = document.createElement("h2");

h2.textContent = "This content added by JavaScript";

body.appendChild(h2);

document.addEventListener("keydown", function (event) {
    if (event.key === "Delete"){
        children = this.getElementsByClassName("chars")
        console.log(children.length)
        if(children.length <= 0){
            body.style.background = "red"
        }else{
            for(i=children.length-1; i>=children.length; i--)
                console.log(children.length, " removing" + children[i])
                body.removeChild(children[i])
        }
    }
    else
    {
        const newChar = document.createElement("p");
        newChar.classList.add("chars")
        newChar.textContent = event.key;
        body.appendChild(newChar);
    }
});