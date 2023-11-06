let wins = document.querySelectorAll('.window');

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
    } else {
        win.classList.add('active');
        win.querySelector('.before').classList.add('bef');
        win.querySelector('.after').classList.add('aft');
        win.querySelector("img").style.width = "100%";
        win.querySelector("img").style.position = "absolute";
    }
}

wins.forEach(win => {
    win.addEventListener('click', () => {
        toggleActive(win);
    });
});