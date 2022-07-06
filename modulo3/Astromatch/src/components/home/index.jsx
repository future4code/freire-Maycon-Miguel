import styled from "styled-components";
import Card from "../Card";

const Menu = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  

.menuPrincipal{
    background-color: whitesmoke;
    width: 420px;
    height: 600px;
    border: 2px solid black;
    border-radius: 10px;
}

.titulo {
    color: violet;
    text-align: center;
}

`
function Home() {
    return (
      <Menu >
        <div className="menuPrincipal">

            <h1 className="titulo"> astro-match</h1>
            <Card></Card>
            
        </div>
      </Menu>
    );
  }
  
  export default Home;