"use strict";
const parentElement = document.querySelector('.pagination')
const liElement = document.querySelector(".page-item");
const btnPage = document.querySelector(".page-link");

let pagUrl = "";
let numPage = 0;
let goToPage = 0;
let totalPages = 0;

export const resultPage = function (url,page,pages) {
  pagUrl = url;
  numPage = page;
  totalPages = pages;

  renderPagination(numPage)
};

export const requestPage = function (handler) {

  //Manda url e pagina di riferimento
  parentElement.addEventListener("click", function (ev) {
    ev.preventDefault();
    const page = ev.target.closest(".page-link");
    goToPage = +page.dataset.goto;

    handler(pagUrl, goToPage);
    
  });
 
  
};

export const renderPagination = function (currPage) {


  if (currPage === 1) {
    const html = `
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" data-goto="${1}">
      <span aria-hidden="true">&larr;</span>
    </a>
  </li>
    <li class="page-item"><a class="page-link" href="#" data-goto="${1}">${1}</a></li>

    <li class="page-item"><a class="page-link" href="#" data-goto="${
      2
    }">${2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      3
    }">${3}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${4}">${4}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      5
    }">${5}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      6
    }">${6}</a></li>
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Next" data-goto="${
      currPage + 1 }>
      <span aria-hidden="true" >&rarr;</span>
    </a>
  </li>
    `;
    parentElement.innerHTML = "";
    parentElement.insertAdjacentHTML("afterbegin", html);
  } 


  if (currPage <= 4) {
    const html = `
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" >
      <span aria-hidden="true">&larr;</span>
    </a>
  </li>
    <li class="page-item"><a class="page-link" href="#" data-goto="${1}">${1}</a></li>

    <li class="page-item"><a class="page-link" href="#" data-goto="${
      2
    }">${2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      3
    }">${3}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      4
    }">${4}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      5
    }">${5}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      6
    }">${6}</a></li>
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Next"data-goto="${
      currPage + 1 }>
      <span aria-hidden="true">&rarr;</span>
    </a>
  </li>
    `;
    parentElement.innerHTML = "";
    parentElement.insertAdjacentHTML("afterbegin", html);
  } 
  if( currPage === 5){
    const html = `
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" data-goto="${currPage - 1}">
      <span aria-hidden="true">&larr;</span>
    </a>
  </li>
    <li class="page-item"><a class="page-link" href="#" data-goto="${1}">${1}</a></li>

    <li class="page-item"><a class="page-link" href="#" data-goto="${
      2
    }">${2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      3
    }">...</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      4
    }">${4}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage
    }">${currPage}</a></li>
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
    <a class="page-link" href="#" aria-label="Next"data-goto="${
      currPage + 1 }>
      <span aria-hidden="true">&rarr;</span>
    </a>
  </li>
    `;
    parentElement.innerHTML = "";
    parentElement.insertAdjacentHTML("afterbegin", html);
  }
  if( currPage > 5 && currPage < 8){
    const html = `
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" data-goto="${currPage - 1}>
      <span aria-hidden="true">&larr;</span>
    </a>
  </li>
    <li class="page-item"><a class="page-link" href="#" data-goto="${1}">${1}</a></li>

    <li class="page-item"><a class="page-link" href="#" data-goto="${
      2
    }">${2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      3
    }">...</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage - 2
    }">${currPage -2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage - 1
    }">${currPage - 1}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage
    }">${currPage}</a></li>
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
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      totalPages
    }">${totalPages}</a></li>
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Next"data-goto="${
      currPage + 1 }>
      <span aria-hidden="true">&rarr;</span>
    </a>
  </li>
    `;
    parentElement.innerHTML = "";
    parentElement.insertAdjacentHTML("afterbegin", html);
  }

  if( currPage >= 8){
    const html = `
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" data-goto="${currPage - 1}>
      <span aria-hidden="true">&larr;</span>
    </a>
  </li>
    <li class="page-item"><a class="page-link" href="#" data-goto="${1}">${1}</a></li>

    <li class="page-item"><a class="page-link" href="#" data-goto="${
      2
    }">${2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage - 5
    }">...</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage - 2
    }">${currPage -2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage - 1
    }">${currPage - 1}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage
    }">${currPage}</a></li>
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
      499
    }">${499}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      500
    }">${500}</a></li>
  <li class="page-item">
    <a class="page-link" href="#" aria-label="Next"data-goto="${
      currPage + 1 }>
      <span aria-hidden="true">&rarr;</span>
    </a>
  </li>
    `;
    parentElement.innerHTML = "";
    parentElement.insertAdjacentHTML("afterbegin", html);
  }

  if( currPage >= totalPages - 4){
    const html = `
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" data-goto="${currPage - 1}>
      <span aria-hidden="true">&larr;</span>
    </a>
  </li>
    <li class="page-item"><a class="page-link" href="#" data-goto="${1}">${1}</a></li>
    
    <li class="page-item"><a class="page-link" href="#" data-goto="${
      2
    }">${2}</a></li>

    <li class="page-item "><a class="page-link" href="#" data-goto="${
      currPage - 5
    }">...</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      totalPages- 6
    }">${totalPages- 6}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      totalPages- 5
    }">${totalPages- 5}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      totalPages- 4
    }">${totalPages- 4}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      totalPages- 3
    }">${ totalPages -3}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      totalPages - 2
    }">${ totalPages - 2}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      totalPages - 1
    }">${totalPages - 1}</a></li>
    <li class="page-item "><a class="page-link" href="#" data-goto="${
      totalPages
    }">${totalPages}</a></li>
  <li class="page-item">
    <a class="page-link" href="#" aria-label="Next"data-goto="${
      totalPages }>
      <span aria-hidden="true">&rarr;</span>
    </a>
  </li>
    `;
    parentElement.innerHTML = "";
    parentElement.insertAdjacentHTML("afterbegin", html);
  }
};
