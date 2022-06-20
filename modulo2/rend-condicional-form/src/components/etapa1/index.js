import React from "react";
import './index.css';
import Perguntas from '../perguntas';
import PerguntasSelecionadas from '../../perguntasSelecionadas';
import Etapa2 from '../etapa2';

export default class index extends React.Component {

    render() {
    return(
        <div className="formulario1">
            <h2> Etapa1 Dados Gerais </h2>
            <div>
                <Perguntas pergunta = "1. Qual é seu nome?"></Perguntas>
                <Perguntas pergunta = "2. Qual é sua idade?"></Perguntas>
                <Perguntas pergunta = "3. Qual é seu email?"></Perguntas>
            </div>
            <div>
                <PerguntasSelecionadas></PerguntasSelecionadas>
            </div>            
        </div>
    )
    }
}

