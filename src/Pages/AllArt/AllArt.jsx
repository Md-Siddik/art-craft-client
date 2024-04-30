import { Flip, Hinge } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";

const AllArt = () => {

    const artCrafts = useLoaderData();

    return (
        <div className="container mx-auto mb-16">
            <h1 className="text-4xl text-center py-16">All Art and Craft</h1>
            <Flip>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-2xl">
                                <th>Title</th>
                                <th>Description</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Ratting</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                artCrafts?.map(items => <tr key={items._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-24 h-24">
                                                    <img className="w-full h-full" src={items.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-xl">{items.item_name}</div>
                                                <div className="text-sm opacity-50">{items.subcategory_Name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-lg w-[400px]">
                                        {items.description}
                                    </td>
                                    <td className="text-2xl text-center">{items.price}$</td>
                                    <td className="text-2xl text-center">{items.rating}/5</td>
                                    <th>
                                        <Link to={`/artCraft/${items._id}`}>
                                            <button className="btn">View Details</button>
                                        </Link>
                                    </th>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </Flip>

        </div>
    );
};

export default AllArt;