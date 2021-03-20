function displayResults(){
    let score = localStorage.getItem("score");
    document.getElementById("resultbox").innerHTML = `Your Score is ${score}`;
}
displayResults();