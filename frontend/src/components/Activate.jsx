import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { MdOutlineVerified } from "react-icons/md";
// import { ImSpinner3 } from "react-icons/im";

const Activate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { uid, token } = useParams();
  const navigate = useNavigate();

  const activeClick = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    await axios
      .post(
        `http://127.0.0.1:9005/auth/users/activation/`,
        {
          uid,
          token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };
  return (
    <>
      <div className="relative mt-12">
        <img
          src={require("../assets/insalogo.jpg")}
          className="rounded-md w-1/6 mx-auto"
          alt="Insa Logo"
        />
      </div>
      <div class="w-auto text-center bg-white rounded-lg  shadow-sm sm:p-2 dark:bg-gray-100 dark:border-gray-200 animate__animated animate__zoomIn">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Activate Your Account
        </h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Stay up to date and move work forward with INSA Service
        </p>
        <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <button
            onClick={activeClick}
            class="w-full zoom-in-out-box sm:w-auto bg-[#8b5781]  hover:bg-[#8b5781] focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            {isLoading ? (<></>
              // // <ImSpinner3 className="animate-spin h-6 w-6"></ImSpinner3>
            ) : (<></>
              // <MdOutlineVerified></MdOutlineVerified>
            )}
            <div class="ml-1 text-center ">
              <div class=" font-sans text-sm font-semibold">
                {isLoading ? "Activating..." : "Activate Now"}
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Activate;
