var error = new WindowsError();

window.onload = function () {
    document.getElementById("createError").addEventListener('mousedown', () => {
        error.create(null, document.getElementById("headerinput").value, document.getElementById("bodyinput").value);
    });
}