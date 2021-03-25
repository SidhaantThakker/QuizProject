
/* The storeDetails() function takes the nickname input from the index and stores it in localStorage with the key "userdata" */
const storeDetails = e => {

    //Getting nickname from HTML
    let userData = {
        nick: document.getElementById("nick").value,
    }

    if(userData.nick != ""){

        //Setting in localStorage
        localStorage.setItem("userdata", JSON.stringify(userData));

        /*Preventing reload of page after form submission, used during testing, 
        not required now as we are shifting page anyway, but doesn't hurt to keep it anyway */
        e.preventDefault();

        //Navigating to the quiz page
        window.location.href = "./fancyquiz.html";
    }
}

function sortArrScore(){


    if(localStorage.getItem("scoreArray")){
        let arrScore = localStorage.getItem("scoreArray");
        for(let j = 0; j < arrScore.length - 1; j++){
            for(let  k = 0; k < arrScore.length -  1 - j; k++){
                if (arrScore[k].highscore < arrScore[k+1].highscore)
                {
                    let t = arrScore[k];
                    arrScore[k] = arrScore[k+1];
                    arrScore[k+1] = t;
                }
            }
        }
        localStorage.setItem("scoreArray", arrScore);
    }
}

sortArrScore();


