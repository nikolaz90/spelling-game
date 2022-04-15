const game = document.getElementById("game-section");

//Timer feature
let time = 10000;
let interval = setInterval(countDown, 1);

timer.innerHTML = time;

function countDown(){
    time--;        
    console.log(time)    
    if (time===0){
        timerdiv.style.display = "none";
        levelcount.style.display = "none";
        timeout.style.opacity = "1";
        youwin.style.display = "none";
        gamesection.style.background = "white";
        randomworddiv.style.display = "none";
        inputanswer.style.display = "none";
        clearInterval(interval);
    }
    timer.innerHTML = time;    
}

//random number generator

let random = 0; 

let randomNumberVariable = function randomNumberGenerator(max){
    return random = Math.floor(Math.random() * max);
}

//go up a level after 3 goes on the level
let index = 0;
let numberOfGoesOnLevel = 0; 
let numberOfGoesCounter = () => {
    numberOfGoesOnLevel++;
    if(numberOfGoesOnLevel===3){
        index++;
        numberOfGoesOnLevel = 0;
    }
}

//vocabulary library

let library = [
    ["I", "hi", "you", "then", "at", "it", "eat","oh", "for", "tot"],
    ["thus", "then", "art", "truck", "cane", "fog", "glad", "gum", "plain", "prod"],
    ["plane", "fluke", "freed", "cupboard", "thorough", "extent", "content", "crisis", "grape", "tickled"],
    ["house","tractor","event", "unusually", "hydration", "electronically", "example", "omelette","extra", "glass"],
    ["loveable", "terrified", "fraction", "reversed", "faction", "reverbe", "dynamo", "kangaroo", "extracted", "addressed"],
    ["mitigated", "irreversible", "constipated", "descended", "interpreted", "developped", "fantasised", "irradicated", "inexplicable", "calamity"],
    ["bewilderment", "telescopic", "extrapolation", "consequential", "rhetorically", "gravitational", "prehistorical", "establishment", "ravanously", "distinguishment"],
    ["apoptosis", "dodecahedron", "excacerbated", "haphazardly", "enthusiastically", "disappointedly", "unmistakably", "ostentatiously", "commonsensical", "knowledgeable"],
]; 

let randomWord = library[index][randomNumberVariable(9)];
randomworddisplay.innerHTML = randomWord;

//word validation and go to next word or next level

inputform.answer.oninput = function(){
    if(inputform.answer.value == randomWord && index < 8){
    numberOfGoesCounter();
    levelcountparagraph.innerHTML = index;
    randomWord = library[index][randomNumberVariable(9)];
    randomworddisplay.innerHTML = randomWord;
    inputform.answer.value = "";
    
} else if(index==7 && numberOfGoesOnLevel == 2) {
        youwin.style.opacity = "1"; 
        timerdiv.style.display = "none";
        levelcount.style.display = "none";
        gamesection.style.background = "white";
        randomworddiv.style.display = "none";
        inputanswer.style.display = "none";
        timeout.style.display = "none";
    }
}








