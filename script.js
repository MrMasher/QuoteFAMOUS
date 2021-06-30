const quotes = [
    {
    name: '~Abdul Kalam',
    quote: 'All Birds find shelter during a rain. But Eagle avoids rain by flying above the Clouds. Problems are common, but attitude makes the difference.'
    },
    {
    name:'~Aristotle',
    quote:'It is during our darkest moments when we have to focus to see the light.'
    },
    {
    name:'~Abraham Lincoln',
    quote:'People are as happy as they transform their minds to be.'
    },
    {
    name:'~Machiavelli',
    quote:'Everyone sees what you appear to be, few experiences what you really are.'
    },
    {
    name:'~Socrates',
    quote:'People without value live only to eat and drink, people worthwhile eat and drink only to live.'
    },
    {
    name:'~Pythagoras',
    quote:'Friends are like traveling companions, who should help each other to persevere on the path to a happier life-Pythagoras.'
    },
    
    {
    name:'~Heraclitus',
    quote:'Our envy always lasts longer than the happiness of the one we envy.'
    },
    {
    name:'~Plutarch',
    quote:'The source and root of honesty and virtue lie in good education.'
    },
    {
    name:'~Mohandas Karamchand Gandhi',
    quote:'The weak can never forget. Oblivion is the attribute of strong.'
    },
    {
    name:'~Fyodor Dostoevsky',
    quote:'Too much unhappiness has entered the world due to perplexity and things that are not said.'
    }
    ]

    const quoteBtn = document.querySelector('#quoteBtn');
    const quoteAuthor = document.querySelector('#quoteAuthor');
    const  quote = document.querySelector('#quote');
    
    quoteBtn.addEventListener('click', displayQuote);
    
    function displayQuote (){
    
    let number = Math.floor(Math.random()*quotes.length);
    console.log(number)
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
    
    }





