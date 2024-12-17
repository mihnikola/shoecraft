import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import CartTotal from '../components/CartTotal';
import CartList from '../components/CartList';
import { LABEL_CART } from '../constants';

const Cart = () => {
  const shopCon = useContext(ShopContext);
  const {
    cartItems
  } = shopCon;

  return (
    <section className='padding'>

      {cartItems.length > 0 && (
        <div className='pt-10 w-full xl:flex xl:flex-row md:flex-col '>
          {cartItems.length > 0 && (
            <div className='flex p-5 xl:flex-row  flex-col gap-10 '>
              <CartList items={cartItems} />
            </div>
          )}
          
          {cartItems.length > 0 && (
            <div className="space-y-4  w-full">
              <CartTotal />
            </div>
          )}
        </div>
      )}
      {cartItems.length === 0 && (
            <div className='flex flex-col items-center justify-center p-20'>
              <p className="text-center text-2xl font-montserrat font-semibold">{LABEL_CART.EMPTY_CART}</p>
            </div>
          )}

    </section>
  );
};

export default Cart;
