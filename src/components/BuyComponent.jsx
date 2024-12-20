import { useContext, useEffect } from 'react';
import Checkout from './Checkout'
import OrderDetails from './OrderDetails'
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const BuyComponent = () => {

    const shopCon = useContext(ShopContext);
    const navigate = useNavigate(null);
    const {
        cartItems,
        checkoutItems
    } = shopCon;

    useEffect(() => {
        if (cartItems.length === 0 && !checkoutItems) {
            navigate('/');
        }
    }, [])


    if (cartItems.length > 0 || checkoutItems) {
        return (
            <section className='padding'>
                <div className='flex lg:w-full xl:flex-row flex-col'>
                    <Checkout />
                    <OrderDetails />
                </div>
            </section>
        )
    }
}

export default BuyComponent