const setOfWords = [
    "Quick brown fox jumps over the lazy dog.",
    "We promptly judged antique ivory buckles for the next prize.",
    "Back in my quaint garden, jaunty zinnias vie with flaunting phlox.",
     "How razorback-jumping frogs can level six piqued gymnasts!",
     "The job requires extra pluck and zeal from every young wage earner.",
     "Crazy Fredericka bought many very exquisite opal jewels."

];


const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');

let startTime ;
let endTime;

const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount /totalTime) * 60);
    let finalMsg = "You Typed total at " + speed + " words per minutes. ";
    finalMsg += comapareWords(msg.innerText,totalStr);
    
    msg.innerText = finalMsg;

}
const comapareWords = (str1, str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach (function(item, index) {
        if (item == words2[index]) {
            cnt++; 
        }

    })
        let errorWords = (words1.length - cnt);
        return (cnt + " " + "correct out of " + " " + words1.length  + " "+ "words and the total number of errors are" + " " + errorWords + ".")
    };




function wordCounter(str) {
    let response = str.split(" ").length;
    console.log(response);
    return response;


}

btn.addEventListener ('click', function(){
  if(this.innerText == 'Start'){
    typeWords.disabled = false;
    playGame();
}else if (this.innerText = "Done"){
    typeWords.disabled = true;
    btn.innerText = "Start";
    endPlay();
}

})


