import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToVoltar } from "../../routes/coordinator";
import { Container, Titulo, InputTexto, Button } from "./styled";
import { Login } from "../../hooks/Axios";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Container>
      <Titulo>
        <h1> LoginPage </h1>
      </Titulo>
      <InputTexto>
        <input
          type={"email"}
          placeholder="E-mail"
          value={email}
          onChange={onChangeEmail}
        ></input>
      </InputTexto>
      <InputTexto>
        <input
          type={"password"}
          placeholder="Senha"
          value={password}
          onChange={onChangePassword}
        ></input>
      </InputTexto>

      <Button>
        <button onClick={() => goToVoltar(navigate)}> voltar </button>
        <button onClick={() => Login(email, password)}> Entrar </button>
      </Button>
    </Container>
  );
};

export default LoginPage;
