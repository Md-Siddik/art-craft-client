import { Link } from "react-router-dom";
import Card from "../Card/Card";

const AllArt = () => {
    return (
        <div className="container mx-auto mb-16">
            <h1 className="text-4xl text-center py-16">All Art and Craft</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-2xl">
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Ratting</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="w-12 h-12">
                                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">Item_name</div>
                                        <div className="text-sm opacity-50">Subcategory_name</div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-lg w-[400px]">
                                Short description about Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, minima!
                            </td>
                            <td className="text-2xl">20000$</td>
                            <td className="text-2xl">4.8</td>
                            <th>
                                <Link to="/details">
                                    <button className="btn">View Details</button>
                                </Link>
                            </th>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="w-12 h-12">
                                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">Item_name</div>
                                        <div className="text-sm opacity-50">Subcategory_name</div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-lg w-[400px]">
                                Short description about Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, minima!
                            </td>
                            <td className="text-2xl">20000$</td>
                            <td className="text-2xl">4.8</td>
                            <th>
                                <Link to="/details">
                                    <button className="btn">View Details</button>
                                </Link>
                            </th>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="w-12 h-12">
                                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">Item_name</div>
                                        <div className="text-sm opacity-50">Subcategory_name</div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-lg w-[400px]">
                                Short description about Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, minima!
                            </td>
                            <td className="text-2xl">20000$</td>
                            <td className="text-2xl">4.8</td>
                            <th>
                                <Link to="/details">
                                    <button className="btn">View Details</button>
                                </Link>
                            </th>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="w-12 h-12">
                                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">Item_name</div>
                                        <div className="text-sm opacity-50">Subcategory_name</div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-lg w-[400px]">
                                Short description about Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, minima!
                            </td>
                            <td className="text-2xl">20000$</td>
                            <td className="text-2xl">4.8</td>
                            <th>
                                <Link to="/details">
                                    <button className="btn">View Details</button>
                                </Link>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllArt;