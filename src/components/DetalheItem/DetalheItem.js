import React from 'react'
import './DetalheItem.css'
export class DetalheItem extends React.Component {    
    render() {                                   
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
                        <button>Eu quero</button>
                    </div>
                </div>                                         
            </div>
        )
    }
}
export default DetalheItem