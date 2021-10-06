const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const message =
  "Thank you for submitting your request. We will respond shortly.";

document.getElementById("ticketForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });

