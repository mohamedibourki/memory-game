function myFunc(targetDiv) {
    var divs = document.querySelectorAll("div");

    // Check if the targetDiv has the 'big' class
    var hasBigClass = targetDiv.classList.contains("big");

    // Iterate through all the div elements
    for (var i = 0; i < divs.length; i++) {
        var currentDiv = divs[i];
        if (currentDiv === targetDiv) {
            // If the current div is the target div and it has the 'big' class, remove it
            if (hasBigClass) {
                currentDiv.classList.remove("big");
            } else {
                // If the current div is the target div and it doesn't have the 'big' class, add it
                currentDiv.classList.add("big");
            }
        } else {
            // If the current div is not the target div, remove the 'big' class
            currentDiv.classList.remove("big");
        }
    }
}