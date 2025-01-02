document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');

    button1.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    button2.addEventListener('click', function() {
        window.location.href = 'tambahan.html';
    });
});
