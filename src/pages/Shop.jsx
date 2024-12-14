import { useState } from "react";
import ShopCard from "../components/ShopCard"
import { products } from "../constants"
import FilterComponent from "../components/FilterComponent";



const Shop = () => {
    const [filters, setFilters] = useState({
        size: '',
        color: '',
        priceRange: [0, 500],
    });

    // Filter shoes based on selected filters
    const filteredShoes = products.filter((shoe) => {
        return (
            (shoe.sizes.find((item) => item.value == filters.size)) ||
            (shoe.color == filters.color) ||
            shoe.price <= filters.priceRange[1]
        );
    });

    return (
        <section className='padding'>
            <div className="container flex w-full gap-10 md:flex-row flex-col mt-10">
                <div className=" md:min-w-[320px] w-full mt-10">
                    <FilterComponent onFilterChange={setFilters} filters={filters} />
                </div>
                <div className='mt-7 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 sm:gap-2 max-[320px]:text-center '>
                    {filteredShoes.length > 0  && filteredShoes.map((product) => (
                        <ShopCard key={product.name} {...product} />
                    ))}
                    {filteredShoes.length === 0 && products.map((product) => (
                        <ShopCard key={product.name} {...product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Shop