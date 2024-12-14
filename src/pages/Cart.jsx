import { IconTrash } from '@tabler/icons-react';
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const shopCon = useContext(ShopContext);
  const {
    cartItems,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
  } = shopCon;

  return (
    <section className='padding'>
      {cartItems.length > 0 && (
        <div className='flex gap-12 p-10 w-full'>
          <div className="space-y-4 w-3/4">
            <div className='flex flex-col items-start justify-start'>
              <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
              <div className="grid grid-flow-col w-full border-b">
                <span className="col-span-2">Image</span>
                <span className="col-span-4">Name</span>
                <span className="col-span-2">Price</span>
                <span className="col-span-2">Size</span>
                <span className="col-span-2">Amount</span>
              </div>
            </div>
            {
              cartItems.map(item => (
                <div key={item.id} className="flex  flex-col items-start justify-around border-b pb-4 ">

                  <div className="grid grid-flow-col items-center w-full ">
                    <img key={item.image.id} src={item.image.name} alt={item.name} width={100} height={60} />
                    <span className="col-span-1">{item.name}</span>
                    <span className="col-span-2">${item.price}</span>
                    <span className="col-span-2">{item.selectedSize}</span>
                    <div className="flex items-center col-span-1">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 mr-2"
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 ml-2"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-600 hover:text-red-800"
                      >
                        <IconTrash stroke={2} />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
          </div>
          {cartItems.length > 0 && (
            <div className="space-y-4 w-3/4">
              <CartTotal />
            </div>
          )}
        </div>
      )}
      {cartItems.length === 0 && (
        <div className='flex flex-col items-center justify-center p-20'>
          <p className=" text-center text-2xl font-montserrat font-semibold">Your cart is empty!</p>
        </div>
      )}
    </section>
  );
};

export default Cart;
