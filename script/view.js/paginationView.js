"use strict";
const parentElement = document.querySelector(".pagination");
const liElement = document.querySelector(".page-item");
const btnPage = document.querySelector(".page-link");

let pagUrl = "";
let numPage = 0;
let goToPage = 0;
let totalPages = 0;
let previusPage = 0;

export const resultPage = function (url, page, pages) {
  pagUrl = url;
  numPage = page;
  totalPages = pages;
  console.log(numPage);
  renderPagination(numPage);
};

export const requestPage = function (handler) {
  //Manda url e pagina di riferimento
  parentElement.addEventListener("click", function (ev) {
    ev.preventDefault();

    const page = ev.target.closest(".page-link");

    page.classList.add("active");



    goToPage = +page.dataset.goto;

    handler(pagUrl, goToPage);
  });
};

const page = function (i, active = false) {
  const listItem = document.createElement("li");
  listItem.classList.add("page-item");
  //listItem.setAttribute('data-goto',`${i+1}`)

  const anchorItem = document.createElement("a");
  anchorItem.classList.add("page-link");
  if (active) {
    anchorItem.classList.add("active");
  }
  anchorItem.setAttribute("data-goto", `${i}`);

  const span = document.createElement("SPAN");
  listItem.appendChild(anchorItem);
  anchorItem.appendChild(span).innerHTML = i;

  parentElement.appendChild(listItem);
};

