const quotes = [
    {quote: "So much universe, and so little time", author: "Terry Pratchett",},
    {quote: "Somewhere, something incredible is waiting to be known", author: "Sharon Begley",},
    {quote: "You are the universe experiencing itself", author: "Alan Watts",},
    {quote: "The Moon is the first miilestone on the road to the stars", author: "Arthur C. Clarke",},
    {quote: "The dinosaurs became extinct because they didn't have a space program", author: "Larry Niven",},
    {quote: "Across the sea of space, the stars are other suns", author: "Carl Sagan",},
    {quote: "Not only is the universe stranger than we imagine, it is stranger than we can imagine", author: "Arthur Stanley Eddington",},
    {quote: "All civilizations become either spacefaring or extinct", author: "Carl Sagan",},
    {quote: "Earth is a small town with many neighborhoods in a very big universe", author: "Ron Garan",},
    {quote: "If you wish to make an apple pie from scratch, you must first invent the universe", author: "Carl Sagan"}];

const words = document.querySelector("#words");
const person = document.querySelector("#person");
const chosenQuote = quotes[Math.floor(Math.random()*quotes.length)];

words.innerText = chosenQuote.quote;
person.innerText = "- "+chosenQuote.author+" -";