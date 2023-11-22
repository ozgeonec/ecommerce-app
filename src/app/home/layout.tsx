'use client'
import React from "react";
import {Wrapper,UpperSection, Container, LoadingIndicator} from './layout.styles';
import Product from "../ui/homepage/product/Product";
import useProductData from "../hooks/useProductData";
import {useShoppingCart} from "../../context/cart.context";
import Title from "../ui/homepage/title/Title";
import CartModal from "../ui/homepage/cartModal/CartModal";


const Layout: React.FC = () => {

    const {visibleProducts, loadMore, isLoading} = useProductData();
    const {cart, addToCart, removeFromCart, getCartTotal, getQuantity} = useShoppingCart();

    return (
        <Wrapper>
            <UpperSection>
                <Title/>
                <CartModal/>
            </UpperSection>
            <Container>
                {visibleProducts.map((product) => (
                    <Product key={product.id} children={product} addToCart={() => addToCart(product)}/>
                ))}
            </Container>
            {isLoading && <LoadingIndicator>Loading...</LoadingIndicator>}
            {!isLoading && visibleProducts.length < visibleProducts.length && (
                <button onClick={loadMore}>Load More</button>
            )}
        </Wrapper>
    );
};

export default Layout;