export const renderPagination = function (currPage) {


  parentElement.innerHTML = "";
  for (let i = currPage > 6 ? currPage - 6 : 1; i < currPage + 8; i++) {
    page(i, i === currPage);
  }
  /* if(currPage === 1){
    for(let i = 0; i<=8 ; i++){
      if (i <= 5){
        const listItem = document.createElement('li');
        listItem.classList.add('page-item')
        //listItem.setAttribute('data-goto',`${i+1}`)
  
        const anchorItem = document.createElement('a');
        anchorItem.classList.add('page-link')
        anchorItem.setAttribute('data-goto',`${i+1}`)
  
        const span = document.createElement('SPAN')
        listItem.appendChild(anchorItem)
        anchorItem.appendChild(span).innerHTML=i+1;
        
        console.log(listItem);
        //parentElement.innerHTML = "";
        parentElement.appendChild(listItem)
      }
      if(i === 6){
        console.log("i uguale a 6");
        const listItem = document.createElement('li');
        listItem.classList.add('page-item')
        //listItem.setAttribute('data-goto',`${i+1}`)
  
        const anchorItem = document.createElement('a');
        anchorItem.classList.add('page-link')
        anchorItem.setAttribute('data-goto',`${i+5}`)
  
        const span = document.createElement('SPAN')
        listItem.appendChild(anchorItem)
        anchorItem.appendChild(span).innerHTML='...';
        parentElement.appendChild(listItem)
      }
      if(i === 7){
        console.log("i uguale === 7");
        const listItem = document.createElement('li');
        listItem.classList.add('page-item')
        //listItem.setAttribute('data-goto',`${i+1}`)
  
        const anchorItem = document.createElement('a');
        anchorItem.classList.add('page-link')
        anchorItem.setAttribute('data-goto',`${totalPages - 1}`)
  
        const span = document.createElement('SPAN')
        listItem.appendChild(anchorItem)
        anchorItem.appendChild(span).innerHTML=totalPages - 1;
        parentElement.appendChild(listItem)
      }
      if(i===8){
        console.log("i uguale === 8");
        const listItem = document.createElement('li');
        listItem.classList.add('page-item')
        //listItem.setAttribute('data-goto',`${i+1}`)
  
        const anchorItem = document.createElement('a');
        anchorItem.classList.add('page-link')
        anchorItem.setAttribute('data-goto',`${totalPages}`)
  
        const span = document.createElement('SPAN')
        listItem.appendChild(anchorItem)
        anchorItem.appendChild(span).innerHTML=totalPages;
        parentElement.appendChild(listItem)
      }

    
      
      //parentElement.insertAdjacentHTML("afterbegin", html);
    }
    if(currPage === 5){

    } 

}*/

  /*

  if (currPage === 1) {
    const html = `
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" data-goto="${1}">
      <span aria-hidden="true">&larr;</span>
    </a>
  </li>
    <li class="page-item"><a class="page-link"href="#" data-goto="${1}">${1}</a></li>

    <li class="page-item"><a class="page-link" href="#" data-goto="${2}">${2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${3}">${3}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${4}">${4}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${5}">${5}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${6}">${6}</a></li>
    <li class="page-item">
    <a class="page-link" href="#" data-goto="${currPage + 1}">
      <span aria-hidden="true" >&rarr;</span>
    </a>
  </li>
    `;
    parentElement.innerHTML = "";
    parentElement.insertAdjacentHTML("afterbegin", html);
  }

  if (currPage > 1 && currPage <= 4) {
    const html = `
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" data-goto="${
      currPage - 1
    }">
      <span aria-hidden="true">&larr;</span>
    </a>
  </li>
    <li class="page-item"><a class="page-link" href="#" data-goto="${1}">${1}</a></li>

    <li class="page-item"><a class="page-link" href="#" data-goto="${2}">${2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${3}">${3}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${4}">${4}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${5}">${5}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${6}">${6}</a></li>
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Next"data-goto="${currPage + 1}">
      <span aria-hidden="true">&rarr;</span>
    </a>
  </li>
    `;
    parentElement.innerHTML = "";
    parentElement.insertAdjacentHTML("afterbegin", html);
  }
  if (currPage === 5) {
    const html = `
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" data-goto="${
      currPage - 1
    }">
      <span aria-hidden="true">&larr;</span>
    </a>
  </li>
    <li class="page-item"><a class="page-link" href="#" data-goto="${1}">${1}</a></li>

    <li class="page-item"><a class="page-link" href="#" data-goto="${2}">${2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${3}">...</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${4}">${4}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${currPage}">${currPage}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage + 1
    }">${currPage + 1}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage + 2
    }">${currPage + 2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage + 3
    }">${currPage + 3}</a></li>
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Next"data-goto="${currPage + 1}">
      <span aria-hidden="true">&rarr;</span>
    </a>
  </li>
    `;
    parentElement.innerHTML = "";
    parentElement.insertAdjacentHTML("afterbegin", html);
  }
  if (currPage > 5 && currPage < 8) {
    const html = `
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" data-goto="${
      currPage - 1
    }">
      <span aria-hidden="true">&larr;</span>
    </a>
  </li>
    <li class="page-item"><a class="page-link" href="#" data-goto="${1}">${1}</a></li>

    <li class="page-item"><a class="page-link" href="#" data-goto="${2}">${2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${3}">...</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage - 2
    }">${currPage - 2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage - 1
    }">${currPage - 1}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${currPage}">${currPage}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage + 1
    }">${currPage + 1}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage + 2
    }">${currPage + 2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage + 5
    }">...</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      totalPages - 1
    }">${totalPages - 1}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${totalPages}">${totalPages}</a></li>
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Next"data-goto="${currPage + 1}">
      <span aria-hidden="true">&rarr;</span>
    </a>
  </li>
    `;
    parentElement.innerHTML = "";
    parentElement.insertAdjacentHTML("afterbegin", html);
  }

  if (currPage >= 8) {
    const html = `
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" data-goto="${
      currPage - 1
    }">
      <span aria-hidden="true">&larr;</span>
    </a>
  </li>
    <li class="page-item"><a class="page-link" href="#" data-goto="${1}">${1}</a></li>

    <li class="page-item"><a class="page-link" href="#" data-goto="${2}">${2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage - 5
    }">...</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage - 2
    }">${currPage - 2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage - 1
    }">${currPage - 1}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${currPage}">${currPage}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage + 1
    }">${currPage + 1}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage + 2
    }">${currPage + 2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage + 5
    }">...</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${499}">${499}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${500}">${500}</a></li>
  <li class="page-item">
    <a class="page-link" href="#" aria-label="Next"data-goto="${currPage + 1}">
      <span aria-hidden="true">&rarr;</span>
    </a>
  </li>
    `;
    parentElement.innerHTML = "";
    parentElement.insertAdjacentHTML("afterbegin", html);
  }

  if (currPage >= totalPages - 4) {
    const html = `
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" data-goto="${
      currPage - 1
    }">
      <span aria-hidden="true">&larr;</span>
    </a>
  </li>
    <li class="page-item"><a class="page-link" href="#" data-goto="${1}">${1}</a></li>
    
    <li class="page-item"><a class="page-link" href="#" data-goto="${2}">${2}</a></li>

    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage - 5
    }">...</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      totalPages - 6
    }">${totalPages - 6}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      totalPages - 5
    }">${totalPages - 5}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      totalPages - 4
    }">${totalPages - 4}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      totalPages - 3
    }">${totalPages - 3}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      totalPages - 2
    }">${totalPages - 2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      totalPages - 1
    }">${totalPages - 1}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${totalPages}">${totalPages}</a></li>
  <li class="page-item">
    <a class="page-link" href="#" aria-label="Next"data-goto="${totalPages}">
      <span aria-hidden="true">&rarr;</span>
    </a>
  </li>
    `;
    parentElement.innerHTML = "";
    parentElement.insertAdjacentHTML("afterbegin", html);
  }
  */
};
