const quotes = [
    {
        quote: "They must often change who would be constant in happiness or wisdom. ",
        author: "Confucius",
    },{
        quote:"Age is no guarantee of maturity.",
        author:"Lawana Blackwell",
    },{
        quote:"Youth isn’t always all it’s touted to be.",
        author:"Lawana Blackwell",
    },{
        quote:"You will face many defeats in life, but never let yourself be defeated.",
        author:"Maya Angelou",
    },{
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"Nelson Mandela",
    },{
        quote:"Life is either a daring adventure or nothing at all",
        author:"Helen Keller",
    },{
        quote:"This too shall pass.",
        author:"Et hoc transibit",
    },{
        quote:"Only I can change me life, no one can do it for me. ",
        author:"Carol Burnett",
    },{
        quote:"Life is unfair, get used to it.",
        author:"Bill Gates",
    },{
        quote:"All you need in this life is ignorance and confidence, then success is sure.",
        author:"Mark Twain",
    },{
        quote:"Life is a mountain. Your goal is to find your path, not to reach the top.",
        author:"Maxime Lagacé",
    },{
        quote:"Despite the forecast, live like it’s spring. ",
        author:"Lilly Pulitzer",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomFloat = Math.random()*quotes.length;
const randomQuoteIndex = Math.floor(randomFloat);

/*
console.log(quotes[randomQuoteIndex]);
console.log(quotes.length);
*/

quote.innerText = quotes[randomQuoteIndex].quote;
author.innerText = quotes[randomQuoteIndex].author;
