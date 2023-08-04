document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector("#menu-btn");
    const about = document.querySelector("#about");
    const optionb = document.querySelector(".option-box");
    const member = document.querySelector("#member");
    const spec = document.querySelector("#specs");
    const log = document.querySelector("#log");
    const Disabled = document.querySelector("#Disabled");

    menuBtn.addEventListener("click", function () {
      optionb.classList.toggle("open");
      about.classList.toggle("open");
      member.classList.toggle("open");
      spec.classList.toggle("open");
      log.classList.toggle("open");
      Disabled.classList.toggle("open");
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll("#log");

    dropdowns.forEach(function (log) {
      dropdown.addEventListener("click", function () {
        this.querySelector(".dropdown-menu").classList.toggle("show");
      });
    });

 
    document.addEventListener("click", function (event) {
      if (!event.target.matches("#log") && !event.target.closest(".dropdown-menu")) {
        const dropdownMenus = document.querySelectorAll(".dropdown-menu");
        dropdownMenus.forEach(function (menu) {
          if (menu.classList.contains("show")) {
            menu.classList.remove("show");
          }
        });
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll("#specs");

    dropdowns.forEach(function (log) {
      dropdown.addEventListener("click", function () {
        this.querySelector(".dropdown-menu").classList.toggle("show");
      });
    });

   
    document.addEventListener("click", function (event) {
      if (!event.target.matches("#specs") && !event.target.closest(".dropdown-menu")) {
        const dropdownMenus = document.querySelectorAll(".dropdown-menu");
        dropdownMenus.forEach(function (menu) {
          if (menu.classList.contains("show")) {
            menu.classList.remove("show");
          }
        });
      }
    });
  });


  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
  }