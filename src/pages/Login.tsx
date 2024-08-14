/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authClient from "../services/authService";
import Logo from "../assets/logo.png";
import { useUser } from "../context/UserContext";
import CoverImg from "../assets/z-auth-bg.jpg";

const Login = () => {
  const { setUserType } = useUser();
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setIsLogin] = useState<boolean>(
    !!sessionStorage.getItem("authToken")
  );

  const navigate = useNavigate();
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    return () => {
      if (token && isLogin) {
        navigate("/dashboard", { replace: true });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const email = formData.get("email");
      const password = formData.get("password");

      if (email && password) {
        setIsLoading(true);
        try {
          const response = await authClient.post("/auth/login", {
            userName: email,
            password: password,
          });
          const token = response.data.auth_token;
          const userData = response.data._user_data;
          if (token) {
            sessionStorage.setItem("authToken", token);
            sessionStorage.setItem("userData", JSON.stringify(userData));
            setUserType(userData.userType);
            navigate("/dashboard");
          } else {
            setLoginError("The email or password you entered is invalid.");
          }
        } catch (error) {
          setLoginError("An error occurred while logging in.");
          setIsLoading(false);
          console.error("Login error:", error);
        }
        setIsLoading(false);
      } else {
        setLoginError("The email or password you entered is invalid.");
      }
    } catch (error) {
      setIsLoading(false);

      setLoginError("Invalid email or password.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
        <img
          src={CoverImg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            backgroundColor: "#01020799",
            width: "90vw",
            maxWidth: "538px",
            height: "auto",
            padding: "64px 80px 44px",
            borderRadius: "16px",
            position: "relative",
            transition: "all 0.3s ease-in",
          }}
          className=""
        >
          <div className="flex items-center justify-between pl-2 pr-2">
            <img src={Logo} width="40" height="40" alt="Logo 01" />
            <h1 className="text-2xl font-bold text-center mr-3 text-blue-500 uppercase-text">
              AGENT ASSIST MONITOR
            </h1>
          </div>
          <span className="text-white bg-orange-900 pl-1 pr-1 flex justify-center rounded-lg mt-3">
            {loginError}
          </span>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm mt-3 font-medium text-gray-400 dark:text-gray-300 mb-2">
                User Name
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="shadow-sm bg-transparent text-white rounded-full w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your user name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow-sm bg-transparent text-white rounded-full w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoading ? "Logging In..." : "Login"}
            </button>
          </form>
          <small className="text-white pt-1 flex justify-center rounded-lg mt-3">
            © 2024 Zaion | All rights reserved
          </small>
        </div>
      </div>
    </>
  );
};

export default Login;
