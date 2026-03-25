# Technical Documentation

## Project Overview
This assignment is an improved version my portfolio website from assignment 1. it adds interactive features, use localstorage to save the current theme, includes a project search feature, and a form validation system that gives feedback.

## Technologies and Tools Used
- HTML: The structure of the website.
- CSS: The styles for the page.
- JavaScript: The functionalities of the page.
- ChatGPT: Used to assist debugging bugs and suggestions for tasks.

## Features and Functionalities

### 1. Responsive Layout
The websites adjusts its layout based on the screen size using media queries to improve usability on different devices.

### 2. Light and Dark Mode Theme Toggle with localStorage
A button in the navigation bar allows the user to switch between light to dark mode.
Javascript is used to:
- Switches between light and dark mode.
- Updates the button icon.
- saves the selected theme using localStorage.
- load the saved them when the page is reloaded.

### 3. Form Validation and form feedback
The contact form is validated using javaScript.
The form checks if all fields are filled and if the email format is correct.
if the validation fails, an error message is shown. If validation successeds, a success message is shown.

### 4.  Animations and Transitons
The website uses CSS to transitions and animations to improve user experience by:
- Adding a hover effect on cards and buttons.
- Animating success and error messages.
- Smooth visual transitions.

### 5. Project Search Filter
The project section has a search bar that takes input to filter the projects.
JavaScript is used to compare the entered keyword with each project's 'data search'.
`FPGA` will show the first project.
`BFS` will show the second project.
`star` will show the third project.
`cloud` will show the no projects message.

### 6. Greeting Message based on the time of the day
A greeting message is displayed aboce the navigation bar depending on the time of day.

## Javascirpt Functions

### `toggleTheme()`
Switch between light and dark mode and save the selected theme in localStorage.
      
### `themeDataHandeling()`
Load's the last theme selected by the user when the page reloads.

### `greetingMessage()`
display's a greeting message based in the time of day.
         
### `projectSearch()`
Filters the project cards based on the keywords entered in the search bar by the user.

### `formValidation()`
Validatesthe contact form and shows either a success message or error message.  
      
## Learning Outcome
I have improved my understanding in JavaScript and have understood the usefulness of localStorage to save changes by the user and create a validation system to  make my website more interactive and user friendly. And with ChatGPT's assistance, I was able to understand how to use certain code and create useful functions that will help me in the future.
