const textbox = document.getElementById("textbox");
const button = document.getElementById("save")

// Save Text
button.addEventListener("click", function() {
    var download = document.getElementById("hidden-link");
    download.href = "data:text/plain," + textbox.value;
    download.click();
});

// Copy Text
function copy() {
    const copy = document.getElementById("textbox");

    copy.select();

    navigator.clipboard.writeText(textbox.value)
}

// Delete Text
function del() {

    textbox.value = "";
}