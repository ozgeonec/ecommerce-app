'use client'
import React from "react";
import {
    CartWrapper,
    ModalTitle,
    ModalImg,
    ModalText,
    Line,
    InnerModal,
    ModalDetails,
    RemoveButton,
    ModalBottom,
    ModalBottomInner
} from './CartDetails.styles'
import {useShoppingCart} from "../../../../context/cart.context";

interface Props {

}

const CartDetails: React.FC<Props> = ({}) => {

    const {cart, removeFromCart, getCartTotal} = useShoppingCart();

    let cartTotalPrice = getCartTotal();

    return (
        <CartWrapper>
            <ModalTitle>Your Cart</ModalTitle>
            {cart.map((item) => {
                return (
                    <InnerModal key={item.product.id}>
                        <ModalDetails>
                            <ModalImg src={item.product.image} alt={item.product.name}/>
                            <ModalText>
                                <h4>{item.product.name}</h4>
                                <p>Quantity: {item.quantity}</p>
                                <p>${item.product.price} x{item.quantity} </p>
                            </ModalText>
                        </ModalDetails>
                        <RemoveButton onClick={() => removeFromCart(item.product.id)}>Remove</RemoveButton>
                        <Line></Line>
                    </InnerModal>
                );
            })}
            <ModalBottom>
                <ModalBottomInner>
                    <p>Subtotal: </p>
                    <p>${cartTotalPrice}</p>
                </ModalBottomInner>
                <ModalBottomInner>
                    <p>Shipping: </p>
                    <span>Calculated at the last step</span>
                </ModalBottomInner>
                <Line></Line>
                <ModalBottomInner>
                    <p>Total</p>
                    <p>${cartTotalPrice}</p>
                </ModalBottomInner>
            </ModalBottom>
        </CartWrapper>
    );
}


export default CartDetails;