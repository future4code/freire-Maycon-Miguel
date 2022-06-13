import './index.css';

function PerguntasSelecionadas(props){

    return(
        <div>
            <p> 4. Qual é sua escolaridade</p>
            <select>
                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
            </select>
        </div>
    )

}

export default PerguntasSelecionadas
 