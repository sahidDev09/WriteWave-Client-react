import { Link, NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import stockProfile from "../assets/profile.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
    const resNav = document.querySelector(".mobile-nav");
    resNav?.classList.toggle("top-[9%]");
  };

  const handlelogOut = () => {
    toast.error("Logged out");
    logOut();
  };

  return (
    <div className="flex justify-between items-center container mx-auto p-2 md:p-0">
      <div>
        <img
          className=" md:w-56 w-32"
          src="https://i.ibb.co/Kh3jbRw/SCR-20240510-nyxu.png"
          alt=""
        />
      </div>
      <div className="mobile-nav lg:static absolute lg:bg-transparent bg-gray-200 md:min-h-fit min-h-[50vh]  left-0 top-[-100%] w-full lg:w-auto items-center lg:px-0 px-5 pt-10 lg:p-0">
        <ul className="flex lg:flex-row flex-col lg:gap-8 gap-8 text-md ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/addblog">Add Blog</NavLink>
          </li>
          <li>
            <NavLink to="/allblogs">All Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/featuredblogs">Featured Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/wishlist">Wishlist</NavLink>
          </li>
        </ul>
      </div>
      <div className=" flex items-center gap-3">
        {user ? (
          <div className=" flex items-center gap-4">
            <div className=" md:w-14 md:h-14 w-10 h-10 rounded-full flex items-center gap-3">
              <img
                referrerPolicy="no-referrer"
                className=" w-full h-full rounded-full border border-blue-400 p-1 object-cover"
                src={user?.photoURL || stockProfile}
                alt=""
              />
            </div>
            <button
              onClick={handlelogOut}
              className=" bg-blue-500 text-white rounded-full py-2 px-5">
              Sign out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className=" bg-blue-500 text-white rounded-full py-2 px-5">
              Sign-in
            </button>
          </Link>
        )}

        <div className=" lg:hidden cursor-pointer" onClick={handleToggle}>
          {showMenu ? (
            <IoClose className=" text-3xl"></IoClose>
          ) : (
            <LuMenu className=" text-3xl"></LuMenu>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Navbar;
