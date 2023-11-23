import {useEffect, useState} from 'react';
import {getProducts} from '../lib/data/index';
import {IProduct} from '../lib/Types/index';

interface UseProductDataProps {
    products: IProduct[];
    visibleProducts: IProduct[];
    displayCount: number;
    isLoading: boolean;
    updateVisibleProducts: (count: number) => void;
    loadMore: () => void;
    handleSearch: (query: string) => void;
}

const useProductData = (): UseProductDataProps => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [visibleProducts, setVisibleProducts] = useState<IProduct[]>([]);
    const [displayCount, setDisplayCount] = useState(6);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const productsData = await getProducts();
                setProducts(productsData);
                updateVisibleProducts(displayCount);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();

        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.body.scrollHeight - 100 &&
                displayCount < products.length &&
                !isLoading
            ) {
                loadMore();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [displayCount, isLoading]);

    const updateVisibleProducts = (count: number) => {
        setVisibleProducts(products.slice(0, count));
    };

    const loadMore = () => {
        setIsLoading(true);
        const newDisplayCount = displayCount + 3;
        const newVisibleProducts = [...visibleProducts, ...products.slice(displayCount, newDisplayCount)];
        setVisibleProducts(newVisibleProducts);
        setDisplayCount(newDisplayCount);
        setIsLoading(false);
    };


    const handleSearch = (query: string) => {
        if (query.trim() === '') {
            updateVisibleProducts(displayCount);
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
        updateVisibleProducts,
        loadMore,
        handleSearch
    };
};

export default useProductData;
