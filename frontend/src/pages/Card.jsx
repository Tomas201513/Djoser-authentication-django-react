import { useState } from "react";
import Authform from "../components/Authform";
import SignUp from "../components/SignUp";
import { Link } from "react-router-dom";

const Card = () => {
  const [authform, setAuthForm] = useState(true);
  return (
    <>{authform ? (
      <Authform title="Sign In" subtitle="Insert credentials" />
    ) : (
      <SignUp title="Sign Up" subtitle="Register here" />
    )}
      <p className="pt-10" hidden={authform === false}>
        Don't have an account yet? &nbsp;&nbsp;&nbsp;
        <Link
          to="/signup"
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
      
        
    </>
  )
};
//       {/* the form section flext-item 2 */}
//       <div className="relative bg-white p-10 text-center shrink-1/2 grow-0 rounded-r-xl min-h-full">
//         {authform ? (
//           <Authform title="Sign In" subtitle="Insert credentials" />
//         ) : (
//           <SignUp title="Sign Up" subtitle="Register here" />
//         )}
//         <p className="pt-10" hidden={authform === false}>
//           Don't have an account yet? &nbsp;&nbsp;&nbsp;
//           <Link
//             to="/signUp"
//             className="decoration-solid hover:text-[#4C94FF] text-[#154c79] underline"
//             onClick={() => {
//               setAuthForm(false);
//             }}
//           >
//             Sign Up
//           </Link>
//         </p>
//         <p className="pt-10" hidden={authform === true}>
//           Already have an account? &nbsp;&nbsp;&nbsp;
//           <Link
//             to="/login"
//             className="decoration-solid hover:text-[#4C94FF] text-[#154c79] underline"
//             onClick={() => {
//               setAuthForm(true);
//             }}
//           >
//             Sign In
//           </Link>
//         </p>
//       </div>
//     </main>
//   );
// };

export default Card;
