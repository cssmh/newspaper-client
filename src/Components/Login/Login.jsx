import "tailwindcss/tailwind.css";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
  };
  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%] m-2">
        <form onSubmit={handleLogin} className="w-full md:w-3/4">
          <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
            <h1 className="font-semibold text-xl md:text-5xl text-gray-600 m-2">
              Login to your account
            </h1>
            <h1 className="text-sm font-medium text-gray-600 m-2">
              Login using Social accounts
            </h1>
            <div className="flex items-center lg:text-2xl text-center space-x-5 m-2">
              <a href="#">
                <FaGoogle />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
            </div>
            <h1 className="text-sm font-medium text-gray-600 m-2">OR</h1>
          </div>
          <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
          </div>
          <div className="text-center mt-7">
            <button className="px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-l from-blue-400 to-emerald-400 font-medium m-2 mb-6">
              Sign In
            </button>
          </div>
        </form>
        <div className="h-[100%] w-full md:w-1/3 bg-gradient-to-l from-blue-400 to-emerald-400 items-center flex justify-center">
          <div className="text-white text-base font-semibold text-center my-10 space-y-2 m-2">
            <h1 className="text-5xl">New Here?</h1>
            <h1>Sign Up and discover new opportunities here</h1>
            <Link to="/register">
              <button className="mt-2 bg-white rounded-2xl px-4 text-emerald-400 py-1">
                SignUp
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
