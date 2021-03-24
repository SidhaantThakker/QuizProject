function getLeads(){
    let table = document.getElementById("thetable");
    if(localStorage.getItem("scoreArray")){

        arrScore = JSON.parse(localStorage.getItem("scoreArray"));
        for(let i=0;i<arrScore.length;i++){
            table.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${arrScore[i].name}</td>
                <td>${arrScore[i].highscore}</td>
            </tr>
            `
        }

    } else {
        table.innerHTML = `<h3>No scored saved to display!</h3>`;
    }
}
getLeads();