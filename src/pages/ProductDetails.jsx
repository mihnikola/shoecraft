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
            <div className="flex gap-5 max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col gap-4">
                    {/* Thumbnail images */}
                    {images?.map((item, index) => (
                        <img
                            key={item.id}
                            src={item.thumbnail}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-96 h-24 object-cover rounded-lg cursor-pointer hover:ring-2 hover:ring-gray-500"
                            onClick={() => setMainImage(item)}
                        />
                    ))}

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left section - Main product image */}
                    <div className="flex justify-center items-center ">
                        <img
                            key={mainImage.id}
                            src={mainImage.name}
                            alt={mainImage.name}
                            width={500}
                            height={600}
                            className="object-contain relative z-10'"
                        />
                    </div>

                    {/* Right section - Product details */}
                    <div className="space-y-6">

                        <h1 className="text-3xl font-semibold text-gray-900">{name}</h1>
                        <div className="flex items-center gap-2 text-lg font-bold">
                            ${price}
                            <span className='text-sm font-medium text-secondary-60 line-through decoration-secondary-50  text-primary'>${price}</span>
                            <span className='text-xs font-medium text-green-500'>$ 50% Off</span>

                        </div>
                        <p className="text-lg text-gray-700">
                            {description}
                        </p>
                        {/* Amount of product */}
                        <div>
                            <p className="text-xl font-medium text-gray-800">Choose Amount:</p>
                            <div className="flex space-x-4 mt-2">
                                <QuantityInput setQuantity={setQuantity} quantity={quantity} />
                            </div>
                        </div>
                        {/* Size Selector */}
                        <div>
                            <p className="text-xl font-medium text-gray-800">Select Size:</p>
                            <div className="flex space-x-4 mt-2">
                                {sizes.map((size, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedSize(size.value)}
                                        className={`px-4 py-2 border-2 rounded-md text-sm font-medium ${selectedSize === size.value
                                            ? 'bg-coral-red text-white'
                                            : 'bg-white text-gray-700 hover:bg-blue-50'
                                            }`}
                                    >
                                        {size.value}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 flex gap-5">

                            <button onClick={openToastHandler} className={`px-20 py-3  ${!loading ? "bg-coral-red" : "bg-red-300 cursor-not-allowed"} text-white border-white rounded-xl `}>
                                Add to Cart
                            </button>


                            <button onClick={checkoutHandler} className={`px-20 py-3  bg-white text-coral-red border-2 border-coral-red rounded-xl`}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {message && <Toast text={message} />}
        </section >
    );
};

export default ProductDetails;
