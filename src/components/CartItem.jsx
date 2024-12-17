import { IconTrash } from '@tabler/icons-react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';


const CartItem = ({ data }) => {

    const { id, image, name, price, selectedSize, quantity } = data;
    const shopCon = useContext(ShopContext);
    const {
        decreaseQuantity,
        increaseQuantity,
        removeFromCart,
    } = shopCon;
    return (
        <div className='flex md:gap-[40px] gap-[45px] pt-2 w-full'>
            <img key={image.id} src={image.name} alt={name} width={100} height={60} className='md:min-w-[80px] min-w-[55px]' />
            <span className="sm:p-10 min-w-[150px]">{name}</span>
            <span className="sm:p-10">${price}</span>
            <span className="sm:p-10 pl-10">{selectedSize}</span>
            <div className="flex items-center">
                <button
                    onClick={() => decreaseQuantity(id)}
                    className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 mr-2"
                >
                    -
                </button>
                <span className="px-3">{quantity}</span>
                <button
                    onClick={() => increaseQuantity(id)}
                    className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 ml-2"
                >
                    +
                </button>
                <button
                    onClick={() => removeFromCart(id)}
                    className="ml-4 text-red-600 hover:text-red-800"
                >
                    <IconTrash stroke={2} />
                </button>
            </div>
        </div>

    )
}

export default CartItem