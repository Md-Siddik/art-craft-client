import { Link } from "react-router-dom";

const CategoryCard = ({item}) => {
    return (
        <div className="container mx-auto">
            <div data-aos="zoom-in" className="w-[350px] bg-base-100 border-[1px] border-solid h-full">
                <figure className="h-[220px] bg-gray-300">
                    <img src={item.image} className="w-full h-full" />
                </figure>
                <div className="card-body">
                    <div className="w-full text-left">
                        <h2 className="card-title text-2xl py-4 flex items-start">{item.item_name}</h2>
                        <p className="pb-4">{item.subcategory_Name} by {item.name}</p>
                        <div className="w-full flex gap-24 text-lg py-2 border-y-[1px]">
                            <span>{item.stockStatus}</span>
                            <span>Rating : {item.rating}</span>
                        </div>
                    </div>
                    <div className="text-left">
                        <p>{item.description}</p>
                    </div>
                    <div className="w-full flex gap-14 text-3xl font-bold py-2">
                        <span>{item.price} $</span>
                    </div>
                    <div className="flex m-auto gap-14 text-xl font-bold py-2">
                        <Link to={`/artCraft/${item._id}`}>
                            <button className="btn text-xl">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;