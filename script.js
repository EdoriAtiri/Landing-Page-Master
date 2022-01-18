const form = document.getElementById('form'),
  email = document.getElementById('email'),
  warning = document.getElementById('warning'),
  openMenu = document.getElementById('menu-open'),
  closeMenu = document.getElementById('menu-close'),
  nav = document.getElementById('navbar');

// check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    warning.style.opacity = 0;
    email.style.borderColor = 'limegreen';

    setTimeout(() => {
      input.value = '';
      email.style.borderColor = '';
    }, 5000);
  } else {
    warning.style.opacity = 1;

    setTimeout(() => {
      warning.style.opacity = 0;
    }, 5000);
  }
}

// Open Nav Bar
function slideOut() {
  openMenu.style.display = 'none';
  closeMenu.style.display = 'inherit';
  nav.classList.add('flyIn');
}

// Close Nav Bar
function slideAway() {
  closeMenu.style.display = 'none';
  openMenu.style.display = 'inherit';
  nav.classList.remove('flyIn');
}

// Event Listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkEmail(email);
});
openMenu.addEventListener('click', slideOut);
closeMenu.addEventListener('click', slideAway);
