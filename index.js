var input = document.querySelector("#txt-area");
var btn = document.querySelector("#btn-translate");
var output = document.querySelector("#output-txt");

function clickHandler(){
    var a = input.value;
    fetch("https://api.funtranslations.com/translate/ferb-latin.json?text="+a)
    .then(response => response.json())
    .then(json => {
        var translatedoutput = json.contents.translated;
        output.innerText = translatedoutput;
    })
    .catch(error => console.log(error))
}

btn.addEventListener("click", clickHandler);