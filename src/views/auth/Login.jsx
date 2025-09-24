import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../../utils/Constants";
import { UserContext } from "../../context/UserContext.jsx";
import Notification from "../../components/notification";
import modlogo from "../../assets/images/web-logo.png";
import footerwave from "../../assets/images/footer-wave.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Loading from "../../components/loading";
import mockApi from "../../utils/mockApi";

const Login = () => {
  let navigate = useNavigate();

  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const json = await mockApi.login({
        username: username,
        password: password,
      });

      Notification.showSuccessMessage("Welcome", "Logged in Successfully");

      localStorage.setItem("user_id", json.id);
      localStorage.setItem("user_name", json.username);
      localStorage.setItem("user_type", json.user_type);
      localStorage.setItem("image", json.image);
      localStorage.setItem("token", json.token.access);
      localStorage.setItem("refresh_token", json.token.refresh);
      localStorage.setItem("userInfo", JSON.stringify(json));

      setUser(json);
      setUsername("");
      setPassword("");
      navigate("/");
    } catch (err) {
      setIsLoading(false);
      Notification.showErrorMessage("Login Failed", err.message || "Invalid credentials");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  });

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen"><Loading/></div>;
  }

  return (
    <div className="min-h-screen bg-customGreen w-full px-4 py-8 flex flex-col">
      {/* Main Content Container */}
      <div className="flex-1 flex items-center justify-center w-full">
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-center w-full max-w-6xl gap-8">
          {/* Left Side - Login Form */}
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <form className="p-8 w-full max-w-md rounded-lg" style={{ 'border': "1px solid #567763", "boxShadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} onSubmit={handleSubmit} >
              <div className="flex justify-center mb-1 text-white text-lg md:text-xl">
                {/* Ministry Of Defence, India */}
                Visitor Management System
              </div>
              <div className="mb-4">
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  type="text"
                  id="username"
                  className="w-full p-2 rounded-lg bg-customFieldGreen text-white"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-6 relative">
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full p-2 rounded-lg bg-customFieldGreen text-white pr-10"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleTogglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex text-white items-center text-sm leading-5"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </button>
              </div>
              <button type="submit" className="w-full text-white p-2 rounded-lg" style={{ backgroundColor: "rgb(15 70 37)" }}>
                Login
              </button>
            </form>
          </div>

          {/* Right Side - Credentials Display Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="max-w-md w-full">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-white text-lg font-semibold mb-3 text-center">
                  🔐 Available Login Credentials
                </h3>
                {/* Admin Section */}
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2 flex items-center">
                    👑 Admin Users (Full Access)
                  </h4>
                  <div className="space-y-1">
                    <div className="bg-white/20 rounded p-2 text-sm">
                      <span className="text-white font-mono">admin</span>
                      <span className="text-gray-200 ml-2">• Full system access</span>
                    </div>
                    <div className="bg-white/20 rounded p-2 text-sm">
                      <span className="text-white font-mono">shah</span>
                      <span className="text-gray-200 ml-2">• Full system access</span>
                    </div>
                    <div className="bg-white/20 rounded p-2 text-sm">
                      <span className="text-white font-mono">sanjeev</span>
                      <span className="text-gray-200 ml-2">• Full system access</span>
                    </div>
                  </div>
                </div>
                {/* Receptionist Section */}
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2 flex items-center">
                    👥 Receptionist Users (Limited Access)
                  </h4>
                  <div className="space-y-1">
                    <div className="bg-white/20 rounded p-2 text-sm">
                      <span className="text-white font-mono">john</span>
                      <span className="text-gray-200 ml-2">• Visitor management</span>
                    </div>
                    <div className="bg-white/20 rounded p-2 text-sm">
                      <span className="text-white font-mono">jane, mike, sarah</span>
                      <span className="text-gray-200 ml-2">• Visitor management</span>
                    </div>
                    <div className="bg-white/20 rounded p-2 text-sm">
                      <span className="text-white font-mono">david, lisa, robert</span>
                      <span className="text-gray-200 ml-2">• Visitor management</span>
                    </div>
                  </div>
                </div>
                {/* Security Guard Section */}
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2 flex items-center">
                    🔒 Security Guards (Minimal Interface)
                  </h4>
                  <div className="space-y-1">
                    <div className="bg-white/20 rounded p-2 text-sm">
                      <span className="text-white font-mono">security1</span>
                      <span className="text-gray-200 ml-2">• Access control</span>
                    </div>
                    <div className="bg-white/20 rounded p-2 text-sm">
                      <span className="text-white font-mono">security2</span>
                      <span className="text-gray-200 ml-2">• Access control</span>
                    </div>
                  </div>
                </div>
                {/* Password Info */}
                <div className="mt-4 pt-3 border-t border-white/20">
                  <div className="text-center">
                    <p className="text-white/80 text-sm">
                      🔑 <strong>Password:</strong> Any password works
                    </p>
                    <p className="text-white/60 text-xs mt-1">
                      Use any username above with any password to login
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Wave */}
      <div className="mt-8 flex-shrink-0">
        <img src={footerwave} alt="Wave" className="w-full" />
      </div>
    </div>
  );
};

export default Login;



