var nextBtn1 = document.getElementById("nextBtn1"),
    nextBtn2 = document.getElementById("nextBtn2"),
    submit = document.getElementById("submit"),
    staticPage = document.getElementById("staticPage"),
    stepOneDiv = document.getElementById("stepOne"),
    stepTwoDiv = document.getElementById("stepTwo"),
    stepThreeDiv = document.getElementById("stepThree"),
    ownersName = document.getElementById("ownersName"),
    jobTitle = document.getElementById("jobTitle"),
    NIN = document.getElementById("NIN"),
    age = document.getElementById("age"),
    ownersEmail = document.getElementById("ownersEmail"),
    ownersPhone = document.getElementById("ownersPhone"),
    ownersAddress = document.getElementById("ownersAddress"),
    ownersCity = document.getElementById("ownersCity"),
    ownersState = document.getElementById("ownersState"), 
    ownersNameO = document.getElementById("ownersNameO"),
    input = document.getElementsByTagName("input")
    
    
    
    ;

function showDiv2() {
    stepOneDiv.style.display = "none";
    staticPage.style.display = "none";
    stepThreeDiv.style.display = "none";
    stepTwoDiv.style.display = "flex";
}

function showDiv3() {
    stepOneDiv.style.display = "none";
    stepTwoDiv.style.display = "none";
    staticPage.style.display = "none";
    stepThreeDiv.style.display = "flex";
}

function showStatic() {
    stepOneDiv.style.display = "none";
    stepTwoDiv.style.display = "none";
    stepThreeDiv.style.display = "none";
    staticPage.style.display = "block";

    for (let index = 0; index < input.length; index++) {
        ownersNameO.innerHTML = input[i].value;
    }
}




nextBtn1.addEventListener("click", showDiv2);
nextBtn2.addEventListener("click", showDiv3);
submit.addEventListener("click", showStatic);