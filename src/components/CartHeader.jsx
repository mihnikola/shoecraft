const CartHeader = () => {
    return (
        <div className='flex flex-col items-start justify-start w-full '>
            <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
            <div className="grid grid-flow-col border-b xl:w-full md:gap-[70px] gap-[50px] sm:w-full sm:pr-8">
                <span className="col-span-2">Image</span>
                <span className="col-span-4">Name</span>
                <span className="col-span-2">Price</span>
                <span className="col-span-2">Size</span>
                <span className="col-span-2" >Amount</span>
            </div>
        </div>
    )
}

export default CartHeader