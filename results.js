/* The displayResults() function gets the value of the score of the user set in localStorage under the key "score" and displays it on the page */
function displayResults(){

    //Getting score from localStorage
    let score = localStorage.getItem("score");
    
    //Setting it into the HTML of the page
    document.getElementById("resultbox").innerHTML = `Your Score is ${score}`;
}
displayResults();