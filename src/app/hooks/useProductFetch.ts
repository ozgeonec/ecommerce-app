import {useEffect} from 'react';
import {IProduct} from "../lib/Types/index";
import {getProducts} from "../lib/data/index";

const useProductFetch = (
    {
        setProducts,
        setVisibleProducts,
        setDisplayCount,
        setIsLoading,
        products,
        displayCount,
    }: {
        setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
        setVisibleProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
        setDisplayCount: React.Dispatch<React.SetStateAction<number>>;
        setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
        products: IProduct[];
        displayCount: number;
    }
) => {
    const loadMore = async () => {
        setIsLoading(true);
        setDisplayCount((prevDisplayCount) => prevDisplayCount + 3);

        try {
            const productsData = await getProducts();
            setProducts((prevProducts) => {
                const newVisibleProducts = [...prevProducts, ...productsData.slice(displayCount, displayCount + 3)];
                setVisibleProducts(newVisibleProducts);
                return prevProducts;
            });
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setIsLoading(false);
        }
    };

// eslint-disable-next-line react-hooks/exhaustive-deps
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

        return () => {
        };
    }, [setIsLoading, setProducts, setVisibleProducts, displayCount, products.length]);

    return {
        loadMore,
    };
};

export default useProductFetch;
