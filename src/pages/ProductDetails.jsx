import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../constants';
import Toast from '../components/Toast';
import QuantityInput from '../components/QuantityInput';
import { ShopContext } from '../context/ShopContext';

const ProductDetails = () => {
    const { id: productId } = useParams();
    const shopContext = useContext(ShopContext);
    const { addToCart, addToCheckout } = shopContext;
    const productData = products.find((product) => product.id === parseInt(productId));
    const navigate = useNavigate();
    const { name, images, price, description, sizes } = productData;
    const [mainImage, setMainImage] = useState(images[0] || null);
    const [selectedSize, setSelectedSize] = useState(45);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const [quantity, setQuantity] = useState(1);

    const openToastHandler = () => {
        setLoading(true);
        const sendData = {
            ...productData,
            quantity,
            image: mainImage,
            selectedSize
        };
        addToCart(sendData);
        setMessage('Product added to cart');
    }

    const checkoutHandler = () => {
        setLoading(true);
        const sendData = {
            ...productData,
            quantity,
            image: mainImage,
            selectedSize
        };
        addToCheckout(sendData);
        navigate('/checkout');

    }

    useEffect(() => {
        window.scrollTo(0, 0);
        if (addToCart || loading) {
            setTimeout(() => {
                setLoading(false);
                setMessage(null);
            }, 2000);
        }
    }, [addToCart, loading])

    return (
        <section className='padding'>
            <div className="flex gap-20 pt-20 xl:flex-row 2xl:grid-cols-3  xl:w-full flex-col">
                {/* Left section - Main product image */}
                <div className="flex lg:flex-row lg:w-full flex-col">
                    <div className="grid lg:w-2/3 lg:grid-cols-1 grid-cols-6 pb-10 w-full">
                        {/* Thumbnail images */}
                        {images?.map((item, index) => (
                            <img
                                key={item.id}
                                src={item.thumbnail}
                                alt={`Thumbnail ${index + 1}`}
                                className="lg:w-36 lg:h-24 object-cover rounded-lg cursor-pointer hover:ring-2 hover:ring-gray-500 "
                                onClick={() => setMainImage(item)}
                            />
                        ))}
                    </div>
                    <div className='flex-0 justify-start'>

                        <img
                            key={mainImage.id}
                            src={mainImage.name}
                            alt={mainImage.name}
                            className="sm:min-w-auto min-w-[200px] object-cover rounded-lg cursor-pointer hover:ring-2"
                        />
                    </div>

                </div>

                {/* Right section - Product details */}
                <div className="flex flex-col md:w-2/3 w-full">
                    <h1 className="text-3xl font-semibold text-gray-900 pt-10">{name}</h1>
                    <div className="grid grid-cols-3 items-start text-lg font-bold">
                        ${price}
                        <span
                            className='text-sm font-medium text-secondary-60 line-through decoration-secondary-50 
                             text-grey-500'>${price}</span>
                        <span className='text-xs font-medium text-green-500'>$ 50% Off</span>
                    </div>
                    <p className="text-lg text-gray-700 p-1 w-full">{description}</p>
                    {/* Amount of product */}
                    <div>
                        <p className="text-xl font-medium text-gray-800">Choose Amount:</p>
                        <div className="flex space-x-4 mt-2">
                            <QuantityInput setQuantity={setQuantity} quantity={quantity} />
                        </div>
                    </div>
                    {/* Size Selector */}
                    <div className='flex flex-wrap'>
                        <p className="text-xl font-medium text-gray-800 w-full">Select Size:</p>
                        <div className="flex space-x-4 mt-2 flex-wrap w-full">
                            {sizes.map((size, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedSize(size.value)}
                                    className={`px-4 py-4 border-2 rounded-md text-sm font-medium ${selectedSize === size.value
                                        ? 'bg-coral-red text-white'
                                        : 'bg-white text-gray-700 hover:bg-blue-50'
                                        }`}
                                >
                                    {size.value}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 grid  gap-5 w-full">
                        <button onClick={openToastHandler} className={`px-20 py-3  ${!loading ? "bg-coral-red" : "bg-red-300 cursor-not-allowed"} text-white border-white rounded-xl w-full`}>
                            Add to Cart
                        </button>
                        <button onClick={checkoutHandler} className={`px-20 py-3 ${!loading ? "bg-coral-red" : "bg-red-300 cursor-not-allowed"}  bg-white text-coral-red border-2 border-coral-red rounded-xl w-full`}>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            {message && <Toast text={message} />}
        </section >
    );
};

export default ProductDetails;
