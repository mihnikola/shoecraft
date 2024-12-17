import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CostComponent = () => {

    const shopCon = useContext(ShopContext);
    const {
        calculateCheckoutTotal,
        cartItems,
        calculateTotal,
    } = shopCon;


    return (
        <div className="flex pt-5 flex-col xl:w-4/4 xl:min-w-[500px]  w-full">
            <div className="flex flex-col justify-between items-center  gap-4">
                <div className='flex w-full justify-between border-b'>
                    <span className="text-lg font-medium">Shipping cost:</span>
                    <p className=" text-xl">$0</p>
                </div>
                <div className='flex w-full justify-between border-b'>
                    <span className="text-lg font-medium">Discount:</span>
                    <p className=" text-xl">$0</p>
                </div>
                <div className='flex w-full justify-between border-b'>
                    <span className="text-lg font-medium">Tax:</span>
                    <p className=" text-xl">$0</p>
                </div>
                <div className='flex w-full justify-between'>
                    <span className="text-xl font-medium">Estimated Total:</span>
                    <p className=" text-xl">${cartItems.length > 0 ? calculateTotal() : calculateCheckoutTotal()} </p>
                </div>
            </div>
        </div>
    )
}

export default CostComponent