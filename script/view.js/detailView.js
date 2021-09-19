"use strict";

import { controlRequestDetail } from "../controller";

const movieElement = document.querySelector(".detail__movie");
const castElement = document.querySelector(".detail__movie__cast");
const moviesElement = document.querySelector(".detail__movies");
const detailModal = document.querySelector(".modal");
const btnClose = document.querySelector(".btn-close");
const show = document.querySelector(".btn__show");

let goToDetail = 0;

const timeMethod = function (data) {
  const hour = Math.floor(data / 60);
  const min = data % 60;
  return [hour, min];
};

const budgetMethod = function (budget) {

  const mod = budget.length % 3;

  const arr = [];

  const restSlice = [];

  const arrJoin = [];

  let result = [];

  if (budget.length < 3) {
    return "" + 0;
  }

  if (!(budget.length % 3)) {
    for (let i = 0; i <= budget.length - 1; i++) {
      if (i > 0 && i % 3 === 0) {
        arr.push(".");
      }
      arr.push(budget[i]);
    }
    return arr.join("");
  } else {

    for (let i = 0; i <= budget.length - 1; i++) {
      arr.push(budget[i]);
    }

    const sliceArr = arr.slice(0, mod);
    sliceArr.push(".");

    for (let i = mod; i <= arr.length - 1; i++) {
      restSlice.push(arr[i]);
    }

    for (let i = 0; i <= restSlice.length - 1; i++) {
      if (i > 0 && i % 3 === 0) {
        arrJoin.push(".");
      }
      arrJoin.push(restSlice[i]);
    }

    result = sliceArr.concat(arrJoin);
    return result.join("");
  }
};

export const castList = function (bool, list) {
  cast(list, bool);
  show.addEventListener("click", function (ev) {
    ev.preventDefault();
    bool = !bool;
    cast(list, bool);
  });
};

export const detailViewCard = function () {
  closeModal();
  document.querySelectorAll(".detail__movies .cardList").forEach((node) => {
    node.addEventListener("click", function (ev) {
      goToDetail = +ev.path[2].dataset.detail;

      controlRequestDetail(goToDetail);
    });
  });
};

export const renderDetail = function (detail) {
  const [movie, list] = detail;

  const html = `
  <div class="card detail__card" style="max-width: 100%;">
    ${movie.result.map(movieList).join(" ")}
  </div>
`;
  movieElement.innerHTML = "";
  movieElement.insertAdjacentHTML("afterbegin", html);

  castList(false, movie.cast);
  movies(list.result);
  detailViewCard();
};

export const closeModal = function () {
  btnClose.addEventListener("click", function () {
    detailModal.style.display = "none";
  });
};

const movieList = function (movie) {
  const [hour, min] = timeMethod(movie.runtime);

  const budget = budgetMethod("" + movie.budget);

  return `<div class="row g-0">
    <div class="col-md-4 detail__card__img__desktop">
      <img src="${
        movie.img
      }" class="img-fluid rounded-start" alt="Poster movie">
    </div>
    <div class="col-sm-12 col-md-8 card__col">
      <div class="card-body">
        <h2 class="card-title detail__card__title">${movie.title}</h2>
        <span class="card-text detail__card__vote">${movie.vote}</span>
        <p class="card-text detail__card__tagline">${movie.tagline}</p>
        <a href="#" class="btn detail__card__btn"><img src="../../img/icons8-bookmark-16.png" class="detail__card__icon" alt="Image movie">
        Add to my watchlist</a>
        <p class="card-text detail__card__overview">${movie.overview}</p>
        <div class="detail__card__list__container">
          <p class="detail__card__list__title">Genres: </p>
            <ul class="detail__card__list__ul"> ${movie.genre
              .map((el) => `<li class="detail__card__list__genre">${el}</li>`)
              .join(" ")}</ul>
        </div>
        <div class="col-md-4 detail__card__img__mobile">
          <img src="${
            movie.img
          }" class="img-fluid rounded-start" alt="Poster movie">
        </div>
      </div>
      <div class="card-footer detail__card__footer">
      <small class="text-muted">Release: ${movie.release.replaceAll(
        "-",
        "."
      )}</small>
      <small class="text-muted">Duration:${hour}h ${min}m</small>
      <small class="text-muted">Budget: $ ${budget}</small>
    
    </div>
    </div>
  </div>`;
};

const cast = function (cast, bool = false) {
  const arrCast = [];

  if (cast.length > 6 && bool === false) {
    for (let x = 0; x <= 5; x++) {
      arrCast.push(cast[x]);
    }
    var html = `
    <div class="card-group detail__card__container">
      ${arrCast.map(movieCast).join(" ")}
    </div>
  `;
  } else {
    var html = `
    <div class="card-group detail__card__container">
      ${cast.map(movieCast).join(" ")}
    </div>
  `;
  }

  castElement.innerHTML = "";
  castElement.insertAdjacentHTML("afterbegin", html);
};

const movieCast = function (cast) {
  return `
  <div class="col-12 col-sm-12 col-md-4 col-lg-2  detail__card__container__cast">
  <img src="${cast.img}" class="card-img-top " alt="Actor picture">
  <div class="card-body">
    <h5 class="card-title">${cast.name}</h5>
    <p class="card-text">${cast.character}</p>
  </div>
</div>
  `;
};

const movies = function (movies) {
  const html = `
  <ul class="card-group cardFlex">
    ${movies.map(renderList).join(" ")}
  </ul>
`;

  moviesElement.innerHTML = "";
  moviesElement.insertAdjacentHTML("afterbegin", html);
};

const renderList = function (data) {
  return `<li class="cardList" style="width: 18rem;" data-detail="${data.id}">
  <a href="#" class="cardFlex__link">
  <img src="${data.img}" class="card-img-top" alt="Image movie">
  <div class="card-body card__hover">
  <span class="card-text card__vote">${data.vote}</span>
    <h5 class="card-title cardList__genre">${data.title}</h5>
    <ul>
      ${data.genre
        .map((el) => `<li class="cardList__genre__list">${el}</li>`)
        .join(" ")}
    </ul>
  </div>
  </a>
</li>`;
};
