import { Link } from "react-router-dom";

const Category = ({item}) => {
    return (
        <div className="container mx-auto">
            <div data-aos="zoom-in" className="w-[350px] bg-base-100 border-[1px] border-solid h-full">
                <figure className="h-[220px] bg-gray-300">
                    <img src={item.image} className="w-full h-full" />
                </figure>
                <div className="card-body">
                    <div className="w-full text-left">
                        <h2 className="card-title text-2xl py-4 flex items-start">{item.subcategory_Name}</h2>
                    </div>
                    <div className="text-left">
                        <p>{item.description}</p>
                    </div>
                    <div className="flex m-auto gap-14 text-xl font-bold py-2">
                        <Link to={`/AllCategory/${item.subcategory_Name}`}>
                            <button className="btn text-xl">View All</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;