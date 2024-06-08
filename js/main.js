//loader
// let loader = document.getElementById('preloader');
// window.addEventListener('load', function () {
//   loader.style.display = 'none';
// });
//loader


document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.querySelectorAll('.toggle_menu');
    var sidebarExpanded = document.querySelector('.sidebar:not(.sidebar_resize)');
    var sidebarCollapsed = document.querySelector('.sidebar_resize');
    var contentCollapsed = document.querySelector('.contect_side');


    toggleButton.forEach(function (button) {
        button.addEventListener('click', function () {
            sidebarExpanded.classList.toggle('collapsed');
            sidebarCollapsed.classList.toggle('collapsed');
            contentCollapsed.classList.toggle('change');

        });
    });
});


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

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






