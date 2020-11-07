import axios from 'axios';
import React from 'react';
import DetalheItem from '../DetalheItem/DetalheItem';
import './AnuncioItem.css'


class AnuncioItem extends React.Component{
    state = {
        listaProdutos: [],
        telaDetalheProduto: []
    }

    mudaParaDetalheProduto = () => {
        this.setState({telaDetalheProduto: <DetalheItem /> })
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

    // console.log(res)

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
                <DetalheItem />
=======
         </div>                                        
        )
    }
}

export default AnuncioItem