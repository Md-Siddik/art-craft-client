import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div className="border-b-[1px]">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;