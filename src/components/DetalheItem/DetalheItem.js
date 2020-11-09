import React from 'react'
import './DetalheItem.css'
import Carrinho from '../Carrinho/Carrinho'

class DetalheItem extends React.Component {    
    state={
        chamarCarrinho: false
    }

    onClickChamarCarrinho = ()=>{
        this.setState({chamarCarrinho:!this.state.chamarCarrinho})
    }

    render() {      
        const trocarComponente = ()=>{
            if (this.state.chamarCarrinho){
                return (
                    <Carrinho
                        fotoProduto={this.props.itemSelecionado.photos}
                        nomeProduto={this.props.itemSelecionado.name}
                        precoProduto={this.props.itemSelecionado.price}
                        idProduto={this.props.itemSelecionado.id}
                    />
                )
            }else{
                return (
                    <div id='containerDetalheItem'>
                        <div id='divImagemDescricaoProduto'>
                            <div>
                                <img className='imagemProdutoDetalhe' src={this.props.itemSelecionado.photos} alt='produto'></img>
                            </div>
                            <div>                        
                                <p>{this.props.itemSelecionado.description}</p>
                            </div>
                        </div>    
                        <div id='divNomePrecoParcelaProduto'>
                            <div>
                                <h1>{this.props.itemSelecionado.name}</h1>                        
                            </div>
                            <div>
                                <p>R${this.props.itemSelecionado.price}</p>
                            </div>
                            <div>
                                <p>{this.props.itemSelecionado.installments}x{(this.props.itemSelecionado.price/this.props.itemSelecionado.installments).toFixed(2)} sem juros</p>
                            </div>
                            <div>
                                <button className='botaoEnviarContato' onClick={this.onClickChamarCarrinho}>Eu quero</button>
                            </div>
                        </div>     
                    </div>
                )
            }
        }                             
        return (
            <div>   
                {trocarComponente()}                                    
            </div>
        )
    }
}
export default DetalheItem