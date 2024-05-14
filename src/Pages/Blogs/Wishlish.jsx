import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import WishlistTable from "./WishlistTable";


const Wishlish = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/wishlist/${user?.email}`
      );
      setWishlist(data);
    };
    getData();
  }, [user, control]);

  return (
    <div>
      {wishlist.map((wish, index) => (
        <WishlistTable
          key={index}
          wishlist={wish}
          control={control}
          setControl={setControl}></WishlistTable>
      ))}
    </div>
  );
};

export default Wishlish;
