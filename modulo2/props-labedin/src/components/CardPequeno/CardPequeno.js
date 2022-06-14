import React from 'react';
import './CardGrande.css'

function CardGrande(props) {
    return (
        <div className="Contatos">
            <img src={ props.imagem } />
            <div>
                <p>{ props.email }</p>
            </div>
        </div>
        
    )
}

export default CardGrande;