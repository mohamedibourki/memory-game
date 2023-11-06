let wins = document.querySelectorAll('.window');
let activeWindows = [];

function deletee(win) {
    win.querySelector('.before').remove();
    win.querySelector('.after').remove();
}

function toggleActive(win) {
    if (win.classList.contains('active')) {
        win.classList.remove('active');
        win.querySelector('.before').classList.remove('bef');
        win.querySelector('.after').classList.remove('aft');
        win.querySelector("img").style.position = "static";
        win.querySelector("img").style.width = "100%";
        deletee(win);

        // Remove the window from the activeWindows array
        const index = activeWindows.indexOf(win);
        if (index !== -1) {
            activeWindows.splice(index, 1);
        }
    } else {
        win.classList.add('active');
        win.querySelector('.before').classList.add('bef');
        win.querySelector('.after').classList.add('aft');
        win.querySelector("img").style.width = "100%";
        win.querySelector("img").style.position = "absolute";

        // Add the window to the activeWindows array
        activeWindows.push(win);

        // If there are two active windows, compare their image sources
        if (activeWindows.length === 2) {
            const img1 = activeWindows[0].querySelector("img").src;
            const img2 = activeWindows[1].querySelector("img").src;

            if (img1 !== img2) {
                // If the images are different, close both windows
                activeWindows.forEach(activeWin => {
                    deletee(activeWin);
                    activeWin.classList.remove('active');
                    activeWin.querySelector('.before').classList.remove('bef');
                    activeWin.querySelector('.after').classList.remove('aft');
                    activeWin.querySelector("img").style.position = "static";
                    activeWin.querySelector("img").style.width = "100%";
                });
                activeWindows = [];
            }
        }
    }
}

wins.forEach(win => {
    win.addEventListener('click', () => {
        toggleActive(win);
    });
});