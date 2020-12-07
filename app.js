var btnTranslate = document.querySelector("#btn-trans");

//var btnTranslate = document.getElementById("#btn-trans");

var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/minion.json"

//minion:   https://api.funtranslations.com/translate/minion.json
//tanay:   https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json
//startrek:   https://api.funtranslations.com/translate/romulan.json

function getURL(text){
    return serverURL+"?"+"text=" + text
}

function errorhandler(error){
    alert("There's something wrong, please try after sometime.")
}


function clickhandler() {
    var inputText = txtInput.value; 
    // taking inputtttt
    
    //process
    fetch (getURL(inputText))
        .then(response => response.json())
        .then(json => {
        var translatedText = json.contents.translated
        outputDiv.innerText = translatedText})
        .catch (errorhandler)
    //output.  
    //outputDiv.innerText=translatedText
    
}

btnTranslate.addEventListener("click", clickhandler);

//btnTranslate.addEventListener("keydown", function (e){

// if (e.keyCode===13){
//     // document.getElementById("btn-trans").click();
//     validate (e);
// }
// });

// function validate(e){
//     alert("Fff");
// }





//onsubmit=clickhandler()

