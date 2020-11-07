import React from 'react'
import './quemSomos.css'

class QuemSomos extends React.Component{
    render(){
        return(
            <div id="tamanhoDiv">
                
                <div>
                    <h1 className='tituloQuemSomos'>Quem Somos</h1> 
                </div>

                <div>
                    <h2 className='subTituloProposito'>
                        Qual é o nosso propósito?
                    </h2>
                </div>

                <div>
                    <p className='paragrafoQuemSomos'>
                        O Site 4Used Old is Cool aborda temas ecológicos e ligados à sustentabilidade, como reciclagem e reutilização.
                        O site também está atento a formas de transportes mais inteligentes e sustentáveis, assim como ideias de casas modernas e racionais.
                        Nosso foco é tranformar o velho em novo, reutilizável e facilitar a vida de quem está preocupado com o nosso planeta. 
                    </p>
                </div>

            </div>
        )
    }
}
export default QuemSomos