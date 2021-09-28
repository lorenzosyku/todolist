import React, { useEffect, useState } from 'react';
import "./Quote.css";


function Quote() {

  const [quote, setQuote] = useState('');

  function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
  }

  useEffect(() => {
    const fetchQuotes = async() => 
      await fetch(`https://type.fit/api/quotes`)
    .then(res => res.json()).then((data) => {
      setQuote(data[generateRandomInteger(0,data.length)]);
    })

    fetchQuotes();
  }, [])

  return (
    <div className="insipiration__card">
      <h1>Do you need some motivation to start the day?  </h1>
      <div > 
        <h2>{`"${quote.text}"`}</h2>
        <h4>{quote.author}</h4>
      </div>
    </div>
  )
}

export default Quote
