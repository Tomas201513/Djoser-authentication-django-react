import {  Routes, Route, Navigate, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Services from "./components/Services";
import Activate from "./components/Activate";
import Error404 from "./components/Error404";
import PasswordReset from "./components/PasswordReset";
import ConfirmPassword from "./components/ConfirmPassword";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./components/SignUp";
import Authform from "./components/Authform";
import { SnackbarProvider } from "notistack";
<<<<<<< HEAD

import PrivateRoute from "./utils/PrivateRoute";
=======
import PrivateRoute from "./utils/PrivateRoute";
import { CssBaseline } from "@mui/material";
>>>>>>> 9efaf66b95111b182e2fa3cd0974f22fdfd05349
const App = () => {
  return (
    <>
      <CssBaseline/>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
          <AuthProvider>
            <Routes>
              <Route path="*" element={<Error404 />} />
              <Route path="activate/:uid/:token" element={<Activate />} />
              <Route
                path="password/reset/confirm/:uid/:token"
                element={<ConfirmPassword />}
              />
              <Route
                path="/login"
                component={Authform}
                element={<Authform />}
              />
              <Route path="/signup" component={SignUp} element={<SignUp />} />
              <Route path="passwordReset" element={<PasswordReset />} />
<<<<<<< HEAD

              <Route path="/app" element={<PrivateRoute />}>
                {/* <Route index element={<Navigate to="/app" />} /> */}
                <Route path="dashboard" element={<Outlet />}>
                  <Route path="ola" element={<Dashboard />} />
                  </Route>
              </Route>
     
=======
              <Route path="/" element={<Dashboard />} />
>>>>>>> 9efaf66b95111b182e2fa3cd0974f22fdfd05349
            </Routes>
          </AuthProvider>
      </SnackbarProvider>
    </>
  );
};

export default App;
