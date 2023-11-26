import { useState, MouseEvent } from 'react';

interface IUseProductHover {
    isHovered: boolean;
    handleMouseEnter: (event: MouseEvent) => void;
    handleMouseLeave: (event: MouseEvent) => void;
}

const useProductHover = (): IUseProductHover => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleMouseEnter = (event: MouseEvent) => {
        setIsHovered(true);
    };

    const handleMouseLeave = (event: MouseEvent) => {
        setIsHovered(false);
    };

    return {
        isHovered,
        handleMouseEnter,
        handleMouseLeave,
    };
};

export default useProductHover;
