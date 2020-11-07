import React from 'react'
import './CadastroItem.css'
import axios from 'axios'

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products'

class CadastroItem extends React.Component{
    state={
        inputNome:'',
        inputDescricao:'',
        inputPreco:0,
        inputCategoria:'',
        inputParcelas:0,                
        inputImagem:[],
        inputImagem1:'',
        inputImagem2:'',
        inputImagem3:'',
        inputImagem4:'',
        inputPagamento:''
    }

    onChangeInputNome = (event)=>{
        this.setState({inputNome:event.target.value})
    }
    onChangeInputDescricao = (event)=>{
        this.setState({inputDescricao:event.target.value})
    }
    onChangeInputPreco = (event)=>{
        this.setState({inputPreco:Number(event.target.value)})
    }
    onChangeInputCategoria = (event)=>{
        this.setState({inputCategoria:event.target.value})
    }
    onChangeInputParcelas = (event)=>{
        this.setState({inputParcelas:Number(event.target.value)})
    }
    onChangeInputImagem1 = (event)=>{
        this.setState({inputImagem1:event.target.value})
    }
    onChangeInputImagem2 = (event)=>{
        this.setState({inputImagem2:event.target.value})
    }
    onChangeInputImagem3 = (event)=>{
        this.setState({inputImagem3:event.target.value})
    }
    onChangeInputImagem4 = (event)=>{
        this.setState({inputImagem4:event.target.value})
    }
    onChangeInputPagamento = (event)=>{
        this.setState({inputPagamento:event.target.value})
    }
    
    criarProduto = ()=>{
        const listaImagens = []
        listaImagens.push(this.state.inputImagem1,this.state.inputImagem2,this.state.inputImagem3,this.state.inputImagem4)

        const body = {
            name:this.state.inputNome,
            description:this.state.inputDescricao,
            price:this.state.inputPreco,
            paymentMethod:this.state.inputPagamento,
            category:this.state.inputCategoria,
            photos:listaImagens,
            installments:this.state.inputParcelas
        }
        axios.post(url,body)
        .then(()=>{
            alert('Produto Cadastrado Com Sucesso !')
            this.setState({
                inputNome:'',
                inputDescricao:'',
                inputPreco:0,
                inputCategoria:'',
                inputParcelas:0,
                inputImagem:[],
                inputImagem1:'',
                inputImagem2:'',
                inputImagem3:'',
                inputImagem4:'',
                inputPagamento:''})
        })
        .catch(()=>{                        
            alert('Erro - Verifique se os campos estão corretos !')
        })
    }
    
    render(){
        return(
            <div>
                <div id='DivInputCadastro'>
                    
                    <div className='flexNomeDescricao'>
                        <label>Nome do Produto</label>
                        <input className='inputNomeDescricao'
                        placeholder='Nome Produto' value={this.state.inputNome} onChange={this.onChangeInputNome}></input>

                        <label>Descrição do Produto</label>
                        <input className='inputNomeDescricao'
                        placeholder='Descrição' value={this.state.inputDescricao} onChange={this.onChangeInputDescricao} >
                        </input>
                    </div>

                    <div className='flexPagamentoPreco'>
                        <div className='flexLabelPagamentoPreco'>
                            <label>Forma de Pagamento</label>
                            <label className='margemLabelPreco'>Preço</label>
                        </div>   
                        <div>
                            <input className='inputDadosProduto'
                            placeholder='Formas de Pagamento' value={this.state.inputPagamento} onChange={this.onChangeInputPagamento}>                        
                            </input>
                            <input className='inputDadosProduto'
                            placeholder='Preço' type='number' value={this.state.inputPreco} onChange={this.onChangeInputPreco}>                        
                            </input>
                        </div>                                             
                    </div>
                    
                    <div className='flexPagamentoPreco'>
                        <div className='flexLabelPagamentoPreco'>
                            <label>Categoria</label>
                            <label className='margemLabelParcela'>Parcelas</label>
                        </div>
                        <div>
                            <input className='inputDadosProduto'
                            placeholder='Categoria' value={this.state.inputCategoria} onChange={this.onChangeInputCategoria}>                        
                            </input>

                            <input className='inputDadosProduto'
                            placeholder='Número de Parcelas' type='number' value={this.state.inputParcelas} onChange={this.onChangeInputParcelas}>                        
                        </input>
                        </div>
                        
                    </div>

                    <div id='divInputImagens'>
                        <div className='margemTituloImagens'>
                            <h2>Insira as imagens dos produtos</h2>
                        </div>
                        <div>
                            <input className='inputDadosProduto'
                            placeholder='URL Imagem 1' value={this.state.inputImagem1} onChange={this.onChangeInputImagem1}>                        
                            </input>

                            <input className='inputDadosProduto'
                            placeholder='URL Imagem 2' value={this.state.inputImagem2} onChange={this.onChangeInputImagem2}>                        
                            </input>
                        </div>
                        
                        <div>
                            <input className='inputDadosProduto'
                            placeholder='URL Imagem 3' value={this.state.inputImagem3} onChange={this.onChangeInputImagem3}>                        
                            </input>

                            <input className='inputDadosProduto'
                            placeholder='URL Imagem 4' value={this.state.inputImagem4} onChange={this.onChangeInputImagem4}>                        
                            </input>
                        </div>                        
                    </div>                                       
                </div>
                <div id='DivButtonCadastro'>
                    <button className='botaoEnviar' onClick={this.criarProduto}>Enviar</button>
                </div>                
                
            </div>
        )
    }
}

export default CadastroItem