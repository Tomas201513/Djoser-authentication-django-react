import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { BsQuestionOctagon, BsBuilding } from "react-icons/bs";
// import { AiOutlineDown } from "react-icons/ai";
// import {
//   FiGrid,
//   FiFileText,
//   FiLogOut,
//   FiUsers,
//   FiUser,
//   FiLayers,
//   FiAlignRight,
// } from "react-icons/fi";

const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(true);
  const collapseClass = " w-24";
  const opacityClass = " hidden";

  return (
    <aside
      className={
        "relative z-10 bg-white shadow-2xl text-slate-600 hidden md:block min-h-screen transition duration-500 delay-300 dark:text-gray-100" +
        (isCollapse ? " w-72" : collapseClass)
      }
    >
      <div className="flex  justify-between px-3 my-4">
        <div className={"flex my-6" + (isCollapse ? null : opacityClass)}>
          <img
            className={"w-12 h-10 m-auto"}
            src={require("../../assets/insalogo.jpg")}
            alt="INSA LOGO"
          />
          <h1 className="py-4 px-2 m-0 text-lg font-extrabold uppercase">
            Service
          </h1>
        </div>
        <button
          className="justify-self-center px-5 py-4"
          onClick={() => {
            setIsCollapse(isCollapse ? false : true);
          }}
        >
          {/* <FiAlignRight className="text-2xl text-[#295dc5]" /> */}
        </button>
      </div>

      <hr className="border-[#c9d8f5] mx-8" />

      <nav className="mt-4 text-sm px-6">
        <p className="py-4 text-xs uppercase text-[#295dc5] tracking-3">MENU</p>
        <ul>
          <li className="rounded-md py-2 hover:bg-[#e0f3ff] hover:text-[#385fc0]">
            <Link className="p-2">
              {/* <FiGrid className="inline text-lg" /> */}
              <span className={"p-5 " + (isCollapse ? null : opacityClass)}>
                Dashboard
              </span>
            </Link>
          </li>
        </ul>
        <p className="py-4 text-xs uppercase text-[#295dc5] tracking-3">
          Users
        </p>
        <ul>
          <li className="rounded-md py-2 hover:bg-[#e0f3ff] hover:text-[#385fc0]">
            <Link className="p-2">
              {/* <FiUser className="inline text-lg" /> */}
              <span className={"p-5 " + (isCollapse ? null : opacityClass)}>
                Users
              </span>
            </Link>
          </li>
          <li className="rounded-md py-2 hover:bg-[#e0f3ff] hover:text-[#385fc0]">
            <Link className="p-2">
              {/* <FiUsers className="inline text-lg" /> */}
              <span className={"p-5 " + (isCollapse ? null : opacityClass)}>
                Employees
              </span>
            </Link>
          </li>
        </ul>
        <p className="py-4 text-xs uppercase text-[#295dc5]">Service</p>
        <ul>
          <li className="rounded-md py-2 hover:bg-[#e0f3ff] hover:text-[#385fc0]">
            <Link to="/dashboard/services" className="p-2">
              {/* <FiLayers className="inline text-lg" /> */}
              <span className={"p-5 " + (isCollapse ? null : opacityClass)}>
                Service
              </span>
            </Link>

            <button
              className={
                "float-right p-1 " + (isCollapse ? null : opacityClass)
              }
            >
              {/* <AiOutlineDown className="text-xs" /> */}
            </button>
            <div className="mx-5 mt-5 text-left hidden">
              <ul className="text-sm" aria-labelledby="dropdownLargeButton">
                <li className="hover:text-black my-3">
                  <Link className="ml-7 py-2">Service Type</Link>
                </li>
                <li className="hover:text-black my-3">
                  <Link className="ml-7 py-2">Requirement</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="rounded-md py-2 hover:bg-[#e0f3ff] hover:text-[#385fc0]">
            <Link className="p-2">
              {/* <BsBuilding className="inline text-lg" /> */}
              <span className={"p-5 " + (isCollapse ? null : opacityClass)}>
                Department
              </span>
            </Link>
          </li>
        </ul>
        <p className="py-4 text-xs uppercase text-[#295dc5]">Client</p>
        <ul>
          <li className="rounded-md py-2 hover:bg-[#e0f3ff] hover:text-[#385fc0]">
            <Link className="p-2">
              {/* <FiFileText className="inline text-lg" /> */}
              <span className={"p-5 " + (isCollapse ? null : opacityClass)}>
                Client Information
              </span>
            </Link>

            <button
              className={
                "float-right p-1 " + (isCollapse ? null : opacityClass)
              }
            >
              {/* <AiOutlineDown className="text-xs" /> */}
            </button>
            <div className="m-5 text-left hidden">
              <ul className="text-sm" aria-labelledby="dropdownLargeButton">
                <li className="hover:text-black">
                  <Link className="ml-7">Client Type</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="rounded-md py-2 hover:bg-[#e0f3ff] hover:text-[#385fc0]">
            <Link className="p-2">
              {/* <BsQuestionOctagon className="inline text-lg" /> */}
              <span className={"p-5 " + (isCollapse ? null : opacityClass)}>
                Client Request
              </span>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="rounded-md py-2 hover:bg-[#e0f3ff] hover:text-[#385fc0]">
            <Link to="/" className="p-2">
              {/* <FiLogOut className="inline text-lg text-red-500" /> */}
              <span className={"p-5 " + (isCollapse ? null : opacityClass)}>
                Log Out
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
