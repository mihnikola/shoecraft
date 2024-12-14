import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const CartTotal = () => {
    const navigate = useNavigate(null);
   
    const shopCon = useContext(ShopContext);
    const {
        cartItems,
        calculateTotal
    } = shopCon;


    const checkCheckout = () => {
        if (cartItems.length > 0) {
          navigate('/checkout');
        }
      }
    return (
        <>
            {cartItems.length > 0 &&
                <>
                    <h3 className="text-xl font-semibold mb-8">Cart Totals</h3>
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
                            <p className=" text-xl">${calculateTotal()}</p>
                        </div>
                        <div className='flex w-full justify-center pt-20'>
                            <button
                                type="submit"
                                className="w-full bg-coral-red text-white py-2 rounded-md hover:bg-red-600"
                                onClick={checkCheckout}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default CartTotal;
