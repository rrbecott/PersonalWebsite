//Adds Nav Bar to all pages
function addNavBar() {
  var navBarEl = `
    <nav class="nav-bar">
    <h1 class="name">Ryan Becotte</h1>
    <div class="nav-btns">
    <a href="index.html" class="nav-btn"
        >Home</a
    >
    <a href="projects.html" class="nav-btn">
        My Projects
    </a>
    <a href="about.html" class="nav-btn"
        >About Me</a
    >
    <a href="contact.html" class="nav-btn"
        >Contact</a
    >
    </div>
    <button class="mobile-nav-btn"><ion-icon class="mobile-nav-btn-icon" name="reorder-three-outline"></ion-icon></button>
    </nav>`;

  document.body.insertAdjacentHTML(
    "afterbegin",
    navBarEl
  );
}

//Slides in the mobile button menu when clicking the three bars button
function mobileNavHandler() {
  const mobileNavBtn =
    document.getElementsByClassName(
      "mobile-nav-btn"
    );
  const navBtns =
    document.getElementsByClassName("nav-btns");

  mobileNavBtn[0].addEventListener(
    "click",
    () => {
      navBtns[0].classList.toggle(
        "mobile-nav-slide-in"
      );
    }
  );
}

addNavBar();
mobileNavHandler();
