// var username = prompt("your name");
// alert("hello "+username);
// console.log("username"+username);

const userInput = document.querySelector("#input-text");
const btn = document.querySelector("#btn-translate");
const translatedOutput = document.querySelector("#output-text");
const url = "https://api.funtranslations.com/translate/minion.json";
const resetbtn = document.querySelector("#reset");

//Error handling
function errorHandler(error) {
    console.log("Error" + error);
    alert("Oops!!Server is currently down.Please try later");

}

//click handling
function inputHandler() {
    const inputText = userInput.value;
    //console.log(inputText);
    const translatedURL = url + "?" + "text=" + inputText;
    //console.log(translatedURL);

    fetch(translatedURL)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            const translatedText = json.contents.translated;
            translatedOutput.innerText = translatedText;

        })
        .catch(errorHandler);
}

function resetHandler() {
    userInput.value = "";
    translatedOutput.innerText = "";
}

btn.addEventListener("click", inputHandler);
resetbtn.addEventListener("click", resetHandler);