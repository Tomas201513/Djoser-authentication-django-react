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
        `http://127.0.0.1:8000/auth/users/activation/`,
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
      <div>
        <img
          // src={require("../assets/insalogo.jpg")}
          alt="Insa Logo"
        />
      </div>
      <div >
        <h5 >
          Activate Your Account
        </h5>
        <p >
          Stay up to date and move w`ork forward with INSA Service
        </p>
        <div >
          <button
            onClick={activeClick}
          >
            {isLoading ? (<></>
              // <ImSpinner3 className="animate-spin h-6 w-6"></ImSpinner3>
            ) : (<></>
              // <MdOutlineVerified></MdOutlineVerified>
            )}
            <div >
              <div >
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
