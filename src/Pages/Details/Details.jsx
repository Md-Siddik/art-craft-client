import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    const artCrafts = useLoaderData();
    const { id } = useParams();
    const singleArt = artCrafts.find(item => item._id === id);
    console.log(singleArt);

    return (
        <div>
            <div className="container m-auto">
                <Helmet>
                    <title>Techno-Real-Estate | Details</title>
                </Helmet>

                <div className="flex border-[1px] my-24">
                    <div className="w-[45%]">
                        <div className="w-full h-full flex items-center justify-center">
                            <img className="w-full h-fit" src={singleArt.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className="w-[55%]">
                        <div className="p-8">
                            <h1 className="text-4xl font-bold">{singleArt.item_name}</h1>
                            <div className="flex gap-32 text-2xl py-6">
                                <h1>{singleArt.subcategory_Name}</h1>
                            </div>
                            <div className="flex gap-4 py-4 border-y-[1px] text-2xl">
                                <p>{singleArt.description}</p>
                            </div>
                            <div className="flex gap-36">
                                <p className="py-4 text-xl">Posted by : {singleArt.name} </p>
                                <p className="py-4 text-xl">Email : {singleArt.email} </p>
                            </div>
                            <div className="flex gap-8">
                                <p className="py-4 text-xl bg-green-500 dark:text-white px-6 rounded-full">{singleArt.stockStatus} </p>
                                <p className="py-4 text-xl bg-purple-500 dark:text-white px-6 rounded-full">{singleArt.rating} </p>
                                <div className="flex gap-4">
                                    <p className="py-4 text-xl">Customizable : </p>
                                    <p className="py-4 text-xl bg-cyan-500 dark:text-white px-6 rounded-full">{singleArt.customization} </p>
                                    <p className="py-4 text-xl">Processing-time : </p>
                                    <p className="py-4 text-xl bg-cyan-500 dark:text-white px-6 rounded-full">{singleArt.processing_time} </p>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold py-4">${singleArt.price}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;