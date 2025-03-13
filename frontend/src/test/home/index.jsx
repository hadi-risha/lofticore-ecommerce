import React, { useState } from "react";
import "./style.css";
import ImageSlider from "../../components/HomeSlider";

import homeBg1 from "../../assets/home-bg1.jpg";
import homeBg2 from "../../assets/home-bg2.jpg";
import pic1 from "../../assets/pic1.jpeg";
import pic2 from "../../assets/pic2.jpeg";
import pic3 from "../../assets/pic3.jpeg";
import pic4 from "../../assets/pic4.jpeg";
import pic5 from "../../assets/pic5.jpeg";
import pic6 from "../../assets/pic6.jpeg";
import pic7 from "../../assets/pic7.jpeg";
import pic8 from "../../assets/pic8.jpeg";
import pic9 from "../../assets/pic9.jpeg";
import pic10 from "../../assets/pic10.jpeg";
import pic11 from "../../assets/pic11.jpeg";

import pic20 from "../../assets/pic20.jpeg";
import pic21 from "../../assets/pic21.jpeg";
import pic22 from "../../assets/pic22.jpeg";
import pic23 from "../../assets/pic23.jpeg";
import pic24 from "../../assets/pic24.jpeg";
import pic25 from "../../assets/pic25.jpeg";
import pic26 from "../../assets/pic26.jpeg";
import pic27 from "../../assets/pic27.jpeg";
import pic28 from "../../assets/pic28.jpeg";
import pic29 from "../../assets/pic29.jpeg";

import pic30 from "../../assets/pic30.jpeg";
import pic31 from "../../assets/pic31.jpeg";
import pic32 from "../../assets/pic32.jpeg";
import pic33 from "../../assets/pic33.jpeg";
import pic34 from "../../assets/pic34.jpeg";
import pic35 from "../../assets/pic35.jpeg";
import pic36 from "../../assets/pic36.jpeg";
import pic37 from "../../assets/pic37.jpeg";
import pic38 from "../../assets/pic38.jpeg";
import pic39 from "../../assets/pic39.jpeg";
import pic40 from "../../assets/pic40.jpeg";
import pic41 from "../../assets/pic41.jpeg";
import pic42 from "../../assets/pic42.jpeg";
import pic43 from "../../assets/pic43.jpeg";
import pic44 from "../../assets/pic44.jpeg";
import pic45 from "../../assets/pic45.jpeg";
import pic46 from "../../assets/pic46.jpeg";
import pic47 from "../../assets/pic47.jpeg";
import pic48 from "../../assets/pic48.jpeg";
import pic49 from "../../assets/pic49.jpeg";
import pic50 from "../../assets/pic50.jpeg";

