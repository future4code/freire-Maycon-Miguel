import './index.css';


function Button() {

    const imagemDefundo = "https://img2.gratispng.com/20180406/ave/kisspng-computer-icons-download-symbol-send-email-button-5ac73cf6920777.8280686115230067105982.jpg"

    return(
        <div className='button'>
            <input 
            type="text" 
            className= 'usuario'
            placeholder="Usuário" 
        
            ></input>
        
            <input 
            type="text"
            className= 'mensagem'
            placeholder="Mensagem" 
        
            ></input>

            <button className='enviar' onClick={() => alert("mensagem enviada")}><img src= {imagemDefundo} ></img></button>
        </div>
    )

    

}

export default Button