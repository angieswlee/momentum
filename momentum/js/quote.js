const quoteArray = [
    {
        quote : "Connecting Dots",
        author : "Steve Jobs"
    },
    {
        quote : "Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.",
        author : "Steve Jobs"
    },
    {
        quote : "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs"
    },
    {
        quote : "We’re here to puts a dent in the universe. Otherwise why else even be here?",
        author : "Steve Jobs"
    },
    {
        quote : "Success generates more success, so be hungry for it.",
        author : "Steve Jobs"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");

function getByArray() {
    const randomQuote = Math.floor(Math.random() * quoteArray.length);
    quote.innerText = quoteArray[randomQuote].quote;
    author.innerText = quoteArray[randomQuote].author;
}

getByArray();
setInterval(getByArray, 5000);