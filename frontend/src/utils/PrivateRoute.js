import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useContext(AuthContext);
  console.log(user);
  return !user ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoute;
