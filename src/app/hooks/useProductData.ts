import {useCallback, useEffect, useState} from 'react';
import {getProducts} from '../lib/data/index';
import {IProduct} from '../lib/Types/index';

interface UseProductDataProps {
    products: IProduct[];
    visibleProducts: IProduct[];
    displayCount: number;
    isLoading: boolean;
    loadMore: () => void;
    handleSearch: (query: string) => void;
}

const useProductData = (): UseProductDataProps => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [visibleProducts, setVisibleProducts] = useState<IProduct[]>([]);
    const [displayCount, setDisplayCount] = useState(6);
    const [isLoading, setIsLoading] = useState(false);


    const loadMore = () => {
        setIsLoading(true);
        const newDisplayCount = displayCount + 3;
        const newVisibleProducts = [...visibleProducts, ...products.slice(displayCount, newDisplayCount)];
        setVisibleProducts(newVisibleProducts);
        setDisplayCount(newDisplayCount);
        setIsLoading(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const productsData = await getProducts();
                setProducts(productsData);
                setVisibleProducts(products.slice(0, displayCount));
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();

        const handleScroll = () => {
            if (
                (window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 100) &&
                (displayCount < products.length) && !isLoading
            ) {
                loadMore();
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [displayCount, isLoading, products.length]);


    const handleSearch = (query: string) => {
        if (query.trim() === '') {
            setVisibleProducts(products.slice(0, displayCount));
        } else {
            const filtered = visibleProducts.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setVisibleProducts(filtered);
        }
    };

    return {
        products,
        visibleProducts,
        displayCount,
        isLoading,
        loadMore,
        handleSearch
    };
};

export default useProductData;
