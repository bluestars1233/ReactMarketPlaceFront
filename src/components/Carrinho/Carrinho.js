import React from 'react'

export class Carrinho extends React.Component {
    getTotalValue = () => {
        let totalValue = 0

        for (let product of this.props.productsInCart) {
            totalValue += product.price * product.quantity
        };

        return totalValue
    }
    render() {
        return <CarrinhoContainer>
            <h3>Carrinho:</h3>
            <CartListContainer>
                {this.props.productsInCart.map((product) => {
                    return <CarrinhoItem
                                cartItem={product}
                                onRemoveProductFromCart={this.props.onRemoveProductFromCart}
                    />
                })}
            </CartListContainer>
            <p>Valor total: R${this.getTotalValue()},00</p>
        </CarrinhoContainer>
    }
}