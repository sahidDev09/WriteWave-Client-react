import { MdAddPhotoAlternate } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider";
import regiLottie from "../../assets/regi_lottie.json";
import Lottie from "lottie-react";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const from = "/";

  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;

    // Password validation

    if (password.length < 6) {
      toast.warning("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.warning("Password should have at least one uppercase character");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.warning("Password should have at least one lowercase character");
      return;
    } else if (!/\d/.test(password)) {
      toast.warning("Password should have at least one numeric character");
      return;
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      toast.warning("Password should have at least one special character");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(fullName, image).then(() => {
          toast.success("User created successfully");
          setTimeout(() => {
            navigate(from);
          }, 1000);
        });
      })
      .catch((error) => {
        toast.error(error.message + "Something went wrong");
      });
  };

  return (
    <div className="register-container">
      <div className="container mx-auto lg:px-40 md:px-10 lg:py-8 mainLogin p-2 md:p-0">
        <Helmet>
          <title>WriteWave | Register</title>
        </Helmet>
        <div className="bg-slate-200 grid lg:grid-cols-2 rounded-xl">
          <div className="flex flex-col gap-3 p-10 justify-between">
            <h1 className="text-3xl font-bold text-center mb-4">
              Create Account
            </h1>
            <div className="flex flex-col gap-3">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3">
                <label htmlFor="username" className="ml-4">
                  Username
                </label>
                <label className="bg-white flex items-center justify-between gap-2 rounded-full py-4 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    id="username"
                    name="username"
                    placeholder="Username"
                    required
                    {...register("fullName", { required: true })}
                  />
                </label>

                <label htmlFor="photoURL" className="ml-4">
                  Photo URL
                </label>
                <label className="bg-white flex items-center justify-between gap-2 rounded-full py-4 px-3">
                  <MdAddPhotoAlternate className="text-lg text-gray-500" />
                  <input
                    type="url"
                    className="grow"
                    id="photo"
                    name="photo"
                    required
                    placeholder="https://example.jpeg"
                    {...register("image", { required: true })}
                  />
                </label>

                <label htmlFor="email" className="ml-4">
                  Email
                </label>
                <label className="bg-white flex items-center justify-between gap-2 rounded-full py-4 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70">
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    className="grow"
                    id="email"
                    name="email"
                    placeholder="Enter your E-mail"
                    required
                    {...register("email", { required: true })}
                  />
                </label>

                <label htmlFor="password" className="ml-4">
                  Password
                </label>
                <label className="bg-white flex items-center justify-between gap-2 rounded-full py-4 px-3">
                  <div className="flex items-center w-full gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70">
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type={showPass ? "text" : "password"}
                      className="grow"
                      id="password"
                      name="password"
                      required
                      placeholder="Set your secret password"
                      {...register("password", { required: true })}
                    />
                  </div>
                  <span onClick={() => setShowPass(!showPass)}>
                    {showPass ? (
                      <IoMdEyeOff className=" text-xl text-gray-600"></IoMdEyeOff>
                    ) : (
                      <IoMdEye className="text-xl text-gray-600"></IoMdEye>
                    )}
                  </span>
                </label>

                <input
                  type="submit"
                  className="bg-blue-500 mt-6 w-full py-3 rounded-full text-white"
                  value="Register Now"
                />
              </form>
            </div>

            {/* Redirect to login page */}
            <div className="flex mx-auto mt-4">
              <h1 className="flex items-center lg:gap-3 text-sm mx-auto">
                Already have an account
                <span>
                  <FaArrowRightLong></FaArrowRightLong>
                </span>
                <Link to="/login" className="font-bold text-blue-400">
                  Login
                </Link>
              </h1>
            </div>
          </div>

          {/* Image container */}
          <div className="loginsideimg hidden lg:inline md:inline">
            <Lottie
              className="w-full h-[650px] rounded-tr-xl rounded-br-xl object-cover object-center bg-green-100"
              animationData={regiLottie}></Lottie>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
