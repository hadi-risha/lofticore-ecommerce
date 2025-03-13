import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { motion } from "framer-motion";

import homeBg1 from "../assets/home-bg1.jpg";
import homeBg2 from "../assets/home-bg2.jpg";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";
import pic5 from "../assets/pic5.jpeg";
import pic6 from "../assets/pic6.jpeg";
import pic7 from "../assets/pic7.jpeg";

const CartNavbar = ({ isOpen, toggleMenu }) => {
    const [ cartCount, setCount] = useState(5)
    const [cartProducts, setCartProducts] = useState([
      {
        id: 1,
        name: "Nilkamal Akin Queen Bed without Storage (Walnut)",
        price: 12990,
        quantity: 1,
        image: pic1,
      },
      {
        id: 2,
        name: "Ikea Modern Chair",
        price: 5990,
        quantity: 2,
        image: pic1,
      },
      {
        id: 3,
        name: "Wooden Coffee Table",
        price: 7990,
        quantity: 1,
        image: pic1,
      },
      {
        id: 4,
        name: "Leather Sofa",
        price: 25990,
        quantity: 1,
        image: pic1,
      },
    ]);

    return (
      <>
        {isOpen && (
          <div
            className="fixed inset-0"
            onClick={toggleMenu}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)", // for Safari
            }}
          ></div>
        )}

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="mt-4 mb-4 mr-[.7px] pt-20 fixed right-0 top-0 h-[95vh] w-[450px] bg-white shadow-lg px-3 py-10 z-50 rounded-3xl"
        >
          {/* Header: Cart Count & Close Button */}
          <div className="absolute top-4 left-6 right-6 flex items-center justify-between">
            <span className="text-xl font-bold text-gray-700">
              Cart:
              <span className="bg-[#eaa83f] text-white text-sm font-semibold ml-2 px-2 py-1 rounded-full">
                {cartCount}
              </span>
            </span>

            <button onClick={toggleMenu} className="p-2">
              <X
                size={22}
                className="cursor-pointer text-gray-600 hover:text-gray-900"
              />
            </button>
          </div>

          <div className="flex w-full justify-center">
            {cartProducts.length === 0 ? (
              <div className="mt-14 space-y-10">
                {/* empty cart icon */}
                <div className="space-y-2 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={45}
                    height={36}
                    viewBox="0 0 16 16"
                    className="mx-auto"
                  >
                    <g fill="#878282" strokeWidth={0.5} stroke="#878282">
                      <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"></path>
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607l1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4a2 2 0 0 0 0-4h7a2 2 0 1 0 0 4a2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path>
                    </g>
                  </svg>
                  <p className="text-gray-400 text-2xl">
                    No items in your cart
                  </p>
                  <hr className="mt-12 text-gray-500" />
                </div>

                {/* products suggestion goes here */}
                <div className="w-full h-auto">
                  <div className=" space-y-3 ">
                    <p className="text-lg text-gray-700">
                      Take a look at our Popular Collections
                    </p>

                    <div className="flex w-full justify-center space-x-10">
                      <div
                        className="w-28 h-28 rounded-lg bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${pic1})` }}
                      ></div>
                      <div
                        className="w-28 h-28 rounded-lg bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${pic1})` }}
                      ></div>
                    </div>
                    <div className="flex w-full justify-center space-x-10">
                      <div
                        className="w-28 h-28 rounded-lg bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${pic1})` }}
                      ></div>
                      <div
                        className="w-28 h-28 rounded-lg bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${pic1})` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-center">
                  <Link>
                    <p className="px-3 py-2 text-white inline-block font-light bg-gradient-to-b from-[#e3b873] to-[#745f3d] rounded-full hover:from-[#745f3d] hover:to-[#745f3d]">
                      Continue Shopping
                    </p>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div
                  className={`flex-grow mt-7 ${
                    cartProducts?.length > 3 ? "overflow-y-auto" : ""
                  }`}
                  style={{
                    maxHeight:
                      cartProducts.length > 3 ? "calc(3.5 * 110px)" : "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#ccc transparent",
                  }}
                >
                  {cartProducts.length === 0 ? (
                    <div className="mt-20 text-center">
                      <p className="text-gray-400 text-2xl">
                        No items in your cart
                      </p>
                    </div>
                  ) : (
                    cartProducts.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 w-full border border-gray-300 rounded-2xl flex items-center space-x-4 mb-2"
                      >
                        <img
                          src={item.image}
                          className="w-24 h-24 object-cover rounded-lg"
                          alt="Product"
                        />
                        <div className="flex flex-col justify-between flex-grow space-y-3">
                          <p className="text-sm">{item.name}</p>
                          <div className="flex items-center space-x-3 border border-gray-300 px-3 py-1 rounded-md w-fit">
                            <button className="text-gray-400 text-xl font-bold px-2 cursor-pointer">
                              -
                            </button>
                            <p className="text-gray-500 text-lg font-medium">
                              {item.quantity}
                            </p>
                            <button className="text-gray-400 text-xl font-bold px-2 cursor-pointer">
                              +
                            </button>
                          </div>
                        </div>
                        <p className="text-lg">₹{item.price}</p>
                      </div>
                    ))
                  )}
                </div>

                {/* <div> */}
                <div className="absolute bottom-0 left-0 right-0 rounded-3xl shadow-md px-5 py-4 space-y-4">
                  <div className="flex justify-between">
                    <p className="text-gray-600 font-semibold">Subtotal</p>
                    <p className="text-lg">₹12,990</p>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Shipping calculated at checkout
                  </p>
                  <Link to={"/checkout"} onClick={toggleMenu}>
                    <p className="px-3 py-2 text-white font-light bg-gradient-to-b from-[#e3b873] to-[#745f3d] rounded-full hover:from-[#745f3d] hover:to-[#745f3d] flex items-center justify-center">
                      Checkout
                    </p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </>
    );
};

export default CartNavbar;
