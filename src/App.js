import React from 'react'
import HomePage from './components/HomePage/HomePage'
import QuemSomos from './components/QuemSomos/QuemSomos'
import Contato from './components/Contato/Contato'
import './index.css'
import logoCabecalho from './img/logo-cabecalho.png'
import iconeFacebook from './img/icon-facebook.svg'
import iconeInstagram from './img/icon-instagram.svg'
import iconeLinkedin from './img/icon-linkedin.svg'


class App extends React.Component {	
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
	
	render(){		
		const trocarComponente = ()=>{
			switch (this.state.chamarComponente){
				case '0':
					return <HomePage/>
				case '1':
					return <QuemSomos/>											
				case '2':
					return <Contato/>				
			}											
		}
		return (
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

export default App
