document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audioplayer');
    const savedtime = localStorage.getItem('audiocurrenttime');

    if (savedtime !== null) {
        audio.Currenttime = savedtime;
    }

    audio.addEventListener('timeupdate', function() {
        localStorage.setItem('audiocurrenttime', audio.currenttime);
    });
});

function navigate() {
    window.location.href = 'yapping1.html';
}