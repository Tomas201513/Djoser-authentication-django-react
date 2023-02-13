import React from "react";

const Button = ({ title, type, icon }) => {
  return (
    <button
      className="bg-[#295dc5] rounded-md text-white px-3 py-2 hover:bg-grey-400 w-full my-4 hover:bg-[#4C94FF] transition duration-3000 delay-150"
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
