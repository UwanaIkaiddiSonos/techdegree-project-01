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
    quote: "quote",
    source: "source",
    citation: "citation",
    year: "year"
  },
  {
    quote: " ",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: " ",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: " ",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: " ",
    source: " ",
    citation: " ",
    year: " "
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = (Math.floor(Math.random() * quotes.length - 1) + 1);
  console.log(quotes[randomNumber]['quote']);
  return quotes[randomNumber]['quote'];
};

/***
 * `printQuote` function
***/


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);