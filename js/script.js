/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Education is an admirable thing, but it is well to remember from time to time that nothing that is worth knowing can be taught."
    ,
    source: "Oscar Wilde",
    citation: "A Few Maxims for the Instruction of the Over-Educated",
    year: 1894,
    tags: "Education"
  },
  {
    quote: "Art is the only serious thing in the world. And the artist is the only person who is never serious.",
    source: "Oscar Wilde",
    citation: "A Few Maxims for the Instruction of the Over-Educated",
    year: 1894,
    tags: "Art"
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    source: "Oscar Wilde",
    citation: "The Nihilists",
    year: 1883,
    tags: "Experience"
  },
  {
    quote: "Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation.",
    source: "Oscar Wilde",
    citation: "De Profundis",
    year: 1897,
    tags: "People"
  },
  {
    quote: "It is absurd to divide people into good and bad. People are either charming or tedious.",
    source: "Oscar Wilde",
    citation: "Lady Windermere's Fan",
    year: 1892,
    tags: "People"
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = (Math.floor(Math.random() * quotes.length - 1) + 1);
  return quotes[randomNumber];
};

/***
 * `printQuote` function
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
  htmlString += `</p>`;
  return htmlString;
};

document.getElementById('quote-box').innerHTML = printQuote(); 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);