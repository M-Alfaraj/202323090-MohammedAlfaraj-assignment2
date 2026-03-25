# Technical Documentation

## Project Overview
This assignment is about improving my portfolio website by adding interactive features and using localstorage to save the current theme the user selected, a search feature to filter projects based on keywords entered, and a form validation system that gives feedback based on the input.

## Technologies and Tools used
- HTML: The structure of the website.
- CSS: The styles for the page.
- JavaScript: The functionalities of the page.
- ChatGPT: Used to assist debugging bugs and suggestions for tasks.

## Features and Functionalities

### 1. Responsive Layout
The websites adjusts content based on the screen size using media queries to improve usability on different devices.

### 2. Light and Dark Mode Theme Toggle with localStorage
A button in the nav section that changes from light to dark mode and vice versa.
Javascript used for:
- Switches between light and dark mode.
- Updates the button icon.
- saves the selected theme using localStorage.
- load the saved them when the page is reloaded.

### 3. Form Validation and form feedback
The content in the form is validated using javaScript.
The form checks if all fields are filled and if the email format is correct.
if the validation fails it will show am error message, otherwise, show a success message if the validation successeds.

### 4.  Animations and transitons
The website uses CSS to transitions and animations to improve user experience by:
- Adding a hover effect on cards and buttons.
- Animating success and error messages.
- Smooth visual transitions.

### 5. Project Search Filter
The project section has a search that takes input to filter the projects.
JavaScript is used to compare the entered keyword with each project's 'data search'.
'FPGA' will show the first project.
'BFS' will show the second project.
'star' will show the third project.
'cloud' will show the no projects message.

### 6. Greeting Message based on the time of the day
A greeting message that shows up about the navbar depending on the time of day.

## Javascirpt Code for Assignment 2

### Code for toggleTheme (Added localStorage):
Switch between light and dark mode and save the selected theme in localStorage.

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

### Code for themeDataHandeling:
Load's the last theme selected by the user when the page reloads.

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

### Code for greetingMessage:
display's a greeting message based in the time of day.

      function greetingMessage(){
          //variables to store the current hour and message for the greetings
          const greetingElement = document.getElementById("greeting");
          const currentHour = (new Date()).getHours();
          let message = "";

          //checks the current hour to determine the greeting
          
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

### Code for projectSearch:
Filters the project cards based on the keywords entered in the search bar by the user.

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

### Code for formValidation:
Validatesthe contact form and shows a success or error message.

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
        
## Learning Outcome
I have improved my understanding in JavaScript and have understood the usefulness of localStorage to save changes by the user and create a validation system to  make my website more interactive and user friendly. And with ChatGPT's assistance, I was able to understand how to use certain code and create useful functions that will help me in the future.
