import CartHeader from './CartHeader'
import CartItem from './CartItem'

const CartList = ({ items }) => {
    return (
            <div className='sm:overflow-x-hidden overflow-x-scroll sm:max-w-full'>
                <CartHeader />
                {items.map(item => (
                    <CartItem key={item.id} data={item} />
                ))}
            </div>
        
    )
}

export default CartList