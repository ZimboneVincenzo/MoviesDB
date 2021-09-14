"use strict";

const timeOut = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Tempo richiesta scaduto"));
    }, s * 1000);
  });
};

export const AJAXGET = async function (url) {
  try {
    const api = fetch(url);
    const response = await Promise.race([api, timeOut(5)]);
 

    const data = response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const IMGGET = async function (url) {
  try {
    const api = fetch(url);
    const response = await Promise.race([api, timeOut(5)]);

  } catch (err) {
    console.log(err);
  }
};
