function userInput() {
    var name = prompt("Please enter your name:");
    if (name !== null) {
        document.getElementById("response-text").innerText = "Hello, " + name + "!";
    }
}