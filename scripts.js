var audioPlaying = false;
function music() {
    var audio = document.getElementById("bgMusic");
    if (! audioPlaying) audio.play();
    else audio.pause();
    audioPlaying = !audioPlaying;
}

function createSnowFlake() {
    const snowflake = document.createElement ('img');
    snowflake.classList.add('snowflake');
    snowflake.src ='foto/strawberry.png';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 7 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 20 + 'px';

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 10000);

}
setInterval(createSnowFlake, 200);

function navigate() {
    window.location.href = 'lagu.html';
}