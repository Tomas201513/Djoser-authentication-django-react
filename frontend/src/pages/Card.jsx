import { useState } from "react";
import Authform from "../components/Authform";
import SignUp from "../components/SignUp";
import { Link } from "react-router-dom";

const Card = () => {
  const [authform, setAuthForm] = useState(true);
  return (
    <main className="flex py-4 items-center justify-center h-screen bg-[#ecf2f7] shadow-2xl md:overflow-hidden md:py-24">
      {/* the image section flext-item 1 */}
      <div className="relative p-7 bg-[#0159E8] text-center from-sky-500 to-indigo-500 shrink-1/2 rounded-l-xl min-h-full hidden md:block">
        <img
          src="https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?w=826&t=st=1665383068~exp=1665383668~hmac=28ac229e71ea346700ffcbfcf343641240382db983fae4b27b803adaeefe76bc"
          className="mx-auto max-w-md h-1/4 "
          alt="login"
        />

        {/* Bottom description section */}
        <div className="absolute bottom-14">
          <img
            src={require("../assets/insalogo.jpg")}
            className="rounded-xl w-1/4 mb-2 mx-auto"
            alt="Insa Logo"
          />
          <div>
            <h2 className="font-mono text-2xl font-bold text-white">
              INSA SERVICE
            </h2>
            <h4 className="uppercase tracking-widest text-[#81B2FF]">
              Admin Portal
            </h4>
          </div>
        </div>
      </div>

      {/* the form section flext-item 2 */}
      <div className="relative bg-white p-10 text-center shrink-1/2 grow-0 rounded-r-xl min-h-full">
        {authform ? (
          <Authform title="Sign In" subtitle="Insert credentials" />
        ) : (
          <SignUp title="Sign Up" subtitle="Register here" />
        )}
        <p className="pt-10" hidden={authform === false}>
          Don't have an account yet? &nbsp;&nbsp;&nbsp;
          <Link
            to="/signUp"
            className="decoration-solid hover:text-[#4C94FF] text-[#154c79] underline"
            onClick={() => {
              setAuthForm(false);
            }}
          >
            Sign Up
          </Link>
        </p>
        <p className="pt-10" hidden={authform === true}>
          Already have an account? &nbsp;&nbsp;&nbsp;
          <Link
            to="/login"
            className="decoration-solid hover:text-[#4C94FF] text-[#154c79] underline"
            onClick={() => {
              setAuthForm(true);
            }}
          >
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Card;
