/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import WishlistTable from "./WishlistTable";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
import { Helmet } from "react-helmet";

const getData = async (email) => {
  const { data } = await axios(
    `${import.meta.env.VITE_API_URL}/wishlist/${email}`,
    { withCredentials: true }
  );
  return data;
};

const Wishlish = () => {
  const { user } = useContext(AuthContext);

  const {
    data: wish = [],
    isLoading,
    refetch,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(user?.email),
    queryKey: ["wished", user?.email],
    enabled: !!user?.email,
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
    <div>
       <Helmet>
          <title>WriteWave | Wishlist</title>
        </Helmet>
      {wish.map((wishItem, index) => (
        <WishlistTable
          key={index}
          wishlist={wishItem}
          refetch={refetch}></WishlistTable>
      ))}
    </div>
  );
};

export default Wishlish;
