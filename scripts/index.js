import quotes from "./quotes.js"
let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
document.getElementsByClassName('quote-text')[0].innerHTML = randomQuote['quote']
document.getElementsByClassName('quote-author')[0].innerHTML = randomQuote.author

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    document.getElementsByClassName('container-box')[0].innerHTML = `
     <div class="quote-box">
      <div class="box">
         <p class="quote-text">${randomQuote.quote}</p>
         <p class="quote-author">${randomQuote.author}</p>
      </div>
     </div>
    `
})