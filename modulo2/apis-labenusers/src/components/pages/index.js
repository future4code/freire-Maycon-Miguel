import React from 'react';
import './index.css';


class Pages extends React.Component {

    render() {

        return(
            <div >
                <h1>Funcionando 3</h1>
                <div>
                    <input
                        type="text" 
                        id="nome" 
                        name="nome"
                        placeholder="nome" 
                    ></input><input
                        type="text" 
                        id="email" 
                        name="email"
                        placeholder="email" 
                    ></input><button>
                        Criar Usuario
                    </button>

                </div>
            </div>  
        )
    }
}
  
export default Pages;