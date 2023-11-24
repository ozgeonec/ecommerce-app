'use client'
import React from "react";
import {Wrapper, UpperSection, Container, LoadingIndicator, SearchWrapper, LoadButton} from './layout.styles';
import Product from "../ui/homepage/product/Product";
import Title from "../ui/homepage/title/Title";
import CartModal from "../ui/shoppingCart/cartModal/CartModal";
import SearchBar from "../ui/homepage/searchbar/SearchBar";
import useHomepage from "../hooks/useHomepage";

interface Props {

}

const Layout: React.FC<Props> = () => {

    const {products, visibleProducts, loadMore, isLoading, handleSearch} = useHomepage();


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
                    <Product key={product.id + product.name} product={product}/>
                ))}
            </Container>
            {isLoading && <LoadingIndicator>Loading...</LoadingIndicator>}
            {!isLoading && visibleProducts.length < products.length && (
                <LoadButton onClick={() => loadMore()}>Load All</LoadButton>
            )}

        </Wrapper>
    );
};

export default Layout;