let sit1 = document.querySelector(".sit1")
let sit2 = document.querySelector(".sit2")
let img = document.querySelector("img")
let big = document.querySelector(".big")

function myFunc(targetDiv) {
    var divs = document.querySelectorAll("div");

    var hasBigClass = targetDiv.classList.contains("big");

    for (var i = 0; i < divs.length; i++) {
        var currentDiv = divs[i];
        if (currentDiv === targetDiv) {
            if (hasBigClass) {
                currentDiv.classList.remove("big");
                sit1.remove();
                sit2.remove();
                img.style.width = "100%"
            } else {
                currentDiv.classList.add("big");
                sit1.style.height = "100%";
                sit1.style.width = "25%";
                sit1.style.left = "25%";
                sit2.style.height = "100%";
                sit2.style.left = "75%";
                sit2.style.left = "50%";
                sit2.style.width = "25%";
                sit1.classList.add("sat");
                sit2.classList.add("sot");
            }
        } else {
            currentDiv.classList.remove("big");
        }
    }
}