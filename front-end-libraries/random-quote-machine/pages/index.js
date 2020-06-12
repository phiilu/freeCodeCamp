

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import quotes from '../util/quotes.json';

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'indigo',
  'purple',
  'pink'
];

const year = new Date().getFullYear();

const Button = ({as, color, children, ...props}) => {
  const Element = {as};
  return (
    <Element.as {...props} className={`px-6 py-4 font-bold text-center text-${color}-700 uppercase transition-colors duration-1000 bg-${color}-200 rounded-lg shadow-xl hover:bg-${color}-500 hover:text-${color}-100 hover:duration-200`}>
    {children}
  </Element.as>
  )
}
Button.defaultProps = {
  color: 'teal',
  as: 'button'
}

export default function IndexPage() {
  const pathname = useRouter().pathname;
  const [quote, setQuote] = useState({ text: '', author: '' })
  const [color, setColor] = useState('teal')

  const handleRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length - 1) + 1;
    const colorsIndex = Math.floor(Math.random() * colors.length - 1) + 1;
    const randomQuote = quotes[index];
    const randomColor = colors[colorsIndex]; 

    console.log(colorsIndex, randomColor)

    setQuote(randomQuote);
    setColor(randomColor);
  }

  useEffect(() => {
    handleRandomQuote();
  }, [])

  return (
    <div className={`flex px-6 items-center justify-center w-screen h-screen bg-${color}-100 transition-colors duration-1000 ease-in-out`}>
      <Head>
        <title>Random Quote Machine - FCC</title>
      </Head>
      <main id="quote-box" className="w-full max-w-3xl space-y-4">
        <div className={`p-4 md:p-8 bg-${color}-500 rounded-md shadow-xl transition-colors duration-1000 ease-in-out`}>
          <blockquote className='relative flex flex-col justify-between space-y-4' style={{minHeight: '200px'}}>
            <p id="text" className={`relative mt-0 z-10 text-2xl text-${color}-900 font-montserrat transition-colors duration-1000 ease-in-out`} >{quote.text}</p>
            <footer id="author" className={`relative z-10 text-2xl text-right text-${color}-700 font-pacifico transition-colors duration-1000 ease-in-out`}>
              {quote.author || 'Unknown'}
            </footer>
            <svg className={`opacity-25 absolute right-0 z-0 w-32 h-32 text-${color}-200 fill-current quote-svg transition-colors duration-1000 ease-in-out`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" /></svg>

          </blockquote>
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
          <Button as='a' color='blue' target="_blank" rel="nofollow noopener" id="tweet-quote" href={`//twitter.com/intent/tweet?text=${quote.text} - ${quote.author || 'Unknown'}&url=${pathname}&via=phiilu&hashtags=quote,fcc,freeCodeCamp,${quote.author ? quote.author.replace(/\w/i, '') : ''}`}>Tweet Quote</Button>
          <Button onClick={handleRandomQuote} color={color} id="new-quote">
            New Quote
          </Button>
        </div>
      </main>
      <footer className={`absolute py-4 font-semibold text-center text-${color}-900 bg-${color}-200 copyright transition-colors duration-1000 ease-in-out`}>
        &copy; {year} Florian Kapfenberger (@phiilu)
      </footer>
    </div>
  )
}
