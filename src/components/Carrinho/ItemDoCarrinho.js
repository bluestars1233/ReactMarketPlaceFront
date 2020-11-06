import React from 'react';
import styled from 'styled-components';

export class ShoppingCartItem extends React.Component {
    render() {
        return <ItemContainer>
            <p>{this.props.cartItem.quantity}x</p>
            <p>{this.props.cartItem.name}</p>
            <button
                onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}
            >
                Remover
            </button>
        </ItemContainer>
    }
}