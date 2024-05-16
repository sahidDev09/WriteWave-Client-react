import axios from "axios";

import SingleAllBlogs from "./SingleAllBlogs";
import { useQuery } from "@tanstack/react-query";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const getData = async () => {
  const { data } = await axios(`${import.meta.env.VITE_API_URL}/blogs`);
  return data;
};

const AllBlogs = () => {
  const {
    data: blogs = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: "blogs",
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
    <div className=" container mx-auto my-10">
       <Helmet>
          <title>WriteWave | All blogs</title>
        </Helmet>
      <div className=" flex items-center gap-5">
        <label className=" rounded-xl input input-bordered flex items-center gap-2 border-2 border-blue-300 bg-slate-100 py-2 md:w-[50%] my-5">
          <input
            type="text"
            className="grow px-2 outline-none bg-transparent"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-10 h-10 opacity-70 mr-2">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <select
          name="category"
          id="category"
          className="border p-2 py-4 rounded-md bg-green-600 text-white">
          <option selected disabled>
            Sort by
          </option>
          <option value="Study">Study</option>
          <option value="Traveling">Traveling</option>
          <option value="News">News</option>
          <option value="Technology">Technology</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog, index) => (
          <SingleAllBlogs key={index} blogs={blog}></SingleAllBlogs>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
