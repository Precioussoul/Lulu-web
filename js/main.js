const getFullyear = () => {
  let year = new Date().getFullYear();
  if (year) {
    document.getElementById("full-year").innerHTML = year;
  }
  console.log("year", year);
};

getFullyear();

let headerPosition = document.querySelector(".header");
const sticky = headerPosition.offsetTop + 50;

console.log("offset", sticky);

function stickyAfterScroll() {
  if (window.pageYOffset >= sticky) {
    headerPosition.style.position = "fixed";
    headerPosition.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 4px 12px";
  } else {
    headerPosition.style.position = "relative";
    headerPosition.style.boxShadow = "none";
  }
}

window.addEventListener("scroll", stickyAfterScroll);

// navigation

const mobileNav = document.querySelector(".mobile-nav-wrapper");
const closeBtn = document.querySelector(".close-btn");
const menuBtn = document.getElementById("menu-btn");
const navLists = document.querySelectorAll(".mobile-nav-item");

function openNavigation() {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.add("open");
  });
  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  });
  mobileNav.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  });
  navLists.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      mobileNav.classList.remove("open");
    });
  });
}
openNavigation();
