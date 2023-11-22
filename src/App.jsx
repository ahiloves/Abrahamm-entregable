// Cuando tenemos importaciones que no usamos, usamos cmd + alt + o
// o ctrl alt para borrar todo
import { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox'; 
import quotes from "./db/quotes.json";
import { getRandomElement } from "./utils/random";

const bgs = ["bg1", "bg2", "bg3", "bg4"];

function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes));
  const [currentBg, setCurrentBg] = useState(getRandomElement(bgs));

  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes));
    setCurrentBg(getRandomElement(bgs));
  }

  return (
    <main className={`App ${currentBg}`}> {/* Utiliza la clase actual de fondo dinámico */}
      <QuoteBox quote={quote} handleChangeQuote={handleChangeQuote}/> {/* Corregido el nombre del componente */}
    </main>
  );
}

export default App; // Asegúrate de exportar el componente App para poder usarlo en otros archivos