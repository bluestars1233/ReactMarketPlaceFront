import axios from 'axios';
import React from 'react'

class AnuncioItem extends React.Component{
    state = {
        products: []
    }


    componentDidMount = () => {
        this.pegarImgPreco()
    }

    pegarImgPreco = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products').then((res) => {
        this.setState({ products: res.data})
        }).catch((erro) => {
            console.log(erro.message)
        })
    }


    render(){
        const renderizarImgPreco = this.state.products.map((produto) => {
        return (
            <div> 
            <p>{produto.photo}</p>
            <p>{produto.price}</p>
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