
const QuantityInput = ({setQuantity, quantity}) => {

    const increaseQuantity = () => {
        if (quantity > 0 && quantity < 8) {
            setQuantity(quantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex items-center space-x-2">
            {/* Minus button */}
            <button
                onClick={decreaseQuantity}
                className="px-4 py-2 border border-gray-300 rounded-md text-xl text-gray-700 hover:bg-gray-100"
            >
                -
            </button>

            {/* Quantity Input */}
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                className="w-16 text-center border border-gray-300 rounded-md text-xl text-gray-700"
                min="1"
                max="8"
            />

            {/* Plus button */}
            <button
                onClick={increaseQuantity}
                className="px-4 py-2 border border-gray-300 rounded-md text-xl text-gray-700 hover:bg-gray-100"
            >
                +
            </button>
        </div>
    );
};

export default QuantityInput;
