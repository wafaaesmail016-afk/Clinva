var openMenu = document.getElementById("openMenu");
var closeMenu = document.getElementById("closeMenu");
var sideMenu = document.getElementById("sideMenu");
var appointmentForm = document.getElementById("appointmentForm");
var formMessage = document.getElementById("formMessage");
var preferredDate = document.getElementById("preferred-date");
var navLinks = document.querySelectorAll("#navMenu a");

openMenu.addEventListener("click", function () {
  sideMenu.classList.add("active");
});

closeMenu.addEventListener("click", function () {
  sideMenu.classList.remove("active");
});

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    sideMenu.classList.remove("active");
  });
}

var today = new Date().toISOString().split("T")[0];
preferredDate.min = today;

appointmentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formMessage.textContent = "Your appointment request was sent successfully.";
  formMessage.style.display = "block";
  appointmentForm.reset();
  preferredDate.min = today;
});