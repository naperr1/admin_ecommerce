import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-lg relative">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap ">
              CozyⓇ
            </span>
          </Link>

          <div className="justify-between items-center w-full lg:flex lg:w-auto ">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li className="p-2">
                <Link to="/">Shop</Link>
              </li>
              <li className="p-2">
                <Link to="/">Collective</Link>
              </li>
              <li className="p-2">
                <Link to="/">Designes</Link>
              </li>
              <li className="p-2">
                <Link to="/">About us</Link>
              </li>
              <li className="p-2">
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>

          {login ? (
            <div>
              <Link
                to="/"
                className="bg-transparent hover:bg-green-700  font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent rounded mr-3"
              >
                Đăng kí
              </Link>
              <Link
                to="/"
                className="bg-transparent hover:bg-green-700  font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent rounded border-green-700"
              >
                Đăng nhập
              </Link>
            </div>
          ) : (
            <div className="flex items-center">
              <div className="relative">
                <IoIosNotifications size={20} className="relative" />
                <span className="absolute bg-[#E58411] text-white text-[8px] p-0.5 rounded-full top-[-6px] right-0">
                  20
                </span>
              </div>

              <div
                className="flex items-center mx-4 cursor-pointer"
                onClick={toggleDropdown}
              >
                <FaUser className="mr-1" />
                <span className="mr-4">Admin</span>
                <IoMdArrowDropdown />
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg top-[55px] right-auto">
                  <ul className="p-2">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Thông tin tài khoản
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Đăng xuất
                    </li>
                  </ul>
                </div>
              )}

              <div className="relative">
                <FaShoppingCart size={20} className="relative" />
                <span className="absolute bg-[#E58411] text-white text-[8px] p-0.5 rounded-full top-[-6px] right-[-4px]">
                  20
                </span>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
