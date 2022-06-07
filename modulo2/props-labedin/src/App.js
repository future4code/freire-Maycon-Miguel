import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Perfil from './img/perfil.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {Perfil}
          nome="Maycon Coutinho" 
          descricao="Desenvolvedor de software, Experiência e alguns projetos pequenos/intermediários com Python, Experiência com modelagem de dados e com os bancos de dados MySQL, SQLite, MongoDB e Redis. Atualmente estou estudando Desenvolvimento web full stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://img2.gratispng.com/20180203/die/kisspng-arrow-symbol-icon-down-arrow-png-pic-5a756e256c6bb0.6222022915176453494441.jpg" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://logospng.org/wp-content/uploads/nasa.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
