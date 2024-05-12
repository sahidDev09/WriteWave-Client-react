/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { BiSolidCategory } from "react-icons/bi";

const RecentSingleCard = ({ blogs }) => {
  const { title, category, short_description, imageurl } = blogs;

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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-3 bg-blue-500 hover:bg-blue-700 text-white w-full rounded-md">
            Show Details
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: "#ff9900",
              color: "#ff9900",
            }}
            whileTap={{ scale: 0.95 }}
            className="py-3 border-2 border-blue-500 w-full rounded-md hover:border-orange-500 hover:bg-orange-500 transition-all hover:text-white">
            Add Wishlist
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default RecentSingleCard;
