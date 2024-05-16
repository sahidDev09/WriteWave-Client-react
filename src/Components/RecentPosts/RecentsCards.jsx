/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import axios from "axios";
import SingleAllBlogs from "../../Pages/Blogs/SingleAllBlogs";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";

const getData = async () => {
  const { data } = await axios(`${import.meta.env.VITE_API_URL}/blogs`);
  return data;
};

const RecentsCards = () => {
  const {
    data: blogs = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: "recent",
  });

  if (isLoading) {
    return (
      <ReactLoading
        type="bars"
        color="black"
        height={"5%"}
        className="flex mx-auto mt-20"
        width={"5%"}></ReactLoading>
    );
  }

  if (isError || error) {
    return toast.error(error.message);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full container mx-auto">
      <p className="text-center my-8 text-gray-500 md:w-[80%] flex mx-auto">
        Discover Fresh Perspectives: Explore Our Recent Blog Posts! Delve into a
        treasure trove of insights and stories with our latest blog updates.
        From captivating tales to expert opinions, there's something for every
        curious mind. Stay informed, entertained, and inspired – dive into our
        recent blog section today!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.slice(0, 6).map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <SingleAllBlogs blogs={blog}></SingleAllBlogs>
          </motion.div>
        ))}
      </div>
      <Link to="/allblogs">
        <button className=" bg-blue-500 p-2 text-white rounded-md mt-8 flex mx-auto">
          See all Blogs
        </button>
      </Link>
    </motion.div>
  );
};

export default RecentsCards;
