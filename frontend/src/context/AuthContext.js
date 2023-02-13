import axios from "axios";
import jwt_decode from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";

import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const location = useLocation();

  let [loading, setLoading] = useState(true);
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );

  const navigate = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("http://127.0.0.1:9005/auth/jwt/create", {
        email: e.target[0].value,
        password: e.target[1].value,
      });

      if (response.status === 200) {
        setAuthTokens(response.data);
        // console.log(response.data.access);
        setUser(jwt_decode(response.data.access));
        localStorage.setItem("authTokens", JSON.stringify(response.data));
        navigate("/");
      } else {
        console.error(response.data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  let logoutUser = (parent) => {
    const publicRoutes = ["login", "register", "activate", "password"];
    const route = location.pathname.split("/");

    if (!publicRoutes.includes(route[1])) {
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem("authTokens");

      return navigate("/login");
    }
    if (parent) {
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem("authTokens");
      navigate("/login");
    }
  };

  useEffect(() => {
    try {
      if (authTokens) {
        console.log(authTokens.refresh);
        setUser(jwt_decode(authTokens.refresh));

        console.log("Userrrrrrrrrrrrrrrrrrrr", user);
      } else {
        logoutUser();
      }
      setLoading(false);
    } catch (error) {
      console.error("Errorrrrrrrrrrrrrrrrrrrrrrrrrrr", error);
    }
  }, [authTokens, loading]);

  let contextData = {
    user: user,
    authTokens: authTokens,
    setUser: setUser,
    setAuthTokens: setAuthTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
