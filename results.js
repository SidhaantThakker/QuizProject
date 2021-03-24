/* The displayResults() function gets the value of the score of the user set in localStorage under the key "score" and displays it on the page */
function displayResults(){

    //Getting score from localStorage
    let score = localStorage.getItem("score");
    
    //Setting it into the HTML of the page
    document.getElementById("resultbox").innerHTML = `Your Score is ${score}`;
}
displayResults();

function saveScore(){
    let score = localStorage.getItem("score");

    let  { nick } = JSON.parse(localStorage.getItem("userdata"));

    let newHigh = { 
        name: nick, 
        highscore: score
    }

    let pushFlag = true;

    if(localStorage.getItem("scoreArray")){

        arrScore = JSON.parse(localStorage.getItem("scoreArray"));

        for(let i=0; i<arrScore.length; i++){

            if(arrScore[i].name == newHigh.name){

                if(newHigh.highscore > arrScore[i].highscore){

                    arrScore[i].highscore = newHigh.highscore;
                    console.log("found user, updating score");

                }
                else {

                    console.log("found user, score update not needed");

                }
                pushFlag = false;
                break;
            }
        }

        if(pushFlag){
            console.log("new user, adding");
            arrScore.push(newHigh);
        }

        console.log("begin");
        for(let j = 0; j < arrScore.length - 1; j++){
            console.log("pass")
            for(let  k = 0; k < arrScore.length -  1 - j; k++){
                if (arrScore[k].highscore < arrScore[k+1].highscore)
                {
                    console.log("switch");
                    let t = arrScore[k];
                    arrScore[k] = arrScore[k+1];
                    arrScore[k+1] = t;
                }
            }
        }
        console.log("end")

        arrScore = arrScore.slice(0,10);

        console.log("arrScore");
        console.log(arrScore);

        localStorage.setItem("scoreArray",JSON.stringify(arrScore));

    } else {
        console.log("Must make new score array!")
        arrScore = [];
        arrScore.push(newHigh);
        localStorage.setItem("scoreArray",JSON.stringify(arrScore));

    }
    document.getElementById("scoresaver").innerHTML = "Saved!";
    document.getElementById("scoresaver").disabled = true;
}

