let wins = document.querySelectorAll('.window');

function toggleActive(win) {
    if (win.classList.contains('active')) {
        win.classList.remove('active');
        win.querySelector('.before').classList.remove('bef');
        win.querySelector('.after').classList.remove('aft');
        win.querySelector("img").style.position = "none";
        win.querySelector("img").style.width = "0%"
    } else {
        win.classList.add('active');
        win.querySelector('.before').classList.add('bef');
        win.querySelector('.after').classList.add('aft');
        win.querySelector("img").style.width = "100%"
        win.querySelector("img").style.position = "absolute";
    }
}

wins.forEach(win => {
    win.addEventListener('click', () => {
        toggleActive(win);
    });
});