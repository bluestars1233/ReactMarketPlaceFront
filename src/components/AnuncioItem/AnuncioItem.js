import axios from 'axios';
import React from 'react';
import './AnuncioItem.css'


class AnuncioItem extends React.Component{
    state = {
        listaProdutos: [],
        telaDetalheProduto: []
    }

    mudaParaDetalheProduto = () => {        
        console.log('to clicando aqui')
    }

    componentDidMount = () => {
        this.pegarImgPreco()
    }

    pegarImgPreco = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products')
        .then((res) => { 
        this.setState({ listaProdutos: res.data.products})
        })
        .catch((erro) => {
            console.log(erro.message)
        })
    }
    
    render(){
        const renderizarImgPreco = this.state.listaProdutos.map((produto) => {
            if(produto.category==='4used'){
                return (
                    <div key={produto.id}>                                                             
                        <img className='imagemProduto' src={produto.photos[0]} alt='produto' onClick={this.mudaParaDetalheProduto}/>
                        <div className='fundo'> 
                            <p className='precoProduto'>R$ {produto.price}</p>                        
                        </div>                        
                    </div>
                    
                )
            }
        })

        return(
            <div className='divContainerImagemPreco'>
                {renderizarImgPreco}                                   
            </div>                                        
        )
    }
}

export default AnuncioItem