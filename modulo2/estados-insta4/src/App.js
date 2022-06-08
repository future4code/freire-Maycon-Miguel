import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
                <Post
          nomeUsuario={'Marcos'}
          fotoUsuario={'https://i.picsum.photos/id/629/50/50.jpg?hmac=PAUzQIWAKuSuHPbLLEJ05-kliJzDGTh3IG9P9qFpf3A'}
          fotoPost={'https://i.picsum.photos/id/1049/200/150.jpg?hmac=EcdgRtL-SaTQt3E_jiNxZA3Hf2T9avEGydQuM_HBi00'}
        />
                <Post
          nomeUsuario={'Felipe'}
          fotoUsuario={'https://i.picsum.photos/id/62/50/50.jpg?hmac=VPT6ghn_iVAjURPUUOg2IqysxTJevPMQSb4O889Y8YU'}
          fotoPost={'https://i.picsum.photos/id/431/200/150.jpg?hmac=uvA5H_AyyZa5mwnjsjpKbBcHpclWWz-KB0EnJIX85xY'}
        />
      </MainContainer>
      
    );
  }
}

export default App;
