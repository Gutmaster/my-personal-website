const body = document.querySelector("body")

const h2 = document.createElement("h2");

h2.textContent = "Java add this content Diggity";

body.appendChild(h2);

document.addEventListener("keydown", function (event) {
    if (event.key === "Delete"){
        children = this.getElementsByClassName("chars");
        if(children.length <= 0){
            const bStyle = window.getComputedStyle(body)
            if(bStyle.borderRadius === "0px"){
                body.style.borderRadius = "100px"
                body.style.background = "red";
                alert('No chars to delete!');
            }
            else if(body.style.background === "red"){
                body.style.borderRadius = "0px"
                body.style.background = "blue";
                alert('Reverting Color');
            }
        }else{
            for(i=children.length-1; i>=children.length; i--)
                console.log(children.length, " removing" + children[i]);
                body.removeChild(children[i]);
        }
    }
    else
    {
        const newChar = document.createElement("p");
        newChar.classList.add("chars");
        newChar.textContent = event.key;
        body.appendChild(newChar);
    }
});