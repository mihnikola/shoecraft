import { useContext} from "react"
import { ShopContext } from "../context/ShopContext"

const ReviewComponent = () => {
    const { cartItems, checkoutItems } = useContext(ShopContext);
    const items = checkoutItems || cartItems;

    return (
        <div className="overflow-y-scroll max-h-[14rem] w-full ]">
            {typeof items === 'object' && !Array.isArray(items) && items !== null ?
                <div key={items.id} className="flex max-w-1/5 justify-start pb-2 min-w-[320px]">
                    <img src={items.image.name} className="sm:w-[200px] w-[150px]" />
                    <div className="flex flex-col gap-6 p-5">
                        <h2 className="sm:text-lg text-sm">{items.name}</h2>
                        <p className="sm:text-lg text-sm">Price: ${items?.price}</p>
                        <p className="sm:text-lg text-sm">Quantity: {items.quantity}</p>
                    </div>
                </div>

                : items.map(item => (
                    <div key={item.id} className="flex max-w-1/5 justify-start pb-2 min-w-[320px]">
                        <img src={item.image.name} className="sm:w-[200px] w-[150px]" />
                        <div className="flex flex-col gap-6 p-5">
                            <h2 className="sm:text-lg text-sm">{item.name}</h2>
                            <p className="sm:text-lg text-sm">Price: ${item?.price}</p>
                            <p className="sm:text-lg text-sm">Quantity: {item.quantity}</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default ReviewComponent