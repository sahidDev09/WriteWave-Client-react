import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import WishlistTable from "./WishlistTable";

const Wishlish = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/wishlist/${user?.email}`
      );
      setWishlist(data);
    };
    getData();
  }, [user]);

  return (
    <div>
      {wishlist.map((wish, index) => (
        <WishlistTable key={index} wishlist={wish}></WishlistTable>
      ))}
    </div>
  );
};

export default Wishlish;
