import './index.css';
import Perguntas from '../perguntas';

function Etapa2(){

    return(

        <div className="formulario2">
            <h1>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <div className="perguntas">
                <Perguntas pergunta="5. Qual é seu curso? "></Perguntas>
                <Perguntas pergunta="6. Qual é sua unidade de ensino? "></Perguntas>
            </div>
        </div>
    )
}

export default Etapa2