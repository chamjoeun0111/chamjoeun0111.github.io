const quotes = [
    {
        quote: "Our greatest weakness lies in giving up.",
        author: "Bill Gates",
    },
    {
        quote: "Doing nothing because of risk is the biggest risk.",
        author: "John F Kennedy",
    },
    {
        quote: "An optimist sees an opportunity in every difficulty.",
        author: "Winston Churchill",
    },
    {
        quote: "Fear cannot exist without hope, and hope cannot exist without fear.",
        author: "Baruch Spinoza",
    },
    {
        quote: "The danger comes from not knowing what you are doing.",
        author: "Warren Buffett",
    },
]

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const quotesPicked = quotes[Math.floor(Math.random() * quotes.length)];
const quotePicked = quotesPicked.quote;
const authorPicked = quotesPicked.author;    

quote.innerText = quotePicked;
author.innerText = authorPicked;