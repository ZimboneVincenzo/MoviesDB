'use strict';

const pointCheck = document.querySelector('.nav--change');
const navBar = document.querySelector('.navbar');

let coord;

//Callback a partire dalla posizione delle card nav cambia colore
const changeColor = function (entries, observer){
    
    const [entry] = entries

 
    //navBar.style.display = 'none'

    observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(changeColor, {
    root: null,
    threshold: 0,

  });
  export const changeNavbar = function (){

   
    const coords = pointCheck.getBoundingClientRect();
    coord = coords.top.toString()
    sectionObserver.observe(pointCheck)  

};
   