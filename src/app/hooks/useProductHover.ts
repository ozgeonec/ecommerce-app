'use client'
import React, {useState, MouseEvent} from 'react';

interface IUseProductHover {
    isHovered: boolean;
    handleMouseEnter: (event: MouseEvent) => void;
    handleMouseLeave: (event: MouseEvent) => void;
}

export default function useProductHover () {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleMouseEnter = (event: MouseEvent) => {
        setIsHovered(true);
    };

    const handleMouseLeave = (event: MouseEvent) => {
        setIsHovered(false);
    };

    return<IUseProductHover> {
        isHovered,
        handleMouseEnter,
        handleMouseLeave,
    };
};

