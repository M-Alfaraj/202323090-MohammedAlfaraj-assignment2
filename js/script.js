
//function used to switch between light and dark mode 
function toggleTheme(){
    //refers to the body element
    const body = document.body;

    //refers to the button in the nav section
    const buttonSymbol = document.getElementById("buttonTheme");

    //toggles to dark mode or lightmode
    body.classList.toggle("darkMode");

    //checks if the mode is darkmode or not and changes the icon based on that
    if(body.classList.contains("darkMode")){
        buttonSymbol.textContent = "☀️";
        localStorage.setItem("theme", "dark")
    }

    else{
        buttonSymbol.textContent = "🌙";
        localStorage.setItem("theme", "light")
    }
}

//function to load the theme from localstorage
function themeDataHandeling(){
    const currTheme =  localStorage.getItem("theme");
    const buttonSymbol = document.getElementById("buttonTheme");

    if(currTheme === "dark"){
        document.body.classList.add("darkMode");
        buttonSymbol.textContent = "☀️";
    }

    else{
        document.body.classList.remove("darkMode");
        buttonSymbol.textContent = "🌙";
    }
}

//function to show a greeting message above the navbar
function greetingMessage(){
    //variables to store the current hour and message for the greetings
    const greetingElement = document.getElementById("greeting");
    const currentHour = (new Date()).getHours();
    let message = "";

    //checks the current hour to determine the greeting
    //
    if(currentHour >= 5 && currentHour < 12){
        message = "Good Morning!";
    }
    else if(currentHour >= 12 && currentHour < 18){
        message = "Good Afternoon!";
    }
    else if(currentHour >= 18 && currentHour < 22){
        message = "Good Evening!";
    }
    else{
        message = "Greetings and good night!";
    }

    greetingElement.textContent = message
}

//function to filter the projects based on the keywords entered in the search label
function projectSearch(){
    //variables to take values from the html page
    const input = document.getElementById("projectSearch");
    const allProject = document.querySelectorAll(".projectSection");
    const nullMessage = document.getElementById("projectMessageNull");

    //compare the typed keyword with each project search data
    input.addEventListener("input", function () {
        const value = input.value.toLowerCase().trim();
        //stores projects that include the keywords
        let projects = 0;

        allProject.forEach(function (p) {
            const text = p.dataset.search.toLowerCase();

            //show if the value is included otherwise, do not display the project.
            if(text.includes(value)) {
                p.style.display = "flex";
                projects++
            }
            else{
                p.style.display = "none"
            }
        });

        //if no projects include the keyworks entered in the search, display nullmessage
        if(projects === 0){
            nullMessage.style.display = "block"
        }
        
        else{
            nullMessage.style.display = "none"
        }
    })
}

//function to validate the content form and show a feedback message
function formValidation(){
    const form = document.getElementById("contactForm");
    const inputName = document.getElementById("name");
    const inputEmail = document.getElementById("email");
    const inputMessage = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const valueName = inputName.value.trim();;
        const valueEmail = inputEmail.value.trim();
        const valueMessage = inputMessage.value.trim();

        formMessage.classList.remove("success", "error");

        if(valueName === "" || valueEmail === "" || valueMessage === "") {
            formMessage.textContent = "Please fill all fields before submitting."
            formMessage.classList.add("error");
            formMessage.style.display = "block";
            return;
        }

        const patterns = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

        if(!patterns.test(valueEmail)) {
            formMessage.textContent = "Please enter a valid email address."
            formMessage.classList.add("error");
            formMessage.style.display = "block";
            return;
        }

        formMessage.textContent = "Your information has been submitted successfully."
            formMessage.classList.add("success");
            formMessage.style.display = "block";
            form.reset();
    });
}

//Run all functions on startup after the content loads
window.addEventListener("DOMContentLoaded", function() {
    themeDataHandeling()
    greetingMessage();
    
    const themeButton = document.getElementById("buttonTheme");
    themeButton.addEventListener("click", toggleTheme);

    projectSearch();
    formValidation();
});