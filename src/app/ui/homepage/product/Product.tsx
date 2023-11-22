import React from "react";
import {DefaultButton, Wrapper, BgImage, Description, BrandName} from './Product.styles.tsx';
import {IProduct} from "../../../lib/Types/index";
import useProductHover from "../../../hooks/useProductHover";


interface Props {
    children: IProduct
    addToCart: () => void
}

const Product: React.FC<Props> = ({children, addToCart}) => {

    const {isHovered, handleMouseEnter, handleMouseLeave} = useProductHover();

    return (
        <Wrapper
            key={children.id}
        >
            <BgImage
                style={{backgroundImage: `url(${children.image})`}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {isHovered && (
                    <Description>
                        <p>
                            {children.description}
                        </p>
                    </Description>
                )}
            </BgImage>
            <BrandName>{children.brand} - {children.name}</BrandName>
            <DefaultButton onClick={addToCart}>Add To Cart - ${children.price}</DefaultButton>
        </Wrapper>
    );
}

export default Product;