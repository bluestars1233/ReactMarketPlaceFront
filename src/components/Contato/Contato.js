import React from 'react';
import "../Contato/Contato.css";

class Contato extends React.Component{
    render(){
        return(
        <div className="containerContato">
            <div className="areaFeedback">
                <h2>Deixe seu feedback</h2>
                <p>Nome</p>
                <input type="text" className="inputNome" ></input>
                <p>Deixe sua mensagem</p>
                <input type="text" className="inputMensagem"></input>
                <br></br>
                <button>Enviar</button>
                
            </div>

            <div className="areaContatos">
                <h2>Contato</h2>
                <p>Telefone: (11) 99999-8877</p>
                <p>E-mail: 4used@gmail.com</p>

            </div>

        </div>
                
        )
    }
}

export default Contato