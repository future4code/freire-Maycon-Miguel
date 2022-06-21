import React from 'react';
import './index.css';


class Home extends React.Component {

    render() {

        return(
            <div >
                <h1>Funcionando 3</h1>
                <div>
                    <h4>Procurar usuário</h4>
                    <input
                        type="text" 
                        id="buscar-nome" 
                        name="buscar-nome"
                        placeholder="Nome exato para buscar" 
                    ></input>
                    <button>
                        Salvar edição
                    </button>

                </div>
            </div>
        )
    }
}
  
export default Home;