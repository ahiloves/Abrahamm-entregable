import React from 'react'; // Agregado import de React para componentes de función
import './styles/QuoteBox.css';

const QuoteBox = ({ quote, handleChangeQuote }) => {
    const { phrase, author } = quote; // Corregido el nombre de la propiedad author
    return (
        <article className="quotebox"> 
            <h1 className="quotebox_title">INFOGALAX</h1>
            <div className="quotebox_box">
                <p>{phrase}</p>
            </div>
            <button className="quotebox_btn" onClick={handleChangeQuote}>
                <img src="/boton.svg" alt="" />
            </button> {/* Agregado onClick para el botón */}
           
            <span className="quotebox_author">{author}</span> {/* Corregido el nombre de la propiedad author */}
        </article>
    );
};

export default QuoteBox;