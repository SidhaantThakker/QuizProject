
/* The storeDetails() function takes the nickname input from the index and stores it in localStorage with the key "userdata" */
const storeDetails = e => {

    //Getting nickname from HTML
    let userData = {
        nick: document.getElementById("nick").value,
    }

    //Setting in localStorage
    localStorage.setItem("userdata", JSON.stringify(userData));

    /*Preventing reload of page after form submission, used during testing, 
    not required now as we are shifting page anyway, but doesn't hurt to keep it anyway */
    e.preventDefault();

    //Navigating to the quiz page
    window.location.href = "./fancyquiz.html";
}


