import React from 'react';
import './FilterHeader.css';

interface FilterOption {
    label: string;
    value: string;
}

interface Filter {
    label: string;
    options: FilterOption[];
    value: string;
    onChange: (value: string) => void;
}

interface FilterHeaderProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    filters: Filter[];
    onReset: () => void;
    searchPlaceholder?: string;
}

const FilterHeader: React.FC<FilterHeaderProps> = ({
    searchTerm,
    onSearchChange,
    filters,
    onReset,
    searchPlaceholder = "Search..."
}) => {
    return (
        <div className="filter-header">
            <div className="filter-header__search-container">
                <div className="filter-header__search-icon">
                    <img src="/icons/search-normal.png" alt="search" />
                </div>
                <input
                    type="text"
                    className="filter-header__search-input"
                    placeholder={searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>

            <div className="filter-header__controls">
                <div className="filter-header__filter-group">
                    <div className="filter-header__filter-icon-box">
                        <img src="/icons/Vector(Stroke).png" alt="filter" />
                    </div>
                </div>
                <div className="filter-header__filter-label-box">
                    <span className="filter-header__filter-label">Filter By</span>
                </div>

                {filters.map((filter, index) => (
                    <div key={index} className="filter-header__dropdown-container">
                        <select
                            className="filter-header__dropdown"
                            value={filter.value}
                            onChange={(e) => filter.onChange(e.target.value)}
                        >
                            <option value="">{filter.label}</option>
                            {filter.options.map((option, optIndex) => (
                                <option key={optIndex} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <div className="filter-header__dropdown-icon">
                            <img src="/icons/down-arrow.png" alt="down" />
                        </div>
                    </div>
                ))}

                <button className="filter-header__reset" onClick={onReset}>
                    <div className="filter-header__reset-icon">
                        <img src="/icons/reset.png" alt="reset" />
                    </div>
                    <span className="filter-header__reset-text">Reset Filter</span>
                </button>
            </div>
        </div>
    );
};

export default FilterHeader;
