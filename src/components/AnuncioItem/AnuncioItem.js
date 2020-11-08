import axios from 'axios';
import React from 'react';
import './AnuncioItem.css'
import DetalheItem from '../DetalheItem/DetalheItem'

class AnuncioItem extends React.Component{
    state = {
        listaProdutos: [],
        telaDetalheProduto: [],
        chamarDetalheItem:false
    }

    mudaParaDetalheProduto = (produtoId) => {        
        this.setState({chamarDetalheItem:!this.state.chamarDetalheItem})           
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products/${produtoId}`)
        .then((res) => { 
            this.setState({ telaDetalheProduto:res.data})                        
        })
        .catch((erro) => {
            console.log(erro.message)                        
        })             
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
                        <img className='imagemProduto' src={produto.photos[0]} alt='produto' onClick={()=>{this.mudaParaDetalheProduto(produto.id)}}/>
                        <div className='fundo'> 
                            <p className='precoProduto'>R$ {produto.price}</p>                        
                        </div>                        
                    </div>                    
                )
            }
        })
        const chamarComponenteDetalheItem = ()=>{
            if (this.state.chamarDetalheItem){
                return (
                    <DetalheItem
                       itemSelecionado={this.state.telaDetalheProduto} />
                )
            }else{
                return (
                    <div className='divContainerImagemPreco'>
                        {renderizarImgPreco}    
                    </div>  
                )
            }
        }               
        return(
            <div >
                {chamarComponenteDetalheItem()}                                                                
            </div>                                        
        )
    }
}
export default AnuncioItem