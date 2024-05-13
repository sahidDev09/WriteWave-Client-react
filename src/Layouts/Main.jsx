import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className=" min-h-[calc(100vh-268px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;