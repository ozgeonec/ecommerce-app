'use client'
import React, { useState } from "react";
import {SearchBarWrapper} from "./SearchBar.styles";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = event.target.value;
        setSearchQuery(newQuery);
        onSearch(newQuery);
    };

    return (
        <SearchBarWrapper>
            Search:
            <input
                type="text"
                placeholder="product name"
                value={searchQuery}
                onChange={handleSearch}
            />
        </SearchBarWrapper>
    );
};

export default SearchBar;
