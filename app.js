const textbox = document.getElementById("textbox");
const button = document.getElementById("save");
const info = document.getElementById("info");

button.addEventListener("click", function() {
    var download = document.getElementById("hidden-link");
    download.href = "data:text/plain," + textbox.value;
    download.click();
});

function copy() {
    const copy = document.getElementById("textbox");

    copy.select();
    navigator.clipboard.writeText(textbox.value)
}

function del() {
    textbox.value = "";
}

function show() {
    info.style.display = "block"
}

function hide() {
    info.style.display = "none"
}
