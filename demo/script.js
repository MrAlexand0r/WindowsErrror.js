var error = new WindowsError('../res/ding.wav');

window.onload = function () {
    document.getElementById("createError").addEventListener('mousedown', () => {
        error.create(null, document.getElementById("headerinput").value, document.getElementById("bodyinput").value);
    });
}