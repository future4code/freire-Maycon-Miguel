import React from 'react';
import './index.css';
import axios from "axios";
import styled from 'styled-components';

const CardUsuario = styled.div`
    bord: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    
`

export default class Home extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount(){
        this.pegarUsuario()
    }

    pegarUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "maycon-coutinho-freire"
            }
        })
        .then((res) => {
            
            this.setState({usuarios: res.data})}) 

        .catch((err) => {alert("Ocorreu um erro na lista")}) 
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "maycon-coutinho-freire"
            }
        })
        .then((res) => {
            alert("Usuario deletado com sucesso!")
            this.pegarUsuario()
        
        }) 

        .catch((err) => {alert("Ocorreu um erro na lista")}) 
    }


    render() {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
            
            <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}> X </button>
            </CardUsuario>)
        })

        return (
            <div >
                <div><button onClick={this.props.irParaCadastro}> Ir para Cadastro </button></div>
                <h1> Tela Principal </h1>
                {listaUsuarios}
                <hr></hr>
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

