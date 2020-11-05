import React from 'react'
import CadastroItem from '../CadastroItem/CadastroItem'
import AnuncioItem from '../AnuncioItem/AnuncioItem'
import '../../index.css'

class HomePage extends React.Component{
    state={
        chamarComponente:''
    }
    onClickAnunciar = ()=>{
        this.setState({chamarComponente:'anunciar'})        
    }
    onClickComprar = ()=>{
        this.setState({chamarComponente:'comprar'})        
    }
    render(){
        if(this.state.chamarComponente==='anunciar'){
            return <CadastroItem/>
        }else if(this.state.chamarComponente==='comprar'){
            return <AnuncioItem/>
        }
        return(
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
    }
}
export default HomePage