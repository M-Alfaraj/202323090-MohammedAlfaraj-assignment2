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
    }

    else{
        buttonSymbol.textContent = "🌙";
    }
}

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

function projectSearch(){
    //variables to take values from the html page
    const input = document.getElementById("projectSearch");
    const allProject = document.querySelectorAll(".projectSection");
    const nullMessage = document.getElementById("projectMessageNull");

    //checks the data search values and compare with the input in the label
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

window.addEventListener("DOMContentLoaded", function() {
    greetingMessage();
    const themeButton = document.getElementById("buttonTheme");
    themeButton.addEventListener("click", toggleTheme);

    projectSearch();
});