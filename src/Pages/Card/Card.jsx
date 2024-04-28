import { Link } from "react-router-dom";

const Card = ({item}) => {
    return (
        <div className="container mx-auto">
            <div data-aos="zoom-in" className="w-[350px] bg-base-100 border-[1px] border-solid h-full">
                <figure className="h-[220px] bg-gray-300">
                    <img src={item.image} className="w-full h-full" />
                </figure>
                <div className="card-body">
                    <div className="w-full text-left">
                        <h2 className="card-title text-xl py-4 flex items-start">{item.item_name}</h2>
                        <div className="w-full flex gap-32 text-lg py-2">
                            <span>Segment</span>
                            <span>Status</span>
                        </div>
                    </div>
                    <div className="flex gap-4 py-4 border-y-[1px]">
                        <p>{item.name}</p>
                    </div>
                    <div className="text-left">
                        <p>{item.description}</p>
                    </div>
                    <div className="w-full flex gap-14 text-xl font-bold py-2">
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

export default Card;