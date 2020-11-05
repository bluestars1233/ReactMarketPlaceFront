import React from 'react'
import '../../index.css'
import CadastroItem from '../CadastroItem/CadastroItem'
import AnuncioItem from '../AnuncioItem/AnuncioItem'
import QuemSomos from '../QuemSomos/QuemSomos'
import Contato from '../Contato/Contato'
import logoCabecalho from '../../img/logo-cabecalho.png'
import iconeFacebook from '../../img/icon-facebook.svg'
import iconeInstagram from '../../img/icon-instagram.svg'
import iconeLinkedin from '../../img/icon-linkedin.svg'

class HomePage extends React.Component{
    state={
        chamarComponente:'0'
    }    
	onClickHomePage = ()=>{
		this.setState({chamarComponente:'0'})
	}
	onClickQuemSomos = ()=>{
		this.setState({chamarComponente:'1'})
	}
	onClickContato = ()=>{
		this.setState({chamarComponente:'2'})
	}
	onClickAnunciar = ()=>{
        this.setState({chamarComponente:'3'})        
    }
    onClickComprar = ()=>{
        this.setState({chamarComponente:'4'})        
    }    				
    render(){
        const trocarComponente = ()=>{
			switch (this.state.chamarComponente){
				case '0':
					return (
                        <div id="container">
                            <section>
                                <div>
                                    <h1><span className="tituloVerde">4</span>USED</h1>
                                </div>
                                <div>
                                    <h2>O que você busca ?</h2>    
                                </div>
                                <div>
                                    <button onClick={this.onClickAnunciar}>Anunciar</button>
                                    <button onClick={this.onClickComprar}>Comprar</button>
                                </div>                                                    
                            </section>
                        </div>
                    )
				case '1':
					return <QuemSomos/>											
				case '2':
                    return <Contato/>	
                case '3':
                    return <CadastroItem/>
                case '4':
                    return <AnuncioItem/>
			}											
		}       
        return(
            <div>
                <header>
					<div>
						<img className="imgLogoCabecalho" src={logoCabecalho}></img>
					</div>					
					<nav>
						<p onClick={this.onClickHomePage}>Home</p>
						<p onClick={this.onClickQuemSomos}>Quem somos</p>
						<p onClick={this.onClickContato}>Contato</p>
					</nav>
				</header>
                {trocarComponente()}
                <footer>
					<div>
						<p>Siga-nos nas redes</p>
					</div>
					<div>
						<a href="https://www.facebook.com/vinicius.moraes.5623293/"target="_blank"><img class="tamanho-icone" src={iconeFacebook} alt="Face"/></a>

						<a href="https://www.instagram.com/vinivetetos/" target="_blank"><img class="tamanho-icone" src={iconeInstagram} alt="Insta" /></a>

						<a href="" target="_blank"><img class="tamanho-icone" src={iconeLinkedin}alt="Linkedin"/></a>
					</div>
                    <div>
						4USED - Todos os direitos reservados - 2020
					</div>    
                </footer>            
            </div>
        )
    }
}
export default HomePage