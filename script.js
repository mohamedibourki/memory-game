
function myFunc(targetDiv) {
    // Get a reference to all the div elements
    var divs = document.querySelectorAll("div");

    // Iterate through all the div elements
    for (var i = 0; i < divs.length; i++) {
        var currentDiv = divs[i];
        if (currentDiv === targetDiv) {
            // If the current div is the target div, add the 'big' class
            currentDiv.classList.add("big");
        } else {
            // If the current div is not the target div, remove the 'big' class
            currentDiv.classList.remove("big");
        }
    }
}