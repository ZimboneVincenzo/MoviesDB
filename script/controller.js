"use strict";

import * as model from "./model.js";
import { renderCard, detailCard } from "./view.js/cardView.js";
import { requestPage, resultPage } from "./view.js/paginationView.js";
import { chooseLink } from "./view.js/buttonLinkView.js";
import { renderDetail, detailViewCard, closeModal, castList } from "./view.js/detailView.js";
import { searchMovie } from "./view.js/searchView.js";

import { changeNavbar } from "./view.js/navbar.js";



// Funzione richiamo chiama API dal Model
const controlrequestApi = async function (
  url = `https://api.themoviedb.org/3/movie/popular`,
  page = 1
) {

  try {
    //chiamata API dal model
    const data = await model.requestApi(url, page);

    //Renderizzo la card
    renderCard(data.result);

    //Pagination
 
    resultPage(data.url, data.page, data.totalPage);
    //Pagination
   
   

    //controlPagination(data);

    //renderPagination(model.movies.page);
  } catch (err) {
    console.log(err);
  }
};

/*
const controlPagination = function (data) {
  console.log("ControlPagination");
  //Manda a pagination.js url scelto e pagina corrente
  const url = data.url;
  const page = data.page;
  resultPage(url, page);

  console.log("NEWPAGE CON>TROL", data);
};*/

const controlRequestDetail = async function (id) {
  try {
    //Chiamata Detail
    const detail = await model.requestDetail(id);
  

    //Renderizzare con View la card Detail
    renderDetail(detail);
  } catch (err) {
    console.log(err);
  }
};

const controlSearch = async function (data) {
  try {
    const movieSearch = await model.searcBar(data);

    renderCard(movieSearch.result);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  model.genresApi();
  controlrequestApi();
  closeModal();
  changeNavbar();

  detailCard(controlRequestDetail);
  detailViewCard(controlRequestDetail);
  chooseLink(controlrequestApi);
  requestPage(controlrequestApi);
  searchMovie(controlSearch);
  //requestPage(controlrequestApi);
  //castList();
};
init();
