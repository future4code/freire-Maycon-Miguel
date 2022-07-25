import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToVoltar } from '../../routes/coordinator';



const PostPage = () => {

  const navigate = useNavigate()


  return (
    <div>
      <h1> PostPage </h1>
      <button onClick={() => goToVoltar(navigate)}>PostPage</button>
    </div>
  );
}


export default PostPage;