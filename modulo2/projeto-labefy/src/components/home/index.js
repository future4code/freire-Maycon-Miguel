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
        playlist: []
    }

    componentDidMount(){
        this.pegarUsuario()
    }

    pegarUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "maycon-coutinho-freire"
            }
        })
        .then((res) => {
    
            this.setState({playlist: res.data.result.list})}) 

        .catch((err) => {alert("Ocorreu um erro na lista")}) 
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "maycon-coutinho-freire"
            }})
            
        .then((res) => {
            alert("Playlist deletada com sucesso!")
            this.pegarUsuario()
        
        }) 
        .catch((err) => {alert("Ocorreu um erro na lista")}) 
    }


    render() {
        const listaPlaylist = this.state.playlist.map((user) => {
            return (
            
            <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarPlaylist(user.id)}> X </button>
            </CardUsuario>)
        })

        return (
            <div >
                <div><button onClick={this.props.irParaCadastro}> Criar Playlist </button></div>
                <h1> Tela Principal </h1>
                {listaPlaylist}
                <hr></hr>
                <div>
                    <h4>Procurar Playlist</h4>
                    <input
                        type="text"
                        id="buscar-nome"
                        name="buscar-nome"
                        placeholder="Nome exato para buscar"
                    ></input>
                    <button>
                        buscar
                    </button>
                </div>
            </div>
        )
    }
}

