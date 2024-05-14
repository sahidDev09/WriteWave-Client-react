/* eslint-disable react/prop-types */
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const WishlistTable = ({ wishlist }) => {
  const { wishId, wishImg, wishShort_des, wishCat, wishtitle } = wishlist;

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
          <button className=" bg-red-500 p-3 rounded-xl">
            <MdDelete className=" text-4xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistTable;
