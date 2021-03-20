function displayData(){
    console.log("outside");
    if(localStorage.getItem("userdata")){
        console.log("inside");
        let {nick} = JSON.parse(localStorage.getItem("userdata"));
        box = document.getElementById("data");
        box.innerHTML = `<p>Welcome, ${nick}</p>`
    }
}
displayData();

qArr = JSON.parse(localStorage.getItem("questions"))

qArr = qArr.sort(() => Math.random() - 0.5)

dispArea = document.getElementById("qbox")
for(let i = 0; i<qArr.length; i++){
    qArr[i].options = qArr[i].options.sort(() => Math.random() - 0.5)
    dispArea.innerHTML += `
    <div>
        ${i+1}. ${qArr[i].question}
        <br>
        <input type="radio" name="q${qArr[i].id}" id="${qArr[i].id}${qArr[i].options[0]}" value="${qArr[i].options[0]}">
        <label for="${qArr[i].id}${qArr[i].options[0]}">${qArr[i].options[0]}</label>
        <br>
        <input type="radio" name="q${qArr[i].id}" id="${qArr[i].id}${qArr[i].options[1]}" value="${qArr[i].options[1]}">
        <label for="${qArr[i].id}${qArr[i].options[1]}">${qArr[i].options[1]}</label>
        <br>
        <input type="radio" name="q${qArr[i].id}" id="${qArr[i].id}${qArr[i].options[2]}" value="${qArr[i].options[2]}">
        <label for="${qArr[i].id}${qArr[i].options[2]}">${qArr[i].options[2]}</label>
        <br>
        <input type="radio" name="q${qArr[i].id}" id="${qArr[i].id}${qArr[i].options[3]}" value="${qArr[i].options[3]}">
        <label for="${qArr[i].id}${qArr[i].options[3]}">${qArr[i].options[3]}</label>
    </div> 
    `+`<br>`;
}

dispArea.innerHTML += `<button type="submit"> Enter </button>`;

const optionsList = e => {
    let arrSel = [];
    for(i=0;i<qArr.length;i++){
        opts = document.getElementsByName(`q${qArr[i].id}`)
        for(let j=0;j<opts.length;j++){
            if(opts[j].checked){
                console.log(opts[j]);
                arrSel.push({id: qArr[i].id, chosen: opts[j].value});
            }
        }

    }
    console.log(arrSel)
    e.preventDefault();
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


