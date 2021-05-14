/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * An array of "quote" objects.
 * @property {string} quote -  A line of text or speech.
 * @property {string} source -  Who produced the quote.  
 * @property {string} citation -  Where the quote was written/spoken.
 * @property {number} year -  The year the quote was produced.
 * @property {string} tag -  The category associated with the quote.
***/
const quotes = [
  {
    quote: "Education is an admirable thing, but it is well to remember from time to time that nothing that is worth knowing can be taught."
    ,
    source: "Oscar Wilde",
    citation: "A Few Maxims for the Instruction of the Over-Educated",
    year: 1894,
    tag: "Education"
  },
  {
    quote: "Art is the only serious thing in the world. And the artist is the only person who is never serious.",
    source: "Oscar Wilde",
    citation: "A Few Maxims for the Instruction of the Over-Educated",
    year: 1894,
    tag: "Art"
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    source: "Oscar Wilde",
    citation: "The Nihilists",
    year: 1883,
    tag: "Experience"
  },
  {
    quote: "Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation.",
    source: "Oscar Wilde",
    citation: "De Profundis",
    year: 1897,
    tag: "People"
  },
  {
    quote: "It is absurd to divide people into good and bad. People are either charming or tedious.",
    source: "Oscar Wilde",
    citation: "Lady Windermere's Fan",
    year: 1892,
    tag: "People"
  },
  {
    quote: "Life imitates art far more than art imitates Life.",
    source: "Oscar Wilde",
    citation: "The Decay of Lying",
    year: 1889,
    tag: "Life"
  },
  {
    quote: "Anybody can make history. Only a great man can write it.",
    source: "Oscar Wilde",
    citation: "The Critic as Artist",
    year: 1891,
    tag: "History"
  },
  {
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    source: "Oscar Wilde",
    citation: "The Soul of Man Under Socialism",
    year: 1891,
    tag: "Life"
  },
  {
    quote: "Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.",
    source: "Oscar Wilde",
    citation: "The Critic as Artist",
    year: 1891,
    tag: "Truth"
  },
  {
    quote: "One should always be a little improbable.",
    source: "Oscar Wilde",
    citation: "Phrases and Philosophies for the Use of the Young",
    year: 1894,
    tag: "Self"
  }
];


/***
 * Randomly selects and returns a quote object from the quotes array.
***/
function getRandomQuote() {
  let randomNumber = (Math.floor(Math.random() * quotes.length - 1) + 1);
  return quotes[randomNumber];
};

/***
 * Returns an HTML string that contains specific formatting for 
 * the quote randomly selected by the getRandomQuote function.
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let htmlString = `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source} 
  `;
  if (randomQuote.citation) {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  };
  if (randomQuote.year) {
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  };
  if (randomQuote.tag) {
    htmlString += `<br><br><p><strong>Tags:</strong> ${randomQuote.tag}</p>`;
  };
  htmlString += `</p>`;
  return htmlString;
};

/***
 * Returns a randomized color in the rgb() syntax.
 * Note: Each number in the rgb() synax only goes up to 250 
 * to prevent too light of a background for viewing the quote.
***/
function randomizeColor() {
  let red = Math.floor(Math.random() * 250);
  let green = Math.floor(Math.random() * 250);
  let blue = Math.floor(Math.random() * 250);
  let backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  return backgroundColor;
};

/***
 * This setInterval function contains the following commands to repeat every 10 seconds:
 * 1. Add the printQuote function return to the HTML ID "quote-box".
 * 2. Randomize the color of the page background.
 ***/
setInterval(function() {
  document.getElementById('quote-box').innerHTML = printQuote();
  document.body.style.background = randomizeColor();
}, 10000); 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);