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
    //alert message shows greeting once every session
    if(sessionStorage.getItem("greetingsDone")) {
        return;
    }
    
    //variables to store the current hour and message for the greetings
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

    alert(message)

    //marks as true to make sure that the message is not shown more than once
    sessionStorage.setItem("greetingsDone", "true")
}

window.addEventListener("DOMContentLoaded",greetingMessage)