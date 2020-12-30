var inputText= document.querySelector("#txt-input");
var btn = document.querySelector("#butn");

var outputDiv = document.querySelector("#output");





function clickhandler(){

    var inputTextvalue=inputText.value;
    
    if(inputTextvalue.includes(" ")){
        // console.log("Space is there")

        outputDiv.innerText="space is there"
    }
    else{
        // console.log("Space is not there")

        outputDiv.innerText="space is not there"
    }
    
}



btn.addEventListener("click",clickhandler)