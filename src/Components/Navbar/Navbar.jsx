import { Link, NavLink } from "react-router-dom";
import defaultPhoto from "../../assets/default.jpg";
import article from "../../assets/article.jpg";
import { useEffect, useState } from "react";
import useAuth from "../../useCustomHook/useAuth";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { user, logOut } = useAuth();

  const handleSignOut = () => {
    logOut().then().catch();
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) setSticky(true);
      else setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li className="font-bold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to={"/add-articles"}>Add Articles</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to={"/all-articles"}>All Articles</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to={"/subscription"}>Subscription</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to={"/my-articles"}>My Articles</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to={"/premium-articles"}>Premium Articles</NavLink>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0">
      <div
        className={`navbar xl:px-24 py-0 ${
          sticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>

          <Link to={"/"} className="hidden md:block">
            <img src={article} className="h-16" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-2">{navItems}</ul>
        </div>

        <div className="navbar-end gap-1">
          {/* search */}

          {/* <input type="text" placeholder="Search Here" className={`input input-bordered w-24 md:w-auto`}/> */}

          {/* btn */}
          {/* <a className="btn bg-green rounded-full px-6 flex items-center gap-2"><CiLogin /> Login</a> */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user && user?.photoURL ? user?.photoURL : defaultPhoto}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user?.email ? (
                <>
                  <li>
                    <Link to={"/my-profile"}>Profile</Link>
                  </li>
                  <li>
                    <button onClick={handleSignOut}>Logout</button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
