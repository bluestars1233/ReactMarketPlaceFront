import React from 'react';
import "./Contato.css";

class Contato extends React.Component{
    render(){
        return(
        <div className="containerContato">
            <div className="areaFeedback">
                <h2 className='subTituloContatos'>Deixe seu feedback</h2>
                <p className='paragrafoAreas'>Nome</p>
                <input type="text" className="inputNome" ></input>
                <p className='paragrafoAreas'>Deixe sua mensagem</p>
                <input type="text" className="inputMensagem"></input>
                <br></br>
                <button>Enviar</button>
                
            </div>

            <div className="areaContatos">
                <h2 className='subTituloContatos'>Contato</h2>
                <p className='paragrafoAreas'>Telefone: (11) 99999-8877</p>
                <p className='paragrafoAreas'>E-mail: 4used@gmail.com</p>
            </div>

        </div>
                
        )
    }
}

export default Contato