
//Getting nickname from localStorage and displaying it in the HTML
function displayData(){
    if(localStorage.getItem("userdata")){
        let { nick } = JSON.parse(localStorage.getItem("userdata"));
        document.getElementById("data").innerHTML = `Welcome, ${nick}`;
    }
}
displayData();

//Getting questions from localStorage

qArr = JSON.parse(localStorage.getItem("questions"));
//Randomizing Array Elements
qArr = qArr.sort(() => Math.random() - 0.5);
qArr = qArr.slice(0,5);
//Getting the question box HTML element
dispArea = document.getElementById("qbox");

//variable i will hold the index of the current question
let i = 0;

/* Array arrSel will contain the selected option for a question and the question ID of the question so that we can verify it later */
let arrSel = [];

/*
The nextQuestion function renders the HTML for the given question, diplaying a re-initialized timer, 
the question text, the options, the clear button and the next question button
*/
function nextQuestion(){
    qArr[i].options = qArr[i].options.sort(() => Math.random() - 0.5);
    dispArea.innerHTML = `
    <div class="timer" id="timer${i}">
        00:5
    </div>
    <div class="questiontext">
        <div class="thetext">${i+1}. ${qArr[i].question}</div>
        <br>
        <div class="optioncard">
            <div class="option option1" onclick="selectDiv(0)">
                <input type="radio" name="q${qArr[i].id}" id="${qArr[i].id}${qArr[i].options[0]}" value="${qArr[i].options[0]}">
                <label for="${qArr[i].id}${qArr[i].options[0]}">${qArr[i].options[0]}</label>
            </div>

            <div class="option option2" onclick="selectDiv(1)">
                <input type="radio" name="q${qArr[i].id}" id="${qArr[i].id}${qArr[i].options[1]}" value="${qArr[i].options[1]}">
                <label for="${qArr[i].id}${qArr[i].options[1]}">${qArr[i].options[1]}</label>
            </div>

            <div class="option option3" onclick="selectDiv(2)">
                <input type="radio" name="q${qArr[i].id}" id="${qArr[i].id}${qArr[i].options[2]}" value="${qArr[i].options[2]}">
                <label for="${qArr[i].id}${qArr[i].options[2]}">${qArr[i].options[2]}</label>
            </div>

            <div class="option option4" onclick="selectDiv(3)">
                <input type="radio" name="q${qArr[i].id}" id="${qArr[i].id}${qArr[i].options[3]}" value="${qArr[i].options[3]}">
                <label for="${qArr[i].id}${qArr[i].options[3]}">${qArr[i].options[3]}</label>
            </div>
        </div>
    </div> 
    `+`<br>`+
    `<div class="buttonbox">
    <button onclick="clearOptions()">Clear</button>
    <button onclick="checkOptions()">Next!</button>
    </div>`;
    quizTimer(i);
}
nextQuestion();


/* The clearOptions function is triggered when the Clear button is clicked 
and will clear selected options for the given question */
function clearOptions(){
    console.log("clearing");
    optsToClear = document.getElementsByName(`q${qArr[i].id}`);
    for(let j = 0; j < optsToClear.length; j++){
        optdivs[j].classList.remove("selected");
        optsToClear[j].checked = false;;
    }
}

/* The checkOptions function is triggered when the Next button is clicked and will submit the selected option (if any) and will move to the next question */
function checkOptions(){
    if(i == qArr.length-1){
        //Entered if this is the last question to be checked, will trigger the checkScore function 
        opts = document.getElementsByName(`q${qArr[i].id}`);
        for(let j=0;j<opts.length;j++){
            if(opts[j].checked){
                console.log(opts[j]);
                arrSel.push({id: qArr[i].id, chosen: opts[j].value});
                console.log(arrSel);
            }
        }
        checkScore();
    } else {
        //Entered if more questions are left, will move to the next question by incrementing i
        opts = document.getElementsByName(`q${qArr[i].id}`)
        for(let j=0;j<opts.length;j++){
            if(opts[j].checked){
                console.log(opts[j]);
                arrSel.push({id: qArr[i].id, chosen: opts[j].value});
                console.log(arrSel);
            }
        }
        i++;
        nextQuestion();
    }
    

}

/* The checkScore fucntion will calculkate the total score of the player based on the options selected and stored in the arrSel array*/

function checkScore(){
    let k = 0;
    for(i = 0; i < arrSel.length; i++){
        let num = arrSel[i].id;
        let ans = "";
        for(j=0;j<qArr.length;j++){
            if(qArr[j].id == num)
            {
                ans = qArr[j].answer;
            }
        }
        if(ans == arrSel[i].chosen){
            k++;
        }
    }
    console.log("Score ",k);
    localStorage.setItem("score",k);
    window.location.href = "./results.html";
}

/* The timer fucntion initializes a new timer for each  question and displays it on the HTML */
function quizTimer(i){
    let t = 3000000000;
    let tr = setInterval(function(){
        try{
            document.getElementById(`timer${i}`).innerHTML='00:'+t;
            if(t==0){
                checkOptions();
            }
        }
        catch(err){
            t=0;
        }
        t--;
        if (t < 0) {
            clearInterval(tr);
        }
    }, 1000);
}


function selectDiv(x){
    optdivs = document.getElementsByClassName("option");

    
    for(let j=0;j<optdivs.length;j++){
        optdivs[j].classList.remove("selected");
        document.getElementById(`${qArr[i].id}${qArr[i].options[j]}`).checked = false;
        if(j==x){
            optdivs[j].classList.add("selected");
        }
    }
    optselect = document.getElementById(`${qArr[i].id}${qArr[i].options[x]}`);
    optselect.checked = true;
}