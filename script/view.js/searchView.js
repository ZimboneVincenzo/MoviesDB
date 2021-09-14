'use strict'

const parentElement = document.querySelector('.form-search');
const input = document.querySelector('.form-control')
//const btn = document.querySelector('.btn-search')

export const searchMovie = function(handler){
    input.addEventListener('input', function(e){
     
        e.preventDefault();
        //const movie = [...new FormData(input.value)]
        const movie = input.value;

        if(!movie) return;

        console.log(movie);
        handler(movie);
    }
)
}
   