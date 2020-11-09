import React from 'react'
import './Carrinho.css'
class Carrinho extends React.Component{
    state={
        precoTotalCompra:0,
        quantidade:0,
        listaCarrinho:[
            {
                id:this.props.idProduto,
                nome:this.props.nomeProduto,
                preco:this.props.precoProduto,
                quantidade:1
            }
        ]
    }
    onChangeQuantidadeItem = (event)=>{
        this.setState({quantidade:event.target.value})
    }    
    valorTotalCompra = ()=>{
        let valorTotal = 0
        for (let produto of this.state.listaCarrinho){
            valorTotal += produto.preco * produto.quantidade
        }
        return valorTotal
    }
    render(){
        const produtosCarrinho = this.state.listaCarrinho.map((produtos)=>{
            return (
                <div className='detalheFinalizarCompra'>
                        <p>{produtos.quantidade} X </p>
                        <p>{produtos.nome}</p>
                        <button className='botaoRemover'>X</button>
                    </div>
            )
        })
        return(
            <div id='containerCarrinho'>                
                    <div className='detalheItemCarrinho'>
                        <img className='imagemProdutoCarrinho' src={this.props.fotoProduto}/>
                        <p>{this.props.nomeProduto}</p>
                        <input type='Number' value={this.state.quantidade} onChange={this.onChangeQuantidadeItem}></input>
                        <p>R${(this.props.precoProduto*this.state.quantidade).toFixed(2)}</p>
                        <button className='botaoEnviarContato'>Adicionar</button>
                    </div>                                                                            
                <div className='itensCarrinho'>                        
                    <h1>Carrinho de Compras</h1>
                    {produtosCarrinho}      
                    <p>Valor Total: R${this.valorTotalCompra()}</p>              
                    <button className='botaoEnviarContato'>Finalizar</button>
                </div>             
            </div>
        )
    }
}

export default Carrinho