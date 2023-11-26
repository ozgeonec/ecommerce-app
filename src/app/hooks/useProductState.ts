import {useState} from 'react';
import {IProduct} from '../lib/Types/index';

interface ProductState {
    products: IProduct[];
    visibleProducts: IProduct[];
    displayCount: number;
    isLoading: boolean;
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
    setVisibleProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
    setDisplayCount: React.Dispatch<React.SetStateAction<number>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const useProductState = (): ProductState => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [visibleProducts, setVisibleProducts] = useState<IProduct[]>([]);
    const [displayCount, setDisplayCount] = useState(6);
    const [isLoading, setIsLoading] = useState(false);

    return <ProductState>{
        products,
        visibleProducts,
        displayCount,
        isLoading,
        setProducts,
        setVisibleProducts,
        setDisplayCount,
        setIsLoading,
    };
};

export default useProductState;
