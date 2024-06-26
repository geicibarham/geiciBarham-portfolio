document.addEventListener("DOMContentLoaded", function () {
  const text = "Hi, I'm Geici!";
  const typewriterElement = document.getElementById("typewriter");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typewriterElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});

// mobile drawer navigation
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".mobile-nav-button");
  const drawer = document.querySelector(".drawer");
  const overlay = document.querySelector(".overlay");
  const closeButton = document.querySelector(".close-nav-button");
  const drawerNav = document.querySelectorAll(".drawer-nav li");

  drawer.setAttribute("aria-hidden", "true");

  button.addEventListener("click", function () {
    drawer.classList.toggle("open");
    overlay.classList.toggle("visible");
  });

  closeButton.addEventListener("click", function () {
    drawer.classList.remove("open");
    overlay.classList.remove("visible");
  });

  drawerNav.forEach((element) => {
    element.addEventListener("click", function () {
      drawer.classList.remove("open");
      overlay.classList.remove("visible");
    });
  });

  overlay.addEventListener("click", function () {
    drawer.classList.remove("open");
    overlay.classList.remove("visible");
  });
});
