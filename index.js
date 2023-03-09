const aboutMe = document.getElementById("aboutMe");

function scrollFunction() {
    aboutMe.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }

const homeArrow = document.getElementById("homeArrow");

homeArrow.addEventListener("click", scrollFunction)