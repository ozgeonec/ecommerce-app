'use client'
import React from "react";
import {Wrapper, UpperSection, Container, LoadingIndicator, SearchWrapper} from './layout.styles';
import Product from "../ui/homepage/product/Product";
import useProductData from "../hooks/useProductData";
import Title from "../ui/homepage/title/Title";
import CartModal from "../ui/shoppingCart/cartModal/CartModal";
import SearchBar from "../ui/homepage/searchbar/SearchBar";

interface Props {

}

const Layout: React.FC<Props> = () => {

    const {visibleProducts, loadMore, isLoading, handleSearch} = useProductData();

    return (
        <Wrapper>
            <UpperSection>
                <Title/>
                <CartModal/>
            </UpperSection>
            <SearchWrapper>
                <SearchBar onSearch={handleSearch}/>
            </SearchWrapper>
            <Container>
                {visibleProducts.map((product) => (
                    <Product key={product.id} product={product}/>
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