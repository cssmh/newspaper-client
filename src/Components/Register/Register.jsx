import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [passSuccess, setPassSuccess] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");

  // Password validation function
  const validatePassword = (password) => {
    if (password === "") {
      setPassError("");
      setPassSuccess("");
    } else if (password.length < 6) {
      setPassError("Make your password at least 6 characters long");
      setPassSuccess("");
    } else if (!/[A-Z]/.test(password)) {
      setPassError("Add at least one uppercase letter");
      setPassSuccess("");
    } else {
      setPassError("");
      setPassSuccess("✔️ Good job! Strong password");
    }
  };

  // Confirm password validation function
  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword === "") {
      setConfirmPassError("");
    } else if (password === "") {
      setConfirmPassError("Insert your password first");
    } else if (confirmPassword !== password) {
      setConfirmPassError("Passwords do not match");
    } else {
      setConfirmPassError("");
      if (!passError && confirmPassword === password) {
        setPassSuccess("✔️ Good job! Passwords match and are strong");
      }
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);
    // Re-validate confirm password when main password changes
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
    validateConfirmPassword(confirmPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");
    console.log(name, photoURL, email, password, confirmPassword);
  };
  
  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%] m-2">
        <form onSubmit={handleRegister} className="w-full md:w-3/4">
          <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
            <h1 className="font-semibold text-xl md:text-5xl text-gray-600 m-2">
              Register a New account
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center m-2 space-y-4 md:space-y-6">
            <div>
              <input
                type="name"
                name="name"
                placeholder="User Name"
                className="bg-gray-100 rounded-lg px-3 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
            <div>
              <input
                type="text"
                name="photoURL"
                placeholder="photoURL"
                className="bg-gray-100 rounded-lg px-3 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-gray-100 rounded-lg px-3 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handlePasswordChange}
                className="bg-gray-100 rounded-lg px-3 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
              <p
                className={`${
                  passError.length > 0 ? "text-red-500" : "text-green-500"
                } text-[16px] font-normal mt-1 ml-3`}
              >
                {passError.length > 0 ? passError : passSuccess}
              </p>
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleConfirmPasswordChange}
                className="bg-gray-100 rounded-lg px-3 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
              <p className="text-red-500 text-[16px] font-normal mt-1 ml-3">
                {confirmPassError}
              </p>
            </div>
          </div>
          <div className="text-center mt-7">
            <button className="px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-l from-blue-400 to-emerald-400 font-medium m-2 mb-6">
              Sign Up
            </button>
          </div>
        </form>
        <div className="h-[100%] w-full md:w-1/3 bg-gradient-to-l from-blue-400 to-emerald-400 items-center flex justify-center">
          <div className="text-white text-base font-semibold text-center my-10 space-y-2 m-2">
            <h1 className="text-5xl">Already have Account?</h1>
            <h1>Sign In and discover new opportunities here</h1>
            <Link to="/login">
              <button className="mt-2 bg-white rounded-2xl px-4 text-emerald-400 py-1">
                SignIn
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
