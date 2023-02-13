import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";

import Button from "./elements/Button";
// import Input from "./elements/Input";

const ConfirmPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const { uid, token } = useParams();

  const resetPassword = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setIsLoading(true);
    try {
      const res = await axios.post(
        `http://127.0.0.1:9005/auth/users/reset_password_confirm/`,
        {
          uid: uid,
          token: token,
          new_password: password,
          re_new_password: confirmPassword,
        },
        config
      );

      setIsDone(true);
      console.log(res);
      setConfirmPassword("");
      setPassword("");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
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
          Reset Your Password
        </h5>
        <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <form onSubmit={resetPassword}>
            {/* <Input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            /> */}
            <button
              type="submit"
              className="bg-transparent hover:bg-[#8b5781] text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConfirmPassword;
