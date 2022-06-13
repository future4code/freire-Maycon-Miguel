import './index.css';
import Perguntas from '../perguntas';

function Etapa3(props) {

    return(
        <div>
            <h1>Etapa3 - INFORMAÇÕES GERAIS DE ENCINO</h1>
            <div className="perguntas">
                <Perguntas pergunta="5. Porque você não terminou um curso de graduação?"></Perguntas>
                <Perguntas pergunta="6. Você fez algum curso complementar?"></Perguntas>
            </div>
            <div className="perguntaSelecionada">
                <select>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Curso técnico">Curso técnico</option>
                    <option value="Curso de inglês">Curso de inglês</option>
                </select>
            </div>
        </div>
    )

}

export default Etapa3 