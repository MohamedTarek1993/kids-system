//loader
// let loader = document.getElementById('preloader');
// window.addEventListener('load', function () {
//   loader.style.display = 'none';
// });
//loader
//  scroll-up 
var btn = $('#button');
var image = $('.navbar-light .navbar-brand img');
var link = $('.navbar-light .nav-item .nav-link');
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
    image.css('width', '50%');
    link.addClass('change');
  } else {
    btn.removeClass('show');
    image.css('width', '70%');
    link.removeClass('change');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
//    scroll-up 
// animated hamburger icon
$(document).ready($(function () {
  let navBtn = $('.navbar-toggler');
  $(navBtn).click(function () {
    $(navBtn).toggleClass('active-hamburger');
  });
}));
// animated hamburger icon

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
      // dropdownContent.animate([{ opacity: '0.0' }, { opacity: '1.0' }],
      //     { duration: 1500, fill: 'forwards' })
    }
  });
}
function updateDateTime() {
  const currentTimeElement = document.getElementById("current-time");
  const currentDateElement = document.getElementById("current-date");
  const currentDayElement = document.getElementById("current-day");

  const now = new Date();

  // Get current time
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const currentTime = hours + ":" + minutes + ":" + seconds;

  // Get current date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = now.toLocaleDateString(undefined, options);

  // Get current day
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[now.getDay()];

  // Update displayed time, date, and day
  currentTimeElement.textContent = currentTime;
  currentDateElement.textContent = currentDate;
  // currentDayElement.textContent = currentDay;
}

setInterval(updateDateTime, 1000);



// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.getElementById('toggle');
const dark = document.getElementById('dark');
const light = document.getElementById('light');
// const logoLight = document.getElementById('logoLight');
// const logoDark = document.getElementById('logoDark');
const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
   // 2. toggle classes
  dark.style.display = "none";
  light.style.display = "block";
  // 3. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
 
  
}
const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
       // 2. toggle classes

  light.style.display = "none";
  dark.style.display = "block";
  // 3. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}
// toggle icon
// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');
  // logoLight.style.display = "block";
  // logoDark.style.display = "none";
  


  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
    // if it has been enabled, turn it off  
    // change logo 
    // logoLight.style.display = "none";
    // logoDark.style.display = "block";
   


  } else {
    disableDarkMode();
 

  }
});

//    light&& dark

