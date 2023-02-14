import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";


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
        `http://127.0.0.1:8000/auth/users/reset_password_confirm/`,
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
          // src={require("../assets/insalogo.jpg")}
          alt="Insa Logo"
        />
      </div>
      <div >
        <h5 >
          Reset Your Password
        </h5>
        <div >
          <form onSubmit={resetPassword}>
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="submit"
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
