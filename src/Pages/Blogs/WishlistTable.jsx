/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const WishlistTable = ({ wishlist, control, setControl }) => {
  const { _id, wishId, wishImg, wishShort_des, wishCat, wishtitle } = wishlist;

  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await axios.delete(
            `${import.meta.env.VITE_API_URL}/wishlist/${_id}`
          );
          if (result.status == 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setControl(!control);
          }
        } catch (error) {
          console.error("Error deleting wishlist item:", error);
          toast.error("Something went wrong, try again");
        }
      }
    });
  };

  return (
    <div className=" m-2 md:m-0">
      <div className="md:flex gap-4 items-center justify-between container mx-auto bg-slate-200 p-5 my-10 rounded-md">
        <div className=" md:flex gap-7 items-center">
          <img className=" w-96 h-56 object-cover" src={wishImg} alt="" />
          <div className=" flex flex-col gap-3">
            <div>
              <h1 className=" font-semibold">Title :</h1>
              <h1 className=" text-2xl">{wishtitle}</h1>
            </div>
            <div>
              <h1 className=" font-semibold">Category :</h1>
              <h1 className="font-semibold bg-blue-200 p-2 w-fit rounded-full text-blue-700">
                {wishCat}
              </h1>
            </div>
            <div>
              <h1 className=" font-semibold">Short Description : </h1>
              <h1>{wishShort_des}</h1>
            </div>
          </div>
        </div>
        <div className=" md:flex-col flex gap-3">
          <Link to={`/blogs/${wishId}`}>
            <button className=" bg-blue-500 p-3 rounded-xl">
              <FaEye className=" text-4xl text-white" />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className=" bg-red-500 p-3 rounded-xl">
            <MdDelete className=" text-4xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistTable;
