import React from 'react';
import './index.css';
import axios from "axios"

export default class Cadastro extends React.Component {

    state = {
        name: "",
        email: ""
    }

    handleNome = (event) => {
        this.setState({name: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        const body = {
            name: this.state.name,
            email: this.state.email
        }

        axios.post(url,body, {
            headers: {
                Authorization: "maycon-coutinho-freire"
                }
            }
        ).then((res) => {
            alert("Usuario(a) cadastrado(a) com sucesso")
            this.setState({name:"", email:""})
        }).catch((err) => {
            alert(err.response.data.message)
        })

    }

    render() {
        return(
            <div >
                <div><button onClick={this.props.irParaHome}> Ir para Home </button></div>
                <h1>Funcionando 3</h1>
                <div>
                    <input
                        placeholder="nome" 
                        value={this.state.name}
                        onChange={this.handleNome}
                        type="text" 

                   
                    ></input><input
                        placeholder="email" 
                        value={this.state.email}
                        onChange={this.handleEmail}
                        type="text" 
   

                    ></input>
                    <button onClick={this.fazerCadastro}>
                        Criar Usuario
                    </button>

                </div>
            </div>  
        )
    }
}
  
