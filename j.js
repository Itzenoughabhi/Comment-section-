
function addText() {

    if (inputbox.value.trim() !== "") {
        text.innerHTML += text.innerHTML ? "<hr>" + inputbox.value : inputbox.value;
        inputbox.value = "";
}
}