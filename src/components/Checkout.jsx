import { useContext, useEffect, useState } from 'react';
import Toast from './Toast';
import { LABEL_CHECKOUT } from '../constants';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [showToast, setShowToast] = useState(false);
  // State for user shipping information
  const navigate = useNavigate();
  const { removeCheckout, removeCartItems } = useContext(ShopContext);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    cellphone: ''
  });

  // Handle changes in shipping form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);


        setShippingInfo({
          name: '',
          address: '',
          city: '',
          zip: '',
          cellphone: ''
        })
        removeCheckout();
        removeCartItems();
        navigate('/');


      }, 2000);
    }

  }, [showToast])

  // Handle form submission (you can expand this to make API calls)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually send the order data to a backend

    setShowToast('Order placed successfully!');



  };



  return (
    <>
      {/* Shipping Form */}
      <div className="xl:w-3/4 text-center  md:p-20 pt-20 w-full">
        <h3 className="text-xl font-semibold mb-8">{LABEL_CHECKOUT.CAPTURE} </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder={LABEL_CHECKOUT.NAME}
            value={shippingInfo.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="address"
            placeholder={LABEL_CHECKOUT.ADDRESS}
            value={shippingInfo.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="city"
            placeholder={LABEL_CHECKOUT.CITY}
            value={shippingInfo.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="zip"
            placeholder={LABEL_CHECKOUT.ZIP}
            value={shippingInfo.zip}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="cellphone"
            placeholder={LABEL_CHECKOUT.CONTACT_PHONE}
            value={shippingInfo.cellphone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-coral-red text-white py-2 rounded-md hover:bg-red-600"
          >
            {LABEL_CHECKOUT.SUBMIT_ORDER}
          </button>
        </form>
      </div>
      {showToast && <Toast text={showToast} />}
    </>
  );
};

export default Checkout;
