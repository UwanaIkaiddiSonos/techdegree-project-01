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
  },
  {
    quote: "Life imitates art far more than art imitates Life.",
    source: "Oscar Wilde",
    citation: "The Decay of Lying",
    year: 1889,
    tags: "Life"
  },
  {
    quote: "Anybody can make history. Only a great man can write it.",
    source: "Oscar Wilde",
    citation: "The Critic as Artist",
    year: 1891,
    tags: "History"
  },
  {
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    source: "Oscar Wilde",
    citation: "The Soul of Man Under Socialism",
    year: 1891,
    tags: "Life"
  },
  {
    quote: "Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.",
    source: "Oscar Wilde",
    citation: "The Critic as Artist",
    year: 1891,
    tags: "Truth"
  },
  {
    quote: "One should always be a little improbable.",
    source: "Oscar Wilde",
    citation: "Phrases and Philosophies for the Use of the Young",
    year: 1894,
    tags: "Self"
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
  if (randomQuote.tags) {
    htmlString += `<br><br><p><strong>Tags:</strong> ${randomQuote.tags}</p>`;
  };
  htmlString += `</p>`;
  return htmlString;
};

/***
 * `randomizeColor` function
***/
function randomizeColor() {
  let red = Math.floor(Math.random() * 250);
  let green = Math.floor(Math.random() * 250);
  let blue = Math.floor(Math.random() * 250);
  let backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  return backgroundColor;
};


setInterval(function() {
  document.getElementById('quote-box').innerHTML = printQuote();
  document.body.style.background = randomizeColor();
}, 10000); 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);