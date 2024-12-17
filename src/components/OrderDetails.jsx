import CostComponent from "./CostComponent"
import ReviewComponent from "./ReviewComponent"


const OrderDetails = () => {

    return (
        <div className="flex flex-col pt-20 xl:w-5/6 w-full ">
            <h3 className="text-xl font-semibold sm:mt-0 mt-8  pb-7">Your Order</h3>
                <ReviewComponent />
                <CostComponent />
        </div>
    )
}

export default OrderDetails