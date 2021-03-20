const storeDetails = e => {
    let userData = {
        nick: document.getElementById("nick").value,
    }
    localStorage.setItem("userdata", JSON.stringify(userData))
    e.preventDefault();
    window.location.href = "./quiz.html";
}


