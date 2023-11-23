'use client'
import Title from "../ui/homepage/title/Title";
import CartDetails from "../ui/shoppingCart/cartDetails/CartDetails";
import {CartPageWrapper, WrapperDetails} from "./layout.styles";

const Layout: React.FC = () => {
    return (
        <CartPageWrapper>
            <WrapperDetails>
                <Title/>
            </WrapperDetails>
            <WrapperDetails>
                <CartDetails/>
            </WrapperDetails>
        </CartPageWrapper>
    );
}

export default Layout;