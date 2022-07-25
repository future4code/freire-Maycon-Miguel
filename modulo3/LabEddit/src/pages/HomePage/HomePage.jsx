import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCadastroPage, goToFeedPage, goToLoginPage, goToPostPage } from "../../routes/coordinator";



  const HomePage = () => {

  const navigate = useNavigate();


  return (
 
    <div>
      <h1> Home </h1> 
      <button onClick={() => goToCadastroPage(navigate)}> Cadastro </button>
      <button onClick={() => goToFeedPage(navigate)}> Feed </button>
      <button onClick={() => goToLoginPage(navigate)}> Login </button>
      <button onClick={() => goToPostPage(navigate)}> Post </button>
    </div>

  );
};

export default HomePage;
