import { Link } from "react-router-dom";

const AdminCard = ({ list,fil }) => {
    return (
        <div>
            <div className="flex border-[1px] my-8">
                <div className="w-[45%]">
                    <div className="w-full h-full flex items-center justify-center">
                        <img className="w-full h-full" src={list.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div className="w-[55%]">
                    <div className="p-8">
                        <h1 className="text-4xl font-bold">{list.item_name}</h1>
                        <div className="flex gap-32 text-2xl py-6">
                            <h1>{list.subcategory_Name}</h1>
                        </div>
                        <div className="flex gap-4 py-4 border-y-[1px] text-2xl">
                            <p>{list.description}</p>
                        </div>
                        <div className="flex gap-36">
                            <p className="py-4 text-xl">Posted by : {list.name} </p>
                            <p className="py-4 text-xl">Email : {list.email} </p>
                        </div>
                        <div className="flex gap-2">
                            <p className="py-4 text-xl bg-green-500 dark:text-white px-6 rounded-full">{list.stockStatus} </p>
                            <p className="py-4 text-xl bg-purple-500 dark:text-white px-6 rounded-full">{list.rating}/5 </p>
                            <div className="flex gap-4">
                                <p className="py-4 text-xl">Customizable : </p>
                                <p className="py-4 text-xl bg-cyan-500 dark:text-white px-6 rounded-full">{list.customization} </p>
                                <p className="py-4 text-xl">Processing-time : </p>
                                <p className="py-4 text-xl bg-cyan-500 dark:text-white px-6 rounded-full">{list.processing_time} </p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold py-4">${list.price}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCard;