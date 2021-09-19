"use strict";

const pointCheck = document.querySelector(".nav--change");
const navBar = document.querySelector(".fixed");


const containerNav = document.querySelector(".navbar"); 
const moveRight = document.querySelector(".moveNav");
const btnNav = document.querySelector(".btnSide");
const sideBar = document.querySelector(".collapse__right");

const container = document.querySelector(".containerNav"); 


export const navFunction = function(){
  coordinates();
  openSide();
}


const coordinates = function () {
  
  const initialCoord = pointCheck.getBoundingClientRect();

  window.addEventListener("scroll", function () {
    if (window.scrollY > initialCoord.top - 100) {
        containerNav.classList.add("paddingScroll");
        navBar.classList.add("fixedScroll");
    } else {
        containerNav.classList.remove("paddingScroll");
        navBar.classList.remove("fixedScroll");
    }
  });
};

const openSide = function (open = true) {

  btnNav.addEventListener("click", function () {
    console.log(container);
    if (open) {
      sideBar.classList.add("marginSideRight");
      container.classList.add("marginRight");
  
      open = !open;
    } else {
      sideBar.classList.remove("marginSideRight");
      container.classList.remove("marginRight");
    
      open = !open;
    }
  });
};
