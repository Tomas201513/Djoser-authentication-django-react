import { BrowserRouter, Routes, Route } from "react-router-dom";

import Card from "./pages/Card";
import Dashboard from "./pages/Dashboard";
import Services from "./components/Services";
import Activate from "./components/Activate";
import Error404 from "./components/Error404";
import PasswordReset from "./components/PasswordReset";
import ConfirmPassword from "./components/ConfirmPassword";

import { AuthProvider } from "./context/AuthContext";
import SignUp from "./components/SignUp";

import Authform from "./components/Authform";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* <Route path="*" element={<Error404 />} />
            <Route path="activate/:uid/:token" element={<Activate />} />
            <Route
              path="password/reset/confirm/:uid/:token"
              element={<ConfirmPassword />}
            /> */}
            <Route path="/login" component={Authform} element={<Card />} />
            <Route path="signup" component={SignUp} element={<Card />} />
            <Route path="passwordReset" element={<PasswordReset />} />
            {/* <Route path="/" element={<Dashboard />}>
              <Route path="services" element={<Services />} />
            </Route> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
