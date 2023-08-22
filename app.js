const textbox = document.getElementById("textbox");
const button = document.getElementById("save");
const modal = document.getElementsByClassName("modal-dialog")[0];

button.addEventListener("click", ()=> {
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
    modal.style.display = "block";
}

function hide() {
    modal.style.display = "none";
}
