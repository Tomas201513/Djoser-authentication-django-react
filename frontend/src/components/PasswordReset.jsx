import { useState, useEffect } from "react";
import axios from "axios";
// import Input from "./elements/Input";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(email));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        axios
          .post("http://127.0.0.1:9005/auth/users/reset_password/", {
            email,
          })
          .then((res) => {
            console.log(res);
            setEmail("");
          })
          .catch((err) => {
            console.log(err);
          });
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = (event) => {
    event.persist();
    setEmail(event.target.value);
  };

  const validate = (email) => {
    let err = {};

    if (!email) {
      err.email = "Email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      err.email = "Invalid email address";
    }

    return err;
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
        <p class=" text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Enter your email we will send you reset password
        </p>
        <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <form onSubmit={handleSubmit}>
            {/* <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={handleChange}
              error={errors.email}
            /> */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-transparent hover:bg-[#8b5781] text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded"
              >
                {isSubmitting ? "Sending email..." : "Reset"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
