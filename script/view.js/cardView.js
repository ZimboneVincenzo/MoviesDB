"use strict";

const parentElement = document.querySelector(".card-group");
const detailModal = document.querySelector(".modal");
let goToDetail = 0;

export const renderCard = function (data) {
  console.log("PARENT ELEMENT RENDER CARD -> ", parentElement);
  const html = `<ul class="cardFlex">
    ${data.map(renderList).join(" ")}
  </ul>`;

  parentElement.innerHTML = "";
  parentElement.insertAdjacentHTML("afterbegin", html);
};

const renderList = function (data) {
  return `<li class="card cardList " style="width: 18rem;" data-detail="${
    data.id
  }">
  <a href="#" class="cardFlex__link">
  <img src="${data.img}" class="card-img-top" alt="Movie picture">
  <div class="card-body card__hover">
  <span class="card-text card__vote">${data.vote}</span>
    <p class="card-title cardList__genre">${data.title}</p>
    <ul>
      ${data.genre
        .map((el) => `<li class="cardList__genre__list">${el},</li>`)
        .join(" ")}
    </ul>
  </div>
  </a>
</li>`;
};

export const detailCard = function (handler) {
  console.log("DETAIL CARD");
  parentElement.addEventListener("click", function (ev) {
    ev.preventDefault();
    console.log("click");
    detailModal.style.display = "block";
    //Richiamare la modal al click tramite ID?

    const page = ev.target.closest(".cardList");

    goToDetail = +page.dataset.detail;
    console.log("ID DELLA CARD -> ", goToDetail);
    handler(goToDetail);
  });
};

/*
export const rendercard = function(data){
console.log("RENDER VIEW DATA -> ", data);
    const html =  
    `<li class="card " style="width: 18rem;">
    <img src="${data.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.title}</h5>
      <p class="card-text">${data.genre}</p>
    </div>
  </li>`

  parentElement.insertAdjacentHTML('afterbegin',html)
}
*/
