//unscrambled words game.js

var wordSet = new Map([
    ["cta", "cat"],       
    ["odg", "dog"],       
    ["ratb", "brat"],     
    ["etrca", "crate"],   
    ["paple", "apple"],   
    ["gaermin", "margin"],
    ["tisoycr", "crystal"],
    ["esatrn", "astern"], 
    ["bnateoir", "iteration"],
    ["sctpiraavj", "javascript"]
]);
var count = 0;

let wordArray = Array.from(wordSet);
document.getElementById('scrambledWordDisplay').innerHTML = wordArray[count][count];

function submit(){
	var userInp = document.getElementById('userInput').value;
	
	if(userInp == wordArray[count][1]){
		document.getElementById('feedbackDisplay').innerHTML = 'Correct!';
		count++
		
		document.getElementById('scrambledWordDisplay').innerHTML = wordArray[count][count - count];
	}else{
		document.getElementById('feedbackDisplay').innerHTML = 'Incorrect!';
	}
}
