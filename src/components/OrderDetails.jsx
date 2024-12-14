import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const OrderDetails = () => {
    const shopCon = useContext(ShopContext);
    const {
        calculateCheckoutTotal,
        calculateTotal
    } = shopCon;
    return (
        <div className="flex p-20 flex-col w-2/4">
            <h3 className="text-xl font-semibold mb-8">Your Order</h3>
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
                    <p className=" text-xl">${calculateCheckoutTotal() || calculateTotal()} </p>
                </div>

            </div>
        </div>
    )
}

export default OrderDetails