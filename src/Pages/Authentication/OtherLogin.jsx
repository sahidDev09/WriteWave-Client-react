/* eslint-disable no-unused-vars */
import { useContext } from "react";
import googlelogo from "../../assets/google (1).png";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const OtherLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  // code for navigation route

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleSocial = async (socialProvider) => {
    try {
      const result = await socialProvider();
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      );

      toast.success("Loging successful");
      navigate(from);
    } catch (error) {
      toast.error("Oh oh! something went wrong," + error.message);
      return;
    }
  };

  return (
    <div
      onClick={() => handleSocial(googleLogin)}
      className=" border-2 border-blue-200 rounded-xl flex items-center gap-5 justify-center py-2 hover:bg-blue-100 cursor-pointer">
      <img className=" w-8" src={googlelogo} alt="" />
      <h1 className=" font-semibold">Sign-in Google</h1>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default OtherLogin;