const Home = () => {
  

  return (
    <>
      <div className="bg-[#485D56] min-h-screen w-full overflow-x-hidden">
        {/* FIRST PART */}
        <div className="flex flex-col md:flex-row h-[98vh]">
          <div className="px-6 py-10 md:px-28 md:py-20 w-full md:w-6/12">
            <div className="space-y-5">
              <p className="text-4xl md:text-5xl text-[#E3B873] font-bold">
                Keep it loft
              </p>
              <p className="text-lg md:text-xl font-light text-[#FFFFFF]">
                Come find what your space is missing. Explore collections that
                elevate your home to new heights.
              </p>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <button className="px-8 py-2 md:px-11 md:py-3 text-white font-light bg-gradient-to-b from-[#e3b873] to-[#745f3d] rounded-full hover:from-[#745f3d] hover:to-[#745f3d]">
                  Contact us
                </button>
                <button className="px-8 py-2 md:px-14 md:py-3 text-gray-600 bg-white rounded-full hover:bg-gray-500 hover:text-white">
                  Gallery
                </button>
              </div>
            </div>

            <div className="mt-10">
              <ImageSlider />
            </div>
          </div>
          <div className="w-full md:w-6/12 h-full">
            <img src={pic9} alt="pic2" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* SECOND PART */}
        <div
          className="flex flex-col h-auto md:h-[80vh] bg-cover bg-center bg-no-repeat justify-center items-center py-10"
          style={{ backgroundImage: `url(${homeBg1})` }}
        >
          <p className="text-3xl md:text-5xl text-[#745f3d] font-bold">
            Popular Categories
          </p>
          <div className="mt-9 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-14">
            {/* card 1 */}
            <div className="w-full md:w-72 h-96 bg-white rounded-lg flex flex-col">
              <div className="h-[85%]">
                <img
                  src={pic1}
                  alt="Sofa"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="h-[15%] flex items-center justify-center">
                <p className="font-bold text-gray-600">Table</p>
              </div>
            </div>
            {/* card 2 */}
            <div className="w-full md:w-72 h-96 bg-white rounded-lg flex flex-col">
              <div className="h-[85%]">
                <img
                  src={pic5}
                  alt="Sofa"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="h-[15%] flex items-center justify-center">
                <p className="font-bold text-gray-600">Shelf</p>
              </div>
            </div>
            {/* card 3 */}
            <div className="w-full md:w-72 h-96 bg-white rounded-lg flex flex-col">
              <div className="h-[85%]">
                <img
                  src={pic6}
                  alt="Sofa"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="h-[15%] flex items-center justify-center">
                <p className="font-bold text-gray-600">Chair</p>
              </div>
            </div>
            {/* card 4 */}
            <div className="w-full md:w-72 h-96 bg-white rounded-lg flex flex-col">
              <div className="h-[85%]">
                <img
                  src={pic7}
                  alt="Sofa"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="h-[15%] flex items-center justify-center">
                <p className="font-bold text-gray-600">Sofa</p>
              </div>
            </div>
          </div>
        </div>

        {/* THIRD PART */}
        <div className="pt-20 h-auto bg-[#FFFFFF] flex flex-col justify-center items-center">
          <p className="text-4xl md:text-7xl text-[#485D56] font-bold">
            Our latest Products
          </p>
          <p className="mt-10 text-xl text-[#745f3d] font-bold">
            New arrivals that bring warmth and style to your home.
          </p>

          <div className="px-6 md:px-52 w-full mt-9 flex flex-col md:flex-row gap-5">
            <div className="h-[400px] w-full md:w-8/12">
              <img src={pic37} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[400px] w-full md:w-4/12">
              <img src={pic38} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="px-6 md:px-52 w-full mt-5 flex flex-col md:flex-row gap-5">
            <div className="h-[400px] w-full md:w-4/12">
              <img src={pic39} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[400px] w-full md:w-8/12">
              <img src={pic42} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="px-6 md:px-52 w-full mt-5 flex flex-col md:flex-row gap-5">
            <div className="h-[400px] w-full md:w-8/12">
              <img src={pic50} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[400px] w-full md:w-4/12">
              <img src={pic4} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="mb-20 px-6 md:px-52 w-full mt-5 flex flex-col md:flex-row gap-5">
            <div className="h-[400px] w-full md:w-4/12">
              <img src={pic8} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[400px] w-full md:w-8/12">
              <img src={pic40} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* FOURTH PART */}
        {/* <div className="px-36 pt-20 h-auto bg-[#485D56] flex justify-center items-center space-x-28">
          <div className="flex flex-col items-center space-y-6">
            <div>
              <div className="flex">
                <div className="w-10 h-10 rounded-sm bg-[#E3B873]"></div>
                <div className="w-10 h-10 rounded-sm rounded-bl-4xl bg-[#EBEEE8]"></div>
              </div>
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-[#7D716B]"></div>
                <div className="w-10 h-10 rounded-sm rounded-b-4xl bg-[#C6B193]"></div>
              </div>
            </div>

            <p className="text-2xl font-serif text-white font-bold">
              Furniture & Decor
            </p>
            <p className="text-xl text-center font-sans text-white font-light">
              Complete your home with our thoughtfully selected furniture and
              decor. Every piece is designed to elevate your space effortlessly.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div>
              <div className="flex">
                <div className="w-10 h-10 rounded-sm rounded-t-4xl bg-[#C6B193]"></div>
                <div className="w-10 h-10 rounded-full bg-[#E3B873] "></div>
              </div>
              <div className="flex">
                <div className="w-10 h-10 rounded-sm rounded-tr-4xl bg-[#7D716B] "></div>
                <div className="w-10 h-10 rounded-sm bg-[#EBEEE8]"></div>
              </div>
            </div>

            <p className="text-2xl font-serif text-white font-bold">
              Curated Furniture
            </p>
            <p className="text-xl text-center font-sans text-white font-light">
              Discover our handpicked selection of modern furniture designed to
              bring elegance and functionality to your home.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div>
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-[#E3B873] "></div>
                <div className="w-10 h-10 rounded-sm rounded-tr-4xl bg-[#7D716B] "></div>
              </div>
              <div className="flex">
                <div className="w-10 h-10 rounded-sm rounded-l-4xl bg-[#EBEEE8]"></div>
                <div className="w-10 h-10 rounded-sm bg-[#C6B193]"></div>
              </div>
            </div>

            <p className="text-2xl font-serif text-white font-bold">
              Tailored to Your Taste
            </p>
            <p className="text-xl text-center font-sans text-white font-light">
              Choose from customizable options that allow you to create pieces
              perfectly suited to your style.
            </p>
          </div>
        </div> */}
        <div className="px-6 md:px-36 pt-20 h-auto bg-[#485D56] flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-28">
          <div className="flex flex-col items-center space-y-6">
            <div>
              <div className="flex">
                <div className="w-10 h-10 rounded-sm bg-[#E3B873]"></div>
                <div className="w-10 h-10 rounded-sm rounded-bl-4xl bg-[#EBEEE8]"></div>
              </div>
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-[#7D716B]"></div>
                <div className="w-10 h-10 rounded-sm rounded-b-4xl bg-[#C6B193]"></div>
              </div>
            </div>

            <p className="text-2xl font-serif text-white font-bold">
              Furniture & Decor
            </p>
            <p className="text-xl text-center font-sans text-white font-light">
              Complete your home with our thoughtfully selected furniture and
              decor. Every piece is designed to elevate your space effortlessly.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div>
              <div className="flex">
                <div className="w-10 h-10 rounded-sm rounded-t-4xl bg-[#C6B193]"></div>
                <div className="w-10 h-10 rounded-full bg-[#E3B873] "></div>
              </div>
              <div className="flex">
                <div className="w-10 h-10 rounded-sm rounded-tr-4xl bg-[#7D716B] "></div>
                <div className="w-10 h-10 rounded-sm bg-[#EBEEE8]"></div>
              </div>
            </div>

            <p className="text-2xl font-serif text-white font-bold">
              Curated Furniture
            </p>
            <p className="text-xl text-center font-sans text-white font-light">
              Discover our handpicked selection of modern furniture designed to
              bring elegance and functionality to your home.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div>
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-[#E3B873] "></div>
                <div className="w-10 h-10 rounded-sm rounded-tr-4xl bg-[#7D716B] "></div>
              </div>
              <div className="flex">
                <div className="w-10 h-10 rounded-sm rounded-l-4xl bg-[#EBEEE8]"></div>
                <div className="w-10 h-10 rounded-sm bg-[#C6B193]"></div>
              </div>
            </div>

            <p className="text-2xl font-serif text-white font-bold">
              Tailored to Your Taste
            </p>
            <p className="text-xl text-center font-sans text-white font-light">
              Choose from customizable options that allow you to create pieces
              perfectly suited to your style.
            </p>
          </div>
        </div>

        {/* FIFTH PART */}
        {/* <div
          className="mt-20 flex h-[220px] bg-cover bg-center bg-no-repeat justify-center items-center space-x-20"
          style={{ backgroundImage: `url(${homeBg2})` }}
        >
          <div className="flex items-center space-x-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={70}
              height={70}
              viewBox="0 0 24 24"
            >
              <path
                fill="#745f3d"
                fillRule="evenodd"
                d="M8 13a3 3 0 1 1 0-6a3 3 0 0 1 0 6m8 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-8 2a7.98 7.98 0 0 1 6 2.708V19H2v-1.292A7.98 7.98 0 0 1 8 15m8 4v-2.048l-.5-.567a10 10 0 0 0-1.25-1.193A8 8 0 0 1 16 15a7.98 7.98 0 0 1 6 2.708V19z"
                strokeWidth={0.5}
                stroke="#745f3d"
              ></path>
            </svg>
            <p className="text-3xl text-[#745f3d] font-bold">
              200+ <br />{" "}
              <span className="text-xl font-light text-gray-800">Users</span>
            </p>
          </div>
          <div className="h-24 w-px bg-gray-800"></div>

          <div className="flex items-center space-x-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={52}
              height={52}
              viewBox="0 0 48 48"
            >
              <g
                fill="none"
                stroke="#745f3d"
                strokeLinecap="round"
                strokeWidth={4}
              >
                <path
                  strokeLinejoin="round"
                  d="M29.6325 4H21.9932V27H43.9932V20.9631"
                ></path>
                <path
                  strokeLinejoin="round"
                  d="M29.0015 13.003L33.5649 17.4445L45.0001 6"
                ></path>
                <path d="M30.0049 43.9998C23.6752 43.9998 19.5595 43.9998 17.6579 43.9998C15.9557 43.9998 13.9159 43.4318 12.5475 41.6126C11.6229 40.3832 11.0049 38.5826 11.0049 35.9998C11.0049 31.7298 11.0049 28.063 11.0049 24.9995"></path>
                <path
                  strokeLinejoin="round"
                  d="M3 32.9998L11.0046 24.9995L19.0138 32.9998"
                ></path>
              </g>
            </svg>
            <p className="text-3xl text-[#745f3d] font-bold">
              150+ <br />{" "}
              <span className="text-xl font-light text-gray-800">Orders</span>
            </p>
          </div>
          <div className="h-24 w-px bg-gray-800"></div>

          <div className="flex items-center space-x-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              viewBox="0 0 16 16"
            >
              <path
                fill="#745f3d"
                fillRule="evenodd"
                d="M.051 1.11C0 1.301 0 1.533 0 1.998s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.051.423.051.888.051s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.051-.191.051-.423.051-.888s0-.697-.05-.888A1.5 1.5 0 0 0 2.887.05c-.192-.051-.424-.051-.889-.051s-.697 0-.888.051A1.5 1.5 0 0 0 .05 1.11M1.5 2.99c.112.005.26.005.501.005s.39 0 .501-.005c.107-.005.132-.013.128-.012a.5.5 0 0 0 .354-.354c0-.003.008-.034.012-.128c.005-.112.005-.26.005-.5s0-.39-.005-.502c-.005-.107-.013-.132-.012-.128a.5.5 0 0 0-.354-.354c.004.001-.021-.007-.128-.011c-.112-.006-.26-.006-.5-.006s-.39 0-.502.006c-.107.004-.132.012-.128.011a.5.5 0 0 0-.354.354c.001-.003-.007.022-.012.128c-.005.112-.005.26-.005.501s0 .39.005.501c.005.107.013.132.012.128a.5.5 0 0 0 .354.354a1 1 0 0 0 .128.012m10.6-1.88c-.051.191-.051.423-.051.888s0 .697.051.888c.139.518.543.922 1.06 1.06c.191.051.423.051.888.051s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.051-.191.051-.423.051-.888s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06c-.191-.051-.423-.051-.888-.051s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06m1.45 1.88c.112.005.26.005.501.005s.389 0 .501-.005a1 1 0 0 0 .128-.012a.5.5 0 0 0 .353-.353c0-.003.007-.034.012-.128c.005-.112.005-.26.005-.5s0-.39-.005-.502a1 1 0 0 0-.012-.128a.5.5 0 0 0-.354-.353c.004.001-.022-.007-.128-.011c-.112-.006-.26-.006-.501-.006s-.39 0-.501.006c-.1.004-.128.011-.128.011a.5.5 0 0 0-.353.353s-.007.028-.012.128c-.005.112-.005.26-.005.501s0 .39.005.501c.005.1.012.13.012.128a.5.5 0 0 0 .354.353a1 1 0 0 0 .128.012M6 2c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C7.302.001 7.534.001 8 .001s.697 0 .888.051c.518.139.922.543 1.06 1.06c.051.191.051.423.051.888s0 .697-.05.888a1.5 1.5 0 0 1-1.06 1.06c-.192.051-.424.051-.889.051s-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C6 2.697 6 2.465 6 2m2 1c-.242 0-.389 0-.501-.005a1 1 0 0 1-.128-.012a.5.5 0 0 1-.354-.354c.001.004-.007-.021-.012-.128C7 2.389 7 2.24 7 2s0-.389.005-.501c.005-.1.012-.128.012-.128a.5.5 0 0 1 .353-.353c-.004.001.021-.007.128-.012c.112-.005.26-.005.501-.005s.39 0 .501.005c.107.005.132.013.128.012a.5.5 0 0 1 .354.354s.007.028.012.128c.005.112.005.26.005.501s0 .389-.005.501a1 1 0 0 1-.012.128a.5.5 0 0 1-.354.354s-.028.007-.128.012C8.388 3 8.24 3 8 3M.051 7.11C0 7.301 0 7.533 0 7.998s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.051.423.051.888.051s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.051-.191.051-.423.051-.888s0-.697-.05-.888a1.5 1.5 0 0 0-1.06-1.06c-.192-.051-.424-.051-.889-.051s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06m1.45 1.88c.112.005.26.005.501.005s.39 0 .501-.005c.1-.005.128-.012.128-.012a.5.5 0 0 0 .353-.353c0-.003.007-.034.012-.128c.005-.112.005-.26.005-.5s0-.39-.005-.502c-.005-.1-.012-.128-.012-.128a.5.5 0 0 0-.353-.353c.004.001-.021-.007-.128-.011c-.112-.006-.26-.006-.501-.006s-.389 0-.501.006a1 1 0 0 0-.128.011a.5.5 0 0 0-.353.353c.001-.003-.007.022-.012.128c-.005.112-.005.26-.005.501s0 .39.005.501c.005.107.013.132.012.128a.5.5 0 0 0 .354.354a1 1 0 0 0 .128.012zM12 8c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06c.191-.051.423-.051.888-.051s.698 0 .888.051c.518.139.922.543 1.06 1.06c.051.191.051.423.051.888s0 .697-.05.888a1.5 1.5 0 0 1-1.06 1.06c-.192.051-.424.051-.889.051s-.698 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C12 8.697 12 8.465 12 8m2 1c-.242 0-.389 0-.501-.005a1 1 0 0 1-.128-.012a.5.5 0 0 1-.354-.354s-.007-.028-.012-.128C13 8.389 13 8.241 13 8s0-.389.005-.501a1 1 0 0 1 .012-.128a.5.5 0 0 1 .354-.353c-.004.001.021-.007.128-.012c.112-.005.26-.005.501-.005s.39 0 .501.005c.107.005.132.013.128.012a.5.5 0 0 1 .354.354s.007.027.012.128c.005.112.005.26.005.501s0 .389-.005.501a1 1 0 0 1-.012.128a.5.5 0 0 1-.354.354c.004-.001-.021.007-.128.012c-.112.005-.26.005-.5.005zM6.05 7.11c-.051.191-.051.423-.051.888s0 .697.051.888c.139.518.543.922 1.06 1.06c.191.051.423.051.888.051s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.051-.191.051-.423.051-.888s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06c-.191-.051-.423-.051-.888-.051s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06M7.5 8.99c.112.005.26.005.501.005s.389 0 .501-.005c.107-.005.132-.013.128-.012a.5.5 0 0 0 .354-.354c0-.003.007-.034.012-.128c.005-.112.005-.26.005-.5s0-.39-.005-.502c-.005-.107-.013-.132-.012-.128a.5.5 0 0 0-.354-.354c.004.001-.021-.007-.128-.011c-.112-.006-.26-.006-.501-.006s-.389 0-.501.006c-.107.004-.132.012-.128.011a.5.5 0 0 0-.354.354c.001-.003-.007.022-.012.128c-.005.112-.005.26-.005.501s0 .39.005.501c.005.107.013.132.012.128a.5.5 0 0 0 .354.354a1 1 0 0 0 .128.012M0 14c0-.465 0-.698.051-.888a1.5 1.5 0 0 1 1.06-1.06c.191-.051.423-.051.888-.051s.697 0 .888.051c.518.139.922.543 1.06 1.06c.051.191.051.423.051.888s0 .698-.05.888a1.5 1.5 0 0 1-1.06 1.06c-.192.051-.424.051-.889.051s-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C0 14.697 0 14.465 0 14m2 1c-.242 0-.389 0-.501-.005a1 1 0 0 1-.128-.012a.5.5 0 0 1-.354-.354c.001.004-.007-.021-.012-.128C1 14.389 1 14.241 1 14s0-.389.005-.501c.005-.1.012-.128.012-.128a.5.5 0 0 1 .353-.353s.028-.007.128-.012c.112-.005.26-.005.501-.005s.39 0 .501.005c.1.005.13.012.128.012a.5.5 0 0 1 .353.354s.007.028.012.128c.005.112.005.26.005.501s0 .39-.005.501a1 1 0 0 1-.012.128a.5.5 0 0 1-.354.354s-.027.007-.128.012C2.387 15 2.24 15 2 15m10.1-1.9c-.051.191-.051.423-.051.888s0 .698.051.888c.139.518.543.922 1.06 1.06c.191.051.423.051.888.051s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.051-.191.051-.423.051-.888s0-.698-.051-.888a1.5 1.5 0 0 0-1.06-1.06c-.191-.051-.423-.051-.888-.051s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06m1.45 1.88c.112.005.26.005.501.005s.389 0 .501-.005c.1-.004.128-.012.128-.012a.5.5 0 0 0 .353-.354c0-.003.007-.034.012-.128c.005-.112.005-.26.005-.5s0-.39-.005-.502c-.005-.107-.013-.132-.012-.128a.5.5 0 0 0-.354-.354c.004.001-.021-.006-.128-.011c-.112-.005-.26-.006-.501-.006s-.389 0-.501.006c-.107.005-.132.012-.128.011a.5.5 0 0 0-.354.354c.001-.003-.007.022-.012.128c-.005.112-.005.26-.005.501s0 .39.005.501c.005.107.013.132.012.128a.5.5 0 0 0 .354.354a1 1 0 0 0 .128.012zM6 14c0-.465 0-.698.051-.888a1.5 1.5 0 0 1 1.06-1.06c.191-.051.423-.051.888-.051s.697 0 .888.051c.518.139.922.543 1.06 1.06c.051.191.051.423.051.888s0 .698-.05.888a1.5 1.5 0 0 1-1.06 1.06c-.192.051-.424.051-.889.051s-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C6 14.697 6 14.465 6 14m2 1c-.242 0-.389 0-.501-.005a1 1 0 0 1-.128-.012a.5.5 0 0 1-.354-.354c.001.004-.007-.021-.012-.128C7 14.389 7 14.241 7 14s0-.389.005-.501c.005-.107.013-.132.012-.128a.5.5 0 0 1 .354-.354c-.004.001.021-.007.128-.012C7.611 13 7.759 13 8 13s.389 0 .501.005a1 1 0 0 1 .128.012a.5.5 0 0 1 .353.354c-.001-.004.007.022.012.128c.005.112.005.26.005.501s0 .39-.005.501a1 1 0 0 1-.012.128a.5.5 0 0 1-.354.354a.6.6 0 0 1-.128.012C8.388 15 8.24 15 7.999 15z"
                clipRule="evenodd"
                strokeWidth={0.5}
                stroke="#745f3d"
              ></path>
            </svg>
            <p className="text-3xl text-[#745f3d] font-bold">
              1500+ <br />{" "}
              <span className="text-xl font-light text-gray-800">Products</span>
            </p>
          </div>
        </div> */}

        <div
          className="mt-20 flex flex-col md:flex-row h-auto md:h-[220px] bg-cover bg-center bg-no-repeat justify-center items-center space-y-6 md:space-y-0 md:space-x-20 py-10"
          style={{ backgroundImage: `url(${homeBg2})` }}
        >
          <div className="flex items-center space-x-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={70}
              height={70}
              viewBox="0 0 24 24"
            >
              <path
                fill="#745f3d"
                fillRule="evenodd"
                d="M8 13a3 3 0 1 1 0-6a3 3 0 0 1 0 6m8 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-8 2a7.98 7.98 0 0 1 6 2.708V19H2v-1.292A7.98 7.98 0 0 1 8 15m8 4v-2.048l-.5-.567a10 10 0 0 0-1.25-1.193A8 8 0 0 1 16 15a7.98 7.98 0 0 1 6 2.708V19z"
                strokeWidth={0.5}
                stroke="#745f3d"
              ></path>
            </svg>
            <p className="text-3xl text-[#745f3d] font-bold">
              200+ <br />{" "}
              <span className="text-xl font-light text-gray-800">Users</span>
            </p>
          </div>
          <div className="h-24 w-px bg-gray-800 hidden md:block"></div>

          <div className="flex items-center space-x-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={52}
              height={52}
              viewBox="0 0 48 48"
            >
              <g
                fill="none"
                stroke="#745f3d"
                strokeLinecap="round"
                strokeWidth={4}
              >
                <path
                  strokeLinejoin="round"
                  d="M29.6325 4H21.9932V27H43.9932V20.9631"
                ></path>
                <path
                  strokeLinejoin="round"
                  d="M29.0015 13.003L33.5649 17.4445L45.0001 6"
                ></path>
                <path d="M30.0049 43.9998C23.6752 43.9998 19.5595 43.9998 17.6579 43.9998C15.9557 43.9998 13.9159 43.4318 12.5475 41.6126C11.6229 40.3832 11.0049 38.5826 11.0049 35.9998C11.0049 31.7298 11.0049 28.063 11.0049 24.9995"></path>
                <path
                  strokeLinejoin="round"
                  d="M3 32.9998L11.0046 24.9995L19.0138 32.9998"
                ></path>
              </g>
            </svg>
            <p className="text-3xl text-[#745f3d] font-bold">
              150+ <br />{" "}
              <span className="text-xl font-light text-gray-800">Orders</span>
            </p>
          </div>
          <div className="h-24 w-px bg-gray-800 hidden md:block"></div>

          <div className="flex items-center space-x-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              viewBox="0 0 16 16"
            >
              <path
                fill="#745f3d"
                fillRule="evenodd"
                d="M.051 1.11C0 1.301 0 1.533 0 1.998s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.051.423.051.888.051s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.051-.191.051-.423.051-.888s0-.697-.05-.888A1.5 1.5 0 0 0 2.887.05c-.192-.051-.424-.051-.889-.051s-.697 0-.888.051A1.5 1.5 0 0 0 .05 1.11M1.5 2.99c.112.005.26.005.501.005s.39 0 .501-.005c.107-.005.132-.013.128-.012a.5.5 0 0 0 .354-.354c0-.003.008-.034.012-.128c.005-.112.005-.26.005-.5s0-.39-.005-.502c-.005-.107-.013-.132-.012-.128a.5.5 0 0 0-.354-.354c.004.001-.021-.007-.128-.011c-.112-.006-.26-.006-.5-.006s-.39 0-.502.006c-.107.004-.132.012-.128.011a.5.5 0 0 0-.354.354c.001-.003-.007.022-.012.128c-.005.112-.005.26-.005.501s0 .39.005.501c.005.107.013.132.012.128a.5.5 0 0 0 .354.354a1 1 0 0 0 .128.012m10.6-1.88c-.051.191-.051.423-.051.888s0 .697.051.888c.139.518.543.922 1.06 1.06c.191.051.423.051.888.051s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.051-.191.051-.423.051-.888s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06c-.191-.051-.423-.051-.888-.051s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06m1.45 1.88c.112.005.26.005.501.005s.389 0 .501-.005a1 1 0 0 0 .128-.012a.5.5 0 0 0 .353-.353c0-.003.007-.034.012-.128c.005-.112.005-.26.005-.5s0-.39-.005-.502a1 1 0 0 0-.012-.128a.5.5 0 0 0-.354-.353c.004.001-.022-.007-.128-.011c-.112-.006-.26-.006-.501-.006s-.39 0-.501.006c-.1.004-.128.011-.128.011a.5.5 0 0 0-.353.353s-.007.028-.012.128c-.005.112-.005.26-.005.501s0 .39.005.501c.005.1.012.13.012.128a.5.5 0 0 0 .354.353a1 1 0 0 0 .128.012M6 2c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C7.302.001 7.534.001 8 .001s.697 0 .888.051c.518.139.922.543 1.06 1.06c.051.191.051.423.051.888s0 .697-.05.888a1.5 1.5 0 0 1-1.06 1.06c-.192.051-.424.051-.889.051s-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C6 2.697 6 2.465 6 2m2 1c-.242 0-.389 0-.501-.005a1 1 0 0 1-.128-.012a.5.5 0 0 1-.354-.354c.001.004-.007-.021-.012-.128C7 2.389 7 2.24 7 2s0-.389.005-.501c.005-.1.012-.128.012-.128a.5.5 0 0 1 .353-.353c-.004.001.021-.007.128-.012c.112-.005.26-.005.501-.005s.39 0 .501.005c.107.005.132.013.128.012a.5.5 0 0 1 .354.354s.007.028.012.128c.005.112.005.26.005.501s0 .389-.005.501a1 1 0 0 1-.012.128a.5.5 0 0 1-.354.354s-.028.007-.128.012C8.388 3 8.24 3 8 3M.051 7.11C0 7.301 0 7.533 0 7.998s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.051.423.051.888.051s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.051-.191.051-.423.051-.888s0-.697-.05-.888a1.5 1.5 0 0 0-1.06-1.06c-.192-.051-.424-.051-.889-.051s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06m1.45 1.88c.112.005.26.005.501.005s.39 0 .501-.005c.1-.005.128-.012.128-.012a.5.5 0 0 0 .353-.353c0-.003.007-.034.012-.128c.005-.112.005-.26.005-.5s0-.39-.005-.502c-.005-.1-.012-.128-.012-.128a.5.5 0 0 0-.353-.353c.004.001-.021-.007-.128-.011c-.112-.006-.26-.006-.501-.006s-.389 0-.501.006a1 1 0 0 0-.128.011a.5.5 0 0 0-.353.353c.001-.003-.007.022-.012.128c-.005.112-.005.26-.005.501s0 .39.005.501c.005.107.013.132.012.128a.5.5 0 0 0 .354.354a1 1 0 0 0 .128.012zM12 8c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06c.191-.051.423-.051.888-.051s.698 0 .888.051c.518.139.922.543 1.06 1.06c.051.191.051.423.051.888s0 .697-.05.888a1.5 1.5 0 0 1-1.06 1.06c-.192.051-.424.051-.889.051s-.698 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C12 8.697 12 8.465 12 8m2 1c-.242 0-.389 0-.501-.005a1 1 0 0 1-.128-.012a.5.5 0 0 1-.354-.354s-.007-.028-.012-.128C13 8.389 13 8.241 13 8s0-.389.005-.501a1 1 0 0 1 .012-.128a.5.5 0 0 1 .354-.353c-.004.001.021-.007.128-.012c.112-.005.26-.005.501-.005s.39 0 .501.005c.107.005.132.013.128.012a.5.5 0 0 1 .354.354s.007.027.012.128c.005.112.005.26.005.501s0 .389-.005.501a1 1 0 0 1-.012.128a.5.5 0 0 1-.354.354c.004-.001-.021.007-.128.012c-.112.005-.26.005-.5.005zM6.05 7.11c-.051.191-.051.423-.051.888s0 .697.051.888c.139.518.543.922 1.06 1.06c.191.051.423.051.888.051s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.051-.191.051-.423.051-.888s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06c-.191-.051-.423-.051-.888-.051s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06M7.5 8.99c.112.005.26.005.501.005s.389 0 .501-.005c.107-.005.132-.013.128-.012a.5.5 0 0 0 .354-.354c0-.003.007-.034.012-.128c.005-.112.005-.26.005-.5s0-.39-.005-.502c-.005-.107-.013-.132-.012-.128a.5.5 0 0 0-.354-.354c.004.001-.021-.007-.128-.011c-.112-.006-.26-.006-.501-.006s-.389 0-.501.006c-.107.004-.132.012-.128.011a.5.5 0 0 0-.354.354c.001-.003-.007.022-.012.128c-.005.112-.005.26-.005.501s0 .39.005.501c.005.107.013.132.012.128a.5.5 0 0 0 .354.354a1 1 0 0 0 .128.012M0 14c0-.465 0-.698.051-.888a1.5 1.5 0 0 1 1.06-1.06c.191-.051.423-.051.888-.051s.697 0 .888.051c.518.139.922.543 1.06 1.06c.051.191.051.423.051.888s0 .698-.05.888a1.5 1.5 0 0 1-1.06 1.06c-.192.051-.424.051-.889.051s-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C0 14.697 0 14.465 0 14m2 1c-.242 0-.389 0-.501-.005a1 1 0 0 1-.128-.012a.5.5 0 0 1-.354-.354c.001.004-.007-.021-.012-.128C1 14.389 1 14.241 1 14s0-.389.005-.501c.005-.1.012-.128.012-.128a.5.5 0 0 1 .353-.353s.028-.007.128-.012c.112-.005.26-.005.501-.005s.39 0 .501.005c.1.005.13.012.128.012a.5.5 0 0 1 .353.354s.007.028.012.128c.005.112.005.26.005.501s0 .39-.005.501a1 1 0 0 1-.012.128a.5.5 0 0 1-.354.354s-.027.007-.128.012C2.387 15 2.24 15 2 15m10.1-1.9c-.051.191-.051.423-.051.888s0 .698.051.888c.139.518.543.922 1.06 1.06c.191.051.423.051.888.051s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.051-.191.051-.423.051-.888s0-.698-.051-.888a1.5 1.5 0 0 0-1.06-1.06c-.191-.051-.423-.051-.888-.051s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06m1.45 1.88c.112.005.26.005.501.005s.389 0 .501-.005c.1-.004.128-.012.128-.012a.5.5 0 0 0 .353-.354c0-.003.007-.034.012-.128c.005-.112.005-.26.005-.5s0-.39-.005-.502c-.005-.107-.013-.132-.012-.128a.5.5 0 0 0-.354-.354c.004.001-.021-.006-.128-.011c-.112-.005-.26-.006-.501-.006s-.389 0-.501.006c-.107.005-.132.012-.128.011a.5.5 0 0 0-.354.354c.001-.003-.007.022-.012.128c-.005.112-.005.26-.005.501s0 .39.005.501c.005.107.013.132.012.128a.5.5 0 0 0 .354.354a1 1 0 0 0 .128.012zM6 14c0-.465 0-.698.051-.888a1.5 1.5 0 0 1 1.06-1.06c.191-.051.423-.051.888-.051s.697 0 .888.051c.518.139.922.543 1.06 1.06c.051.191.051.423.051.888s0 .698-.05.888a1.5 1.5 0 0 1-1.06 1.06c-.192.051-.424.051-.889.051s-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C6 14.697 6 14.465 6 14m2 1c-.242 0-.389 0-.501-.005a1 1 0 0 1-.128-.012a.5.5 0 0 1-.354-.354c.001.004-.007-.021-.012-.128C7 14.389 7 14.241 7 14s0-.389.005-.501c.005-.107.013-.132.012-.128a.5.5 0 0 1 .354-.354c-.004.001.021-.007.128-.012C7.611 13 7.759 13 8 13s.389 0 .501.005a1 1 0 0 1 .128.012a.5.5 0 0 1 .353.354c-.001-.004.007.022.012.128c.005.112.005.26.005.501s0 .39-.005.501a1 1 0 0 1-.012.128a.5.5 0 0 1-.354.354a.6.6 0 0 1-.128.012C8.388 15 8.24 15 7.999 15z"
                clipRule="evenodd"
                strokeWidth={0.5}
                stroke="#745f3d"
              ></path>
            </svg>
            <p className="text-3xl text-[#745f3d] font-bold">
              1500+ <br />{" "}
              <span className="text-xl font-light text-gray-800">Products</span>
            </p>
          </div>
        </div>

        {/* SIXTH PART */}
        <div className="px-52 py-28 h-auto bg-[#EBEEE8] flex justify-center items-center space-x-20">
          <div className="flex space-x-6">
            <div className="flex flex-col items-center space-y-[1px]">
              <div className="flex space-x-[1.5px]">
                <div className="w-36 h-36 rounded-tr-full bg-[#485D56]"></div>
                <div className="w-36 h-36 bg-[#745f3d]">
                  <img
                    src={pic23}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </div>
              </div>
              <div className="flex space-x-[1.5px]">
                <div className="w-36 h-36 rounded-bl-full bg-[#575050]"></div>
                <div className="w-36 h-36 bg-[#485D56]">
                  <img
                    src={pic35}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </div>
              </div>
              <div className="flex space-x-[1.5px]">
                <div className="w-36 h-36 rounded-l-full bg-[#485D56]"></div>
                <div className="w-36 h-36 bg-[#745f3d]">
                  <img
                    src={pic33}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Align this div to the bottom */}
            <div className="self-end h-auto space-y-5">
              <div className="bg-[#745f3d] w-10 h-10 rounded-full"></div>
              <div className="bg-[#7D716B] w-10 h-10 rounded-full"></div>
              <div className="bg-[#575050] w-10 h-10 rounded-full"></div>
              <div className="bg-[#485D56] w-10 h-10 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <p className="text-4xl font-serif text-[#745f3d] font-bold">
              Make your home awesome—feel awesome too
            </p>
            <p className="text-xl font-sans text-gray-600 font-light">
              Imagine coming home to a space that not only looks great but also
              lifts your mood every single day. Our handpicked furniture and
              decor aren’t just about style—they’re about creating a vibe that
              makes you smile, relax, and truly enjoy every moment spent at
              home. Discover pieces that spark joy, inspire creativity, and turn
              your everyday living into something extraordinary. Let’s make your
              space a place where you feel right at home, every time you walk
              through the door.
            </p>
          </div>
        </div>

        {/* SEVENTH PART */}
        <div className="px-36 py-20 h-auto bg-[#252525]">
          <div className="flex space-x-48">
            <ul className="space-y-3.5">
              <li className="text-xl text-white font-serif hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                Service
              </li>
              <li className="text-xl text-white font-serif hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                About{" "}
              </li>
              <li className="text-xl text-white font-serif hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                Shipping & Returns
              </li>
              <li className="text-xl text-white font-serif hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                Contacts
              </li>
            </ul>

            <ul className="space-y-3.5">
              <li className="text-xl text-white font-serif hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                Newsletter
              </li>
              <li className="text-xl text-white font-serif hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                Press Area
              </li>
              <li className="text-xl text-white font-serif hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                Jobs
              </li>
              <li className="text-xl text-white font-serif hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                Trade Program
              </li>
            </ul>
          </div>

          <div className="mt-20 flex justify-between">
            <div className="flex space-x-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="#fffcf6" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                  ></path>
                  <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m17.5 6.51l.01-.011"
                  ></path>
                </g>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fffcf6"
                  d="M17.303 2.25H6.697A4.447 4.447 0 0 0 2.25 6.697v10.606a4.447 4.447 0 0 0 4.447 4.447h10.606a4.447 4.447 0 0 0 4.447-4.447V6.697a4.447 4.447 0 0 0-4.447-4.447m-8.46 15.742a.4.4 0 0 1-.4.423h-1.78a.41.41 0 0 1-.4-.412V10.6a.4.4 0 0 1 .4-.411h1.78a.4.4 0 0 1 .4.411zM7.52 8.632a1.467 1.467 0 1 1 .022-2.935A1.467 1.467 0 0 1 7.52 8.63m10.817 9.35a.39.39 0 0 1-.378.388H16.08a.39.39 0 0 1-.378-.389v-3.424c0-.511.156-2.223-1.356-2.223c-1.179 0-1.412 1.2-1.457 1.734v3.991a.39.39 0 0 1-.378.39h-1.823a.39.39 0 0 1-.389-.39v-7.493a.39.39 0 0 1 .39-.378h1.822a.39.39 0 0 1 .39.378v.645a2.59 2.59 0 0 1 2.434-1.112c3.035 0 3.024 2.835 3.024 4.447z"
                  strokeWidth={0.5}
                  stroke="#fff"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 16 16"
                className="mt-0.5"
              >
                <path
                  fill="#fffcf6"
                  d="M13.7 1H2.2A1.27 1.27 0 0 0 .927 2.273v11.5A1.27 1.27 0 0 0 2.2 15.046h6.36v-5.73H6.65v-1.91h1.91v-1.03c0-1.94.946-2.79 2.56-2.79c.772 0 1.18.057 1.37.083V5.5h-1.1c-.685 0-.924.361-.924 1.09v.816h2.01l-.272 1.91h-1.73v5.73h3.18a1.27 1.27 0 0 0 1.273-1.273v-11.5A1.27 1.27 0 0 0 13.654 1z"
                  strokeWidth={0.5}
                  stroke="#fff"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fffcf6"
                  d="M15.073 2.5c1.824 0 3.293 0 4.45.155c1.2.162 2.21.507 3.012 1.31c.803.802 1.148 1.813 1.31 3.013C24 8.134 24 9.603 24 11.427v1.146c0 1.824 0 3.293-.155 4.45c-.162 1.2-.507 2.21-1.31 3.012c-.802.803-1.812 1.148-3.013 1.31c-1.156.155-2.625.155-4.449.155H8.927c-1.824 0-3.293 0-4.45-.155c-1.2-.162-2.21-.507-3.013-1.31c-.802-.802-1.147-1.812-1.309-3.013C0 15.866 0 14.397 0 12.573v-1.146c0-1.824 0-3.293.155-4.45c.162-1.2.507-2.21 1.31-3.013c.802-.802 1.813-1.147 3.013-1.309C5.634 2.5 7.103 2.5 8.927 2.5zm1.426 9.501L9.3 7.832v8.338z"
                  strokeWidth={0.5}
                  stroke="#fff"
                ></path>
              </svg>
            </div>

            <div className="text-gray-400 flex space-x-4">
              <p className="font-serif hover:text-gray-500 transition-colors duration-300 cursor-pointer">
                Disclaimer
              </p>
              <p className="font-serif hover:text-gray-500 transition-colors duration-300 cursor-pointer">
                Cookie Policy
              </p>
              <p className="font-serif hover:text-gray-500 transition-colors duration-300 cursor-pointer">
                General Conditions
              </p>
              <p className="font-serif hover:text-gray-500 transition-colors duration-300 cursor-pointer">
                Privacy Statement
              </p>
              <p className="font-serif hover:text-gray-500 transition-colors duration-300 cursor-pointer">
                ©2025 Lofticore
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
