let Quote = document.getElementById('quote');

let Author = document.getElementById('author');
let genbutton = document.querySelector('#generate');
let quoteapi = "https://api.quotable.io/random";

genbutton.addEventListener('click' , () => {
fetch(quoteapi)
.then(response => response.json())
.then(data => {
    Quote.textContent = `" ${data.content} "`;
    Author.textContent = `- ${data.author}`;
})
.catch(error => {
    console.log('Error', error);
})
});
