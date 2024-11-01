/* eslint-disable react/prop-types */

import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function Popup({ showPopup, setShowPopup }) {
  return (
    <>
      {showPopup && (
        <div className="h-screen w-screen backdrop-blur-lg fixed top-0 left-0 bg-black/50">
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 shadow-lg rounded-xl bg-white w-[300px] duration-200 px-6 py-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-2xl ">Login</h3>
              <span className="cursor-pointer text-2xl">
                <FaX onClick={() => setShowPopup(false)} />
              </span>
            </div>
            <div className="my-4">
              <input
                type="email"
                className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-500 duration-200"
                placeholder="Enter Email"
              />
              <input
                type="password"
                className="w-full border px-4 py-2 rounded-md my-4 focus:outline-none focus:ring focus:ring-gray-500 duration-200"
                placeholder="Enter Password"
              />
              <button
                className="text-white bg-primary text-center w-full px-4 py-3 rounded-md font-semibold"
                onClick={() => setShowPopup(false)}
              >
                Login
              </button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>or login with</p>
              <div className="flex gap-3 mt-4">
                <FaFacebook className="text-3xl hover:text-[#0000FF] duration-200" />
                <FaGoogle className="text-3xl hover:text-primary duration-200" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
