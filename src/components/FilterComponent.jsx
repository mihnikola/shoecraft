// src/components/Filters.js
import { useState } from 'react';
import { COLOR_LABEL, colorsValue, FILTER_LABEL, PRICE_LABEL, SIZE_LABEL, sizesValue } from '../constants';

const FilterComponent = ({ onFilterChange, filters }) => {
    const [openSection, setOpenSection] = useState({ SIZE: false, COLOR: false, PRICE: false }); // Manage open/close of sections

    const toggleSection = (section) => {
        setOpenSection({ ...openSection, [section]: !openSection[section] });
    };
    // Set the color filter
    const handleColorChange = (color) => {
        let newFilters = {};
        onFilterChange((prevFilters) => {
            if (prevFilters.color === color) {
                newFilters = { ...prevFilters, color: "" };
            } else {
                newFilters = { ...prevFilters, color };
            }
            onFilterChange(newFilters);
            return newFilters;
        });
    };

    const handleSizeChange = (size) => {
        let newFilters = {};
        onFilterChange((prevFilters) => {
            if (prevFilters.size === size) {
                newFilters = { ...prevFilters, size: "" };
            } else {
                newFilters = { ...prevFilters, size };
            }
            onFilterChange(newFilters);
            return newFilters;
        });
    }

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">{FILTER_LABEL}</h2>

            <div className="space-y-4">
                {/* Size Filter */}
                <div>
                    <button
                        onClick={() => toggleSection(SIZE_LABEL)}
                        className="w-full text-left flex justify-between items-center p-2 border-b border-gray-300 font-bold text-gray-700"
                    >
                        {SIZE_LABEL}
                        <span>{openSection.SIZE ? '-' : '+'}</span>
                    </button>
                    {openSection.SIZE && (
                        <div className="flex gap-4 mt-2 flex-wrap">
                            {sizesValue.map(item =>
                            (<span key={item.id} className={`w-8 h-8 rounded-xl cursor-pointer text-center border-2  ${filters.size === item.value ? 'bg-orange-500 text-white' : 'bg-white'} border-black`} onClick={() => handleSizeChange(item.value)}
                            >
                                {item.value}
                            </span>)
                            )}
                        </div>
                    )}
                </div>

                {/* Color Filter */}
                <div>
                    <button
                        onClick={() => toggleSection(COLOR_LABEL)}
                        className="w-full text-left flex justify-between items-center p-2 border-b border-gray-300 font-bold text-gray-700"
                    >
                        {COLOR_LABEL}
                        <span>{openSection.COLOR ? '-' : '+'}</span>
                    </button>
                    {openSection.COLOR && (
                        <div className="flex gap-4 mt-2 flex-wrap">
                            {colorsValue.map((item) =>
                                <div
                                    key={item.id}
                                    className={`w-8 h-8 rounded-full cursor-pointer border-2  `}
                                    style={{ backgroundColor: item.value }}
                                    onClick={() => handleColorChange(item.value)}
                                >
                                    {filters.color === item.value && <i>&#10004;</i>}
                                </div>)}
                        </div>
                    )}
                </div>

                {/* Price Range Filter */}
                <div>
                    <button
                        onClick={() => toggleSection(PRICE_LABEL)}
                        className="w-full text-left flex justify-between items-center p-2 border-b border-gray-300 font-bold text-gray-700"
                    >
                        {PRICE_LABEL}
                        <span>{openSection.PRICE ? '-' : '+'}</span>
                    </button>
                    {openSection.PRICE && (
                        <div>
                            <input
                                type="range"
                                min="0"
                                max="500"
                                step="10"
                                name="priceRange"
                                value={filters.price}
                                onChange={(e) =>
                                    onFilterChange((prevFilters) => {
                                        const newRange = [0, e.target.value];
                                        onFilterChange({ ...prevFilters, priceRange: newRange });
                                        return { ...prevFilters, priceRange: newRange };
                                    })
                                }
                                className="w-full mt-2"
                            />
                            <p className="mt-2 text-sm text-gray-600">Up to ${filters.priceRange[1]}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FilterComponent;
