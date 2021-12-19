// SLIDER

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 9,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
});

// FORM VALIDATIONS

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const textArea = document.getElementById("message");

function checkInputs() {
  //get values from the input
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const textAreaValue = textArea.value.trim();

  if (usernameValue === "") {
    //show error
    //add error class
    setErrorFor(username, "This field is required.");
  } else {
    //add success class
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Invalid email address.");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is invalid");
  } else {
    setSuccessFor(email);
  }

  if (textAreaValue === "") {
    //show error
    //add error class
    setErrorFor(textArea, "This field is required.");
  } else {
    //add success class
    setSuccessFor(textArea);
  }
}

// ------------X--------------

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control div

  const small = formControl.querySelector("small");

  //add error message for the small tag
  small.innerText = message;

  //add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement; // .form-control div

  //add error class
  formControl.className = "form-control success";
}

// -------------X-------------

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

// ------------X----------
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// RESPONSIVE NAVBAR

const navButton = document.getElementById("hamburger");
const navLink = document.querySelector(".navbar-mobile");

navButton.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

const about = document.getElementById("about");
const aboutsub = document.querySelector(".aboutsub");

about.addEventListener("click", () => {
  aboutsub.classList.toggle("hide");
});
