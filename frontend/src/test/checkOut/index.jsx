import React, { useState } from 'react'
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaWallet, FaCcStripe } from "react-icons/fa"; // Import icons

const addressData = [
  {
    id: 1,
    address: "123 Main Street",
    apartment: "Apt 4B",
    city: "Bangalore",
    state: "Karnataka",
    pinCode: "560001",
    phone: "9876543210",
  },
  {
    id: 2,
    address: "123 Main Street",
    apartment: "Apt 4B",
    city: "Bangalore",
    state: "Karnataka",
    pinCode: "560001",
    phone: "9876543210",
  },
];


const CheckOut = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const countries = ["India"]; 
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const [selectedAddress, setSelectedAddress] = useState(addressData[0]); 
  const [showForm, setShowForm] = useState(false);

  const [isStatesOpen, setIsStatesOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("");

  const [selectedPayment, setSelectedPayment] = useState("cod");

  const paymentMethods = [
    { id: "cod", label: "Cash on Delivery", icon: <FaMoneyBillWave /> },
    { id: "wallet", label: "Use from Wallet", icon: <FaWallet /> },
    { id: "stripe", label: "Pay with Stripe", icon: <FaCcStripe /> },
  ];

  const [isCouponExpanded, setIsCouponExpanded] = useState(false);
  const [coupon, setCoupon] = useState("");

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="px-48 w-full h-auto flex">
        <div className="w-1/2 p-4">
          <p className="mt-5 text-xl font-serif">Delivery Information</p>

          {addressData?.length === 0 ? (
            <form>
              {/* Country */}
              <div className="mt-10">
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="" disabled hidden>
                    India
                  </option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Address */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Address"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                />
              </div>

              {/* Apartment */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                />
              </div>

              <div className="mt-4 flex space-x-3 w-full">
                {/* City */}
                <input
                  type="text"
                  placeholder="City"
                  className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                />

                {/* State */}
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="" disabled hidden>
                    Select State
                  </option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>

                {/* PIN Code */}
                <input
                  type="text"
                  placeholder="PIN Code"
                  className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                />
              </div>

              {/* Phone */}
              <div className="mt-4">
                <input
                  type="number"
                  placeholder="Phone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                />
              </div>
              <button className="mt-4 px-4 py-1 text-white text-sm rounded-lg bg-gray-700 cursor-pointer">
                Save
              </button>
            </form>
          ) : (
            <div className="mt-4 space-y-2">
              {addressData.map((addr) => (
                <div
                  key={addr.id}
                  className={`relative flex items-center p-4 border rounded-lg shadow-sm bg-white space-y-2 cursor-pointer transition-all ${
                    selectedAddress.id === addr.id
                      ? "border-red-500 shadow-md"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedAddress(addr)}
                >
                  {/* Arrow Indicator for Selected Address */}
                  {selectedAddress.id === addr.id && (
                    <span className="absolute top-3 left-[-23px] text-red-500 text-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 32 32"
                        transform="rotate(-90 16 16)"
                      >
                        <g fill="none">
                          <path
                            fill="#e01f1f"
                            d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
                            strokeWidth={1}
                            stroke="#e01f1f"
                          ></path>
                          <path
                            fill="#fff"
                            d="M15 7a1 1 0 0 0-1 1v9.75a.25.25 0 0 1-.25.25h-3.063c-.9 0-1.342 1.096-.693 1.72l5.313 5.113a1 1 0 0 0 1.386 0l5.313-5.112c.649-.625.207-1.721-.693-1.721H18.25a.25.25 0 0 1-.25-.25V8a1 1 0 0 0-1-1z"
                            strokeWidth={1}
                            stroke="#fff"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  )}

                  <div className="ml-6 space-y-2">
                    <p className="font-medium font-serif">
                      {addr.address}, {addr.apartment && addr.apartment}
                    </p>
                    <p className="font-serif">
                      {addr.city}, {addr.state}, {addr.pinCode}
                    </p>
                    <p className="text-black font-serif">Ph: {addr.phone}</p>
                  </div>
                </div>
              ))}

              <div>
                <div
                  className="mt-16 flex items-center space-x-3 cursor-pointer"
                  onClick={() => setShowForm(!showForm)}
                >
                  <div className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center text-2xl font-bold">
                    {showForm ? "−" : "+"}
                  </div>
                  <p className="text-xl font-serif">
                    Use a different delivery address
                  </p>
                </div>

                {/* Form with Smooth Transition */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: showForm ? "auto" : 0,
                    opacity: showForm ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <form className="mt-4">
                    {/* Country */}
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white">
                        <option value="" disabled hidden>
                          India
                        </option>
                        {countries.map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Address */}
                    <div className="mt-4">
                      <input
                        type="text"
                        placeholder="Address"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                      />
                    </div>

                    {/* Apartment, suite, etc. */}
                    <div className="mt-4">
                      <input
                        type="text"
                        placeholder="Apartment, suite, etc. (optional)"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                      />
                    </div>

                    <div className="mt-4 flex space-x-3 w-full">
                      {/* City */}
                      <input
                        type="text"
                        placeholder="City"
                        className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                      />

                      {/* State dropdown */}
                      <div className="relative flex-1">
                        <div
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white cursor-pointer"
                          onClick={() => setIsStatesOpen(!isStatesOpen)}
                        >
                          {selectedState || "Select State"}
                        </div>
                        {isStatesOpen && (
                          <div
                            className="absolute z-10 w-full border border-gray-300 rounded-md shadow-sm bg-white mt-1"
                            style={{
                              maxHeight: "150px",
                              overflowY: "auto",
                            }}
                          >
                            {states.map((state, index) => (
                              <div
                                key={index}
                                className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => {
                                  setSelectedState(state);
                                  setIsStatesOpen(false);
                                }}
                              >
                                {state}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* PIN Code */}
                      <input
                        type="text"
                        placeholder="PIN Code"
                        className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                      />
                    </div>

                    {/* Phone */}
                    <div className="mt-4">
                      <input
                        type="number"
                        placeholder="Phone"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                      />
                    </div>

                    <button className="mt-4 px-4 py-1 text-white text-sm rounded-lg bg-gray-700 cursor-pointer">
                      Save
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          )}

          <div className="mt-16 p-5 border border-gray-300 rounded-lg shadow-md bg-white w-full max-w-md">
            <p className="text-xl font-serif mb-4">Payment Method</p>

            {paymentMethods.map((method) => (
              <label
                key={method.id}
                className={`flex items-center p-3 border rounded-lg mb-2 cursor-pointer transition ${
                  selectedPayment === method.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={selectedPayment === method.id}
                  onChange={() => setSelectedPayment(method.id)}
                  className="hidden"
                />
                <span className="text-lg mr-3">{method.icon}</span>
                <span className="text-md font-serif">{method.label}</span>
              </label>
            ))}
          </div>
          <p className="mt-10 mb-20 px-3 py-2 w-10/12 text-white flex justify-center bg-gradient-to-b from-[#e3b873] to-[#745f3d] rounded-full hover:from-[#745f3d] hover:to-[#745f3d]">
            Pay now
          </p>
        </div>

        <div className="ml-10 mt-5 w-1/2 p-4 space-y-8">
          <p className="text-2xl font-serif">Order Summary</p>
          <hr className="text-gray-300" />
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-400">SUBTOTAL</p>
              <p className="text-gray-400">₹51,960.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400">SHIPPING</p>
              <p className="text-gray-400">₹00.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400">TAXES (INCLUDED)</p>
            </div>
          </div>
          <hr className="text-gray-300" />
          <div className="flex justify-between">
            <p className="text-gray-800 font-bold">TOTAL</p>
            <p className="text-gray-800 font-bold">₹51,960.00</p>
          </div>

          <div className="p-3 rounded-lg bg-gray-100 w-full space-y-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsCouponExpanded(!isCouponExpanded)}
            >
              <p className="text-gray-500 font-serif">Add a coupon code</p>
              <div>
                {isCouponExpanded ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#000"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                      d="M5 13v-1h13v1z"
                      strokeWidth={1}
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#000"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                      strokeWidth={1}
                    ></path>
                  </svg>
                )}
              </div>
            </div>

            {/* Motion Expandable Input Section */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isCouponExpanded ? "auto" : 0,
                opacity: isCouponExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-3 flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-800 focus:border-gray-800 bg-white"
                />
                <button
                  className="px-4 py-2 text-black text-lg font-serif underline underline-offset-4 cursor-pointer"
                  onClick={() => alert(`Coupon Applied: ${coupon}`)}
                >
                  Apply
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut
