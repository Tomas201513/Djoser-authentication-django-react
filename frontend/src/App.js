import { Routes, Route, Navigate, Outlet, Form } from "react-router-dom";
import MiniDrawer from "./pages/MiniDrawer";
// import Services from "./components/Services";
import Activate from "./components/Activate";
import Error404 from "./components/Error404";
import PasswordReset from "./components/PasswordReset";
import ConfirmPassword from "./components/ConfirmPassword";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./components/SignUp";
import Authform from "./components/Authform";
import { SnackbarProvider } from "notistack";
import PrivateRoute from "./utils/PrivateRoute";
// import Tablee from "./pages/Tablee";
import { CssBaseline, Table } from "@mui/material";
// import Crud from "./pages/Crud";
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
            <Route path="/" element={<PrivateRoute />}>
              {/* <Route path="/tablee" element={<Tablee />} /> */}
              <Route path="/" element={<MiniDrawer />}>
                <Route path="/form" element={<Form />} />

                {/* <Route path="/table" element={<Crud />} />  */}
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </SnackbarProvider>
    </>
  );
};

export default App;

//  <>
//    <CssBaseline />
//    <SnackbarProvider
//      maxSnack={3}
//      anchorOrigin={{
//        vertical: "top",
//        horizontal: "center",
//      }}
//    >
//      <AuthProvider>
//        <Routes>
//          <Route path="/login" component={Authform} element={<Authform />} />
//          <Route path="/signup" component={SignUp} element={<SignUp />} />
//          <Route path="passwordReset" element={<PasswordReset />} />

//          <Route path="activate/:uid/:token" element={<Activate />} />
//          <Route
//            path="password/reset/confirm/:uid/:token"
//            element={<ConfirmPassword />}
//          />
//          <Route path="*" element={<Error404 />} />

//          <Route path="/app" element={<PrivateRoute />}>
//            {/* <Route index element={<Navigate to="/app" />} /> */}
//            <Route path="MiniDrawer" element={<Outlet />}>
//              <Route path="ola" element={<MiniDrawer />} />
//            </Route>
//          </Route>
//        </Routes>
//      </AuthProvider>
//    </SnackbarProvider>
//  </>;
