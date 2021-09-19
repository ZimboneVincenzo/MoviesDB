"use strict";

import { APIPOPULAR, APINOWPLAIYNG, APITOPRATED, APIUPCOMING } from "../config";

const parentElement = document.querySelector(".input-group");
const buttonElement = document.querySelectorAll(".btn-menu-list");

const arrName = ["Popular", "Now playing", "Top Rated", "Upcoming"];

const createButton= function () {

  parentElement.innerHTML = "";

  for (let i = 0; i <= 3; i++) {
    const button = document.createElement("button");
    button.classList.add("btn-menu-list");
    button.classList.add("btn");
    button.classList.add("btn-outline-success");
    button.classList.add("url-link");
    button.setAttribute("data-gotoUrl", `${i+1}`);
    button.innerHTML = arrName[i];

    parentElement.appendChild(button);
  }
};

const addActive = function(number){
  document.querySelectorAll(".btn-menu-list").forEach((node) => {
      if(+node.getAttribute('data-gotoUrl') === number){
        node.classList.add("active")
      }else{
        node.classList.remove("active")
      }
  })
}


export const chooseLink = function (handler) {
  
  createButton();
  addActive(1)
    
    document.querySelectorAll(".btn-menu-list").forEach((node) => {
        node.addEventListener("click", function (ev) {
         
          //console.log("CLICK NODO", node);

          //const newUrl = ev.target.closest(".url-link");
          //console.log("New URL", newUrl);

          //const checkUrl = +newUrl.dataset.gotourl;
          const checkUrl = +ev.path[0].dataset.gotourl;

          node.classList.add("active");

          //console.log("BTN CHECK URL", checkUrl);
          addActive(checkUrl)
          switch (checkUrl) {
            case 1:
              handler(APIPOPULAR, 1);
              break;
            case 2:
              handler(APINOWPLAIYNG, 1);
              break;
            case 3:
              handler(APITOPRATED, 1);
              break;
            case 4:
              handler(APIUPCOMING, 1);
              break;

            default:
              handler(APIPOPULAR, 1);
          }
         
         
        });
      });
  
 /*
  parentElement.addEventListener("click", function (ev) {
    
    const newUrl = ev.target.closest(".url-link");
    console.log("New URL", newUrl);
    
    const checkUrl = +newUrl.dataset.gotourl;


    chooseAPI(checkUrl)
    newUrl.classList.add('active')
    


    console.log("BTN CHECK URL", checkUrl);



    switch (checkUrl) {
      case 1:
        handler(APIPOPULAR, 1);
        break;
      case 2:
        handler(APINOWPLAIYNG, 1);
        break;
      case 3:
        handler(APITOPRATED, 1);
        break;
      case 4:
        handler(APIUPCOMING, 1);
        break;

      default:
        handler(APIPOPULAR, 1);
    }
  });
*/
  const html = `
        <button class="btn btn__menu__list btn-outline-success url-link" type="button"  data-gotoUrl="${1}">Popular</button>
        <button class="btn btn__menu__list btn-outline-success url-link" type="button"  data-gotoUrl="${2}">Now playing</button>
        <button class="btn btn__menu__list btn-outline-success url-link" type="button"  data-gotoUrl="${3}">Top rated</button>
        <button class="btn btn__menu__list btn-outline-success url-link" type="button"  data-gotoUrl="${4}">Upcoming</button>
        `;

  //parentElement.insertAdjacentHTML("afterbegin", html);
};

/*

export const requestPage = function (handler) {
  //Manda url e pagina di riferimento
  console.log("COUNTPAGE", url);

  paginationElement.addEventListener("click", function (ev) {
    ev.preventDefault();
    console.log("pagination click");

    //const page = ev.target.closest(".page-link");

    //goToPage = +page.dataset.goto;
    //console.log("Go To Page", goToPage);
    //handler(pagUrl, goToPage);
    renderPagination(1);
  });
};
export const renderPagination = function (currPage) {
  const currentPage = currPage;

  if (currentPage <= 4) {
    const html = `
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous">
      <span aria-hidden="true">&larr;</span>
    </a>
  </li>
    <li class="page-item"><a class="page-link" href="#" data-goto="${currentPage}">${currentPage}</a></li>

    <li class="page-item"><a class="page-link" href="#" data-goto="${
      currentPage + 1
    }">${currentPage + 1}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currentPage + 2
    }">${currentPage + 2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currentPage + 3
    }">${currentPage + 3}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currentPage + 4
    }">${currentPage + 4}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currentPage + 5
    }">${currentPage + 5}</a></li>
  <li class="page-item">
    <a class="page-link" href="#" aria-label="Next">
      <span aria-hidden="true">&rarr;</span>
    </a>
  </li>
    `;
    parentElement.innerHTML = "";

    parentElement.insertAdjacentHTML("afterbegin", html);
  }
};
*/
