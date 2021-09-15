"use strict";

//AJAX.JS
import { AJAXGET, IMGGET } from "./ajax";

//CONFIG.JS
import {
  APIPOPULAR,
  PATHIMG,
  APIKEY,
  APIGETDETAIL,
  APIGETRECOMMENTATION,
  APICAST,
  APIGENRES,
  APISEARCH,
} from "./config";

export const movies = {
  result: [],
  page: 1,
  url: "",
  totalPage: 1
};

export const detail = {
  result: [],
  cast: [],
};

export const genresMovie = {
  genres: [],
};

export const genresApi = async function () {
  try {
    const result = await AJAXGET(`${APIGENRES}${APIKEY}`);
    genresMovie.genres = result;
    console.log("CHIAMATA API GENERI", result);
  } catch (err) {
    console.log(err);
  }
};

//Ritorna Undefined da rivedere
const checkGenre = function (data) {
  const resultGenres = [];
  const { genres } = genresMovie.genres;
  //Confronto fra ArryGenresAPI e ARRAY totale dI genres
  for (let i = 0; i < data.length; i++) {
    for (let y = 0; y < genres.length; y++) {
      if (genres[y].id === data[i]) {
        resultGenres.push(genres[y].name);
      }
    }
  }
  return resultGenres;
};

export const createCardMovie = function (data) {
  if (movies.result.length === 0) {
    data.map((element) => {
      const genre = checkGenre(element.genre_ids);
      const setArray = [...new Set(genre)];
      movies.result.push({
        id: element.id,
        title: element.original_title,
        genre: setArray,
        vote: element.vote_average,
        img: `${PATHIMG}${element.poster_path}`,

      });
    });
  } else if (movies.result.length !== 0) {
    movies.result = Array();
    data.map((element) => {
      const genre = checkGenre(element.genre_ids);
      const setArray = [...new Set(genre)];
      movies.result.push({
        id: element.id,
        title: element.original_title,
        genre: setArray,
        vote: element.vote_average,
        img: `${PATHIMG}${element.poster_path}`,
      });
    });
  }
  return movies;
};

export const createDetailPage = function (data) {
  const [{ genres }] = data;
  const genreArr = [];
  genres.map((el) => genreArr.push(el.name));

  if (detail.result.length === 0) {
    data.map((element) => {
      detail.result.push({
        title: element.original_title,
        overview: element.overview,
        genre: genreArr,
        vote: element.vote_average,
        budget: element.budget,
        release: element.release_date,
        runtime: element.runtime,
        tagline: element.tagline,
        img: `${PATHIMG}${element.poster_path}`,
      });
    });
  } else if (detail.result.length !== 0) {
    detail.result = Array();
    const genreArr = [];
    genres.map((el) => genreArr.push(el.name));
    data.map((element) => {
      detail.result.push({
        title: element.original_title,
        overview: element.overview,
        tagline: element.tagline,
        genre: genreArr,
        vote: element.vote_average,
        budget: element.budget,
        release: element.release_date,
        runtime: element.runtime,
        img: `${PATHIMG}${element.poster_path}`,
      });
    });
  }

  return detail;
};

//CreateCast
export const createCardCast = function (data) {
  if (detail.cast.length === 0) {
    data.map((element) => {
      detail.cast.push({
        name: element.name,
        character: element.character,
        img: `${PATHIMG}${element.profile_path}`,
      });
    });
  } else if (detail.cast.length !== 0) {
    const end = detail.cast.length;
    detail.cast = Array();
    data.map((element) => {
      detail.cast.push({
        name: element.name,
        character: element.character,
        img: `${PATHIMG}${element.profile_path}`,
      });
    });
  }
  return detail.cast;
};

//CreateCardMovie
export const requestApi = async function (
  url = `https://api.themoviedb.org/3/movie/popular`,
  page = 1
) {
  movies.url = url;
  movies.page = page;
  try {
    //const result = await AJAXGET(`https://api.themoviedb.org/3/movie/550?api_key=2396744cd6c0cfc5c078a5b15e8f47b1`);
    const result = await AJAXGET(
      `${url}?api_key=${APIKEY}&language=en-US&page=${page}`
    );

    console.log("RESULT CHIAMA API PAGINA", result.total_pages);
      movies.totalPage = result.total_pages
    const data = createCardMovie(result.results);

    //Ritornare numero di pagine totali

    return data;
  } catch (err) {
    console.log(err);
  }
};

//detailCard
export const requestDetail = async function (id) {
  const arr = [];
  let arrPage = [];
  try {
    //Dettaglio film
    const result = await AJAXGET(`${APIGETDETAIL}${id}?api_key=${APIKEY}`);
    const { genres } = result;
    console.log("MODEL REQUESTDETAIL -> ", genres);

    arr.push(result);
    const detailPage = createDetailPage(arr);

    //Reccomentation
    const recommendiations = await AJAXGET(
      `${APIGETRECOMMENTATION}${id}/recommendations?api_key=${APIKEY}`
    );
    const detailListCard = createCardMovie(recommendiations.results);

    const castList = await AJAXGET(`${APICAST}${id}/credits?api_key=${APIKEY}`);
    createCardCast(castList.cast);

    arrPage = [detailPage, detailListCard];

    return arrPage;
  } catch (err) {
    console.log(err);
  }
};

//API Search JSON "total_pages":101,"total_results":2007 da considerare dopo
export const searcBar = async function (name) {
  try {
    const result = await AJAXGET(
      `${APISEARCH}?api_key=${APIKEY}&language=en-US&query=${name}&page=${1}&include_adult=false`
    );
    console.log(result);
    const data = createCardMovie(result.results);

    console.log("SEARCH RESULT -> ", data);

    return data;
  } catch (err) {
    console.log(err);
  }
  //https://api.themoviedb.org/3/search/movie?api_key=2396744cd6c0cfc5c078a5b15e8f47b1&language=en-US&query=american&page=1&include_adult=false
};