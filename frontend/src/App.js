import { Routes, Route, Outlet } from "react-router-dom";
import Activate from "./components/Activate";
import Error404 from "./components/Error404";
import PasswordReset from "./components/PasswordReset";
import ConfirmPassword from "./components/ConfirmPassword";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./components/SignUp";
import Authform from "./components/Authform";
import { SnackbarProvider } from "notistack";
import PrivateRoute from "./utils/PrivateRoute";
import { CssBaseline } from "@mui/material";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <AuthProvider>
          <Routes>
            <Route path="/login" component={Authform} element={<Authform />} />
            <Route path="/signup" component={SignUp} element={<SignUp />} />
            <Route path="passwordReset" element={<PasswordReset />} />

            <Route path="activate/:uid/:token" element={<Activate />} />
            <Route
              path="password/reset/confirm/:uid/:token"
              element={<ConfirmPassword />}
            />
            <Route path="*" element={<Error404 />} />

            <Route path="/main" element={<PrivateRoute />}>
              {/* <Route index element={<Navigate to="/app" />} /> */}
              <Route path="app" element={<Outlet />}>
                <Route path="dashboard" element={<Dashboard />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </SnackbarProvider>
    </>
  );
};

export default App;
