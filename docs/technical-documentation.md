# Technical Documentation

## Project Overview
This assignment is about improving my portfolio website by adding interactive features and using localstorage to save the current theme the user selected, a search feature to filter projects based on keywords entered, and a form validation system that gives feedback based on the input.

## Technologies and Tools used
- HTML: The structure of the website
- CSS: The styles for the page
- JavaScript: The functionalities of the page
- ChatGPT: Used to assist debugging bugs and suggestions for tasks

## Features and Functionalities
- Responsive Layout
- Light and Dark Mode Theme Toggle
- Form Validation
- Hover effect on cards and transitons
- Project Search Filter
- Greeting Message based on the time of the day
- Saved Current Theme using LocalStorage
- Success and Failure message for form feedback

## Javascirpt Code for Assignment 2

Code for toggleTheme (Added localStorage):

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

Code for themeDataHandeling:

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

Code for projectSearch:

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

Code for formValidation:

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
