/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import axios from "axios";

import Swal from "sweetalert2";

const BlogDetails = () => {
  const blogsDetails = useLoaderData();

  const { user } = useContext(AuthContext);

  const {
    _id,
    title,
    category,
    short_description,
    imageurl,
    long_description,
    writerEmail,
    writerName,
    writerProfile,
  } = blogsDetails;

  const handleComment = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (user?.email === writerEmail) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You can not comment your own blog!",
      });
    }

    const comments = form.comments.value;
    const blogID = _id;
    const owner_name = user?.displayName;
    const owner_prfile = user?.photoURL;

    const commentsData = { comments, blogID, owner_name, owner_prfile };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/comments`,
        commentsData
      );
      Swal.fire({
        icon: "success",
        title: "Comments send",
        text: "Your comment is active",
      });
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" container mx-auto mt-14 p-2 md:p-0">
      <Helmet>
        <title>WriteWave | Blog_Details</title>
      </Helmet>
      <h1 className=" md:text-4xl font-bold bg-blue-100 p-2 rounded-md">
        {title}
      </h1>
      <div className="md:flex gap-5 my-8 w-[100%]">
        <div className=" md:w-[50%]">
          <img className=" h-[65%] object-cover" src={imageurl} alt="" />
          <div className="">
            <div className=" h-[25%]">
              <div className="flex gap-2 items-center mt-5">
                <img
                  className="w-10 h-10 rounded-full p-1 border border-orange-500"
                  src={user?.photoURL}
                  alt=""
                />
                <div>
                  <h1>{user?.displayName}</h1>
                  <h1 className=" text-gray-600">
                    Comment will send from this user
                  </h1>
                </div>
              </div>
              <div className=" flex flex-col my-4">
                <form onSubmit={handleComment} className=" flex flex-col mb-10">
                  <label htmlFor="">Message</label>
                  <textarea
                    name="comments"
                    required
                    className=" border-2 h-full"
                    rows={4}
                    placeholder=" Write your valueable comments..."></textarea>
                  <input
                    type="submit"
                    value="Send comment"
                    className=" hover:bg-blue-700 cursor-pointer bg-blue-500 items-center flex p-3 w-fit my-2 text-white rounded-md"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%]">
          <div>
            <h1 className=" text-lg font-semibold text-blue-400">
              Writer Information
            </h1>
            <hr className=" my-2" />
            <div className=" flex gap-4 items-center bg-slate-200 p-3 rounded-xl">
              <img
                className=" w-16 h-16 rounded-2xl"
                src={writerProfile}
                alt=""
              />
              <div>
                <h1 className=" font-semibold">
                  Name :
                  <span className=" text-blue-500 font-normal">
                    {writerName}
                  </span>
                </h1>
                <h1 className=" font-semibold">
                  Email :
                  <span className=" text-gray-500 font-normal">
                    {writerEmail}
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <h1 className="text-lg font-semibold text-orange-400 my-2">
            Blog Details
          </h1>
          <hr className=" my-2" />
          <div className=" flex flex-col gap-2">
            <h1 className=" font-semibold">
              Category :<span className=" font-normal ml-1">{category}</span>
            </h1>
            <div>
              <h1 className=" font-semibold mb-2">
                Short Details:
                <span className=" text-gray-600 font-normal">
                  {short_description}
                </span>
              </h1>
              <div className=" bg-slate-200 p-3 rounded-md">
                <h1 className=" font-semibold">
                  Full Details:
                  <span className=" mr-1 font-normal text-gray-500 line-clamp-3 md:line-clamp-none">
                    {long_description}
                  </span>
                </h1>
              </div>

              {/* add conditional button */}
  
              {user?.email === writerEmail && (
                <Link to={`/update/${_id}`}>
                  <button className=" w-full bg-orange-500 hover:bg-orange-700 p-4 text-white rounded-md my-10">
                    Update Blog
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
