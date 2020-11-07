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
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products').then((res) => { 
        this.setState({ listaProdutos: res.data.products})
        }).catch((erro) => {
            console.log(erro.message)
        })
    }
    
    render(){
        const renderizarImgPreco = this.state.listaProdutos.map((produto) => {
        return (
            <div className='container-img-preco'> 
                <img key={produto.id} src={produto.photos} onClick={this.mudaParaDetalheProduto} 
                />
                <p key={produto.id}>R$ {produto.price}</p>
            </div>
        )
        })

        return(
           <div>
                {renderizarImgPreco}                                   
         </div>                                        
        )
    }
}

export default AnuncioItem