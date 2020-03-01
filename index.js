var computationString = "12+234";
var result = 0;

var resultDiv = document.getElementById("result");
var computationStringDiv = document.getElementById("computationString");
resultDiv.innerHTML = result;
computationStringDiv.innerHTML = computationString;



function deleteAll(){
    result = 0; 
    computationString = "";
    resultDiv.innerHTML = result;
    updateComputationStringDiv();
}

function deleteSingle(){
    console.log(computationString);
    computationString.slice(0, computationString.length-1 - 1) + computationString.slice(computationString.length-1, computationString.length);
    updateComputationStringDiv();
    console.log(computationString);
}

function divide(){
    console.log("Divide.");
}


function updateComputationStringDiv(){
    computationStringDiv.innerHTML = computationString;
}