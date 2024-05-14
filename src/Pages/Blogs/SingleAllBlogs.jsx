/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { BiSolidCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const SingleAllBlogs = ({ blogs }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, category, short_description, imageurl } = blogs;

  const handleWishList = async () => {
    const wishtitle = title;
    const wishCat = category;
    const wishShort_des = short_description;
    const wishImg = imageurl;
    const email = user?.email;
    const wishId  = _id;

    const allwishData = {
      wishtitle,
      wishCat,
      wishShort_des,
      wishImg,
      email,
      wishId
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/wishlist`,
        allwishData
      );
      Swal.fire({
        icon: "success",
        title: "Added in wishlist",
        text: "Your selected card added in the wish list",
        
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You data not uploaded!",
      });
    }
  };

  return (
    <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 border border-blue-300">
      <img
        className="object-cover object-center w-full h-56"
        src={imageurl}
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <BiSolidCategory className="text-white text-3xl" />

        <h1 className="mx-3 text-lg font-semibold text-white">{category}</h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">
          {short_description}
        </p>

        <div className="flex gap-4 justify-between">
          <Link to={`/blogs/${_id}`} className=" w-full">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-3 bg-blue-500 hover:bg-blue-700 text-white w-full rounded-md">
              Show Details
            </motion.button>
          </Link>

          <button onClick={handleWishList} className="w-full">
            <motion.button
              whileHover={{
                scale: 1.05,
                borderColor: "#ff9900",
                color: "#ff9900",
              }}
              whileTap={{ scale: 0.95 }}
              className="py-[10px] border-2 border-blue-500 w-full rounded-md hover:border-orange-500 hover:bg-orange-500 transition-all hover:text-white">
              Add Wishlist
            </motion.button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleAllBlogs;
