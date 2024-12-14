import { useEffect, useState } from 'react';
import Toast from './Toast';

const Checkout = () => {
  const [showToast, setShowToast] = useState(false);
  // State for user shipping information
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

  useEffect(()=> {
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  },[showToast])

  // Handle form submission (you can expand this to make API calls)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually send the order data to a backend

    setShowToast('Order placed successfully!');
  };



  return (
    <>
      {/* Shipping Form */}
      <div className="w-3/4 text-center p-20">
        <h3 className="text-xl font-semibold mb-8">Shipping Information</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={shippingInfo.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingInfo.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={shippingInfo.zip}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="cellphone"
            placeholder="Contact phone"
            value={shippingInfo.cellphone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-coral-red text-white py-2 rounded-md hover:bg-red-600"
          >
            Submit Order
          </button>
        </form>
      </div>
      {showToast && <Toast text={showToast} />}
    </>
  );
};

export default Checkout;
