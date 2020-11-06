import React from 'react'

export class DetalheItem extends React.Component {
    render() {
        const product = this.props.product
        return <CardContainer>
            <img src={product.photo} />
            <CardInfo>
                <p>{product.name}</p>
                <p>R${product.price},00</p>
                <AddToCardButton
                    onClick={() => this.props.onAddProductToCart(product.id)}>
                    Adicionar ao carrinho
                </AddToCardButton>
            </CardInfo>
        </CardContainer >

    }
}