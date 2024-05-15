/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateBlogs = () => {
  const { user } = useContext(AuthContext);

  const blog = useLoaderData();

  const {
    _id,
    title,
    short_description,
    long_description,
    imageurl,
    category,
  } = blog;

  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );

  const handleAdd = async (e) => {
    e.preventDefault();

    const form = e.target;
    const writerName = form.writerName.value;
    const writerEmail = form.writerEmail.value;
    const writerProfile = user?.photoURL;
    const title = form.title.value;
    const imageurl = form.imageurl.value;
    const category = form.category.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const long_des_count = long_description.length;
    const date = currentDate;

    const allAddedInfo = {
      writerEmail,
      writerName,
      writerProfile,
      title,
      imageurl,
      category,
      short_description,
      long_description,
      long_des_count,
      date,
    };

    if (category === "Select Category") {
      toast.warning("Please Select catergory for this blog");
      return;
    }

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/blogs/${_id}`,
        allAddedInfo
      );
      console.log(data);
      Swal.fire({
        title: "Published",
        text: "Your Blogs Published successfully!",
        icon: "success",
      });
      form.reset();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Opps! something is wrong.",
        icon: "error",
      });
    }
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-slate-200 my-10 rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Update Blog
      </h2>

      <form onSubmit={handleAdd}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="writerName"
              defaultValue={user?.displayName}
              readOnly
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="emailAddress">
              Email Address
            </label>
            <input
              id="emailAddress"
              type="email"
              name="writerEmail"
              defaultValue={user?.email}
              readOnly
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              defaultValue={title}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="photo">
              PhotoURL
            </label>
            <input
              id="photo"
              type="url"
              name="imageurl"
              defaultValue={imageurl}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div className="flex flex-col gap-2 ">
            <label className="text-gray-700 " htmlFor="category">
              Category
            </label>
            <select
              name="category"
              id="category"
              defaultValue={category}
              className="border p-2 rounded-md">
              <option selected disabled>
                Select Category
              </option>
              <option value="Study">Study</option>
              <option value="Traveling">Traveling</option>
              <option value="News">News</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="short_description">
              Short Description
            </label>
            <input
              id="short_description"
              type="text"
              defaultValue={short_description}
              name="short_description"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div className=" col-span-2">
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="long_description">
              Full Description
            </label>
            <textarea
              id="long_description"
              type="text"
              rows={6}
              name="long_description"
              defaultValue={long_description}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Update Blog
          </button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default UpdateBlogs;
