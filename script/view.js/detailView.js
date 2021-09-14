"use strict";

import { renderCard } from "./cardView";

const parentElement = document.querySelector(".detail");
const detailModal = document.querySelector('.modal')
const btnClose = document.querySelector('.btn-close');
const show = document.querySelector('btn-show');
let goToDetail = 0;
const t = document.querySelector('cardList');

export const renderDetail = function (detail) {
  const [movie, list] = detail;
  console.log("DETAIL VIEW DATA", movie.cast.length);
  if(movie.cast.length > 6){
    console.log("MAGGIORE 6");
  }else{
    console.log("MINORE DI 6");
  }
  const html = `
  <div class="card detail__card" style="max-width: 100%;">
  ${movie.result.map(movieList).join(" ")}
</div>

<h3 class="detail__card__actor">actors</h3>
<button type="button" class="btn btn-success btn-show">Success</button>

<div class="card-group detail__card__container">
  ${movie.cast.map(movieCast).join(" ")}
</div>
  <ul class="card-group cardFlex">
    ${list.result.map(renderList).join(" ")}
  </ul>
`;

  parentElement.innerHTML = "";
  parentElement.insertAdjacentHTML("afterbegin", html);
};

export const detailViewCard = function (handler) {

  parentElement.addEventListener("click", function (ev) {
    ev.preventDefault();


    const page = ev.target.closest(".cardList");
    
    goToDetail = +page.dataset.detail;

    handler(goToDetail);
  });
};

export const closeModal = function(){

  btnClose.addEventListener('click', function(){
    detailModal.style.display = 'none'
  })
}

const movieList = function (movie) {
  return `<div class="row g-0">
    <div class="col-md-4 detail__card__img__desktop">
      <img src="${movie.img}" class="img-fluid rounded-start" alt="Poster movie">
    </div>
    <div class="col-sm-12 col-md-8 card__col">
      <div class="card-body">
        <h2 class="card-title detail__card__title">${movie.title}</h2>
        <span class="card-text detail__card__vote">${movie.vote}</span>
        <p class="card-text detail__card__tagline">${movie.tagline}</p>
        <a href="#" class="btn detail__card__btn"><img src="../../img/icons8-bookmark-16.png" class="detail__card__icon" alt="Image movie">
        Add to my watchlist</a>
        <p class="card-text detail__card__overview">${
          movie.overview
        }</p>
        <div class="detail__card__list__container">
          <p class="detail__card__list__title">Genres: </p>
            <ul class="detail__card__list__ul"> ${movie.genre.map((el) => `<li class="detail__card__list__genre">${el}</li>`).join(" ")}</ul>
        </div>
        <div class="col-md-4 detail__card__img__mobile">
          <img src="${movie.img}" class="img-fluid rounded-start" alt="Poster movie">
        </div>
      </div>
      <div class="card-footer detail__card__footer">
      <small class="text-muted">Release: ${movie.release.replaceAll('-','.')}</small>
      <small class="text-muted">Duration: ${movie.runtime}</small>
      <small class="text-muted">Budget: ${movie.budget} $</small>
    
    </div>
    </div>
  </div>`;
};




const movieCast = function (cast) {
  return `
  <div class="col- col-sm-6 col-md-4 col-lg-2  detail__card__container__cast">
  <img src="${cast.img}" class="card-img-top " alt="Actor picture">
  <div class="card-body">
    <h5 class="card-title">${cast.name}</h5>
    <p class="card-text">${cast.character}</p>
  </div>
</div>
  
  `;
};

const renderList = function (data) {
  return `<li class="cardList" style="width: 18rem;" data-detail="${data.id}">
  <a href="#" class="cardFlex__link">
  <img src="${data.img}" class="card-img-top" alt="Image movie">
  <div class="card-body card__hover">
  <span class="card-text card__vote">${data.vote}</span>
    <h5 class="card-title cardList__genre">${data.title}</h5>
    <ul>
      ${data.genre.map((el) => `<li class="cardList__genre">${el}</li>`).join(" ")}
    </ul>
  </div>
  </a>
</li>`;
};




