
const Card = () => {
    return (
        <div className="container mx-auto">
            <div data-aos="zoom-in" className="w-[350px] bg-base-100 border-[1px] border-solid h-full">
                <figure className="h-fit bg-gray-300">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className="w-full" />
                </figure>
                <div className="card-body">
                    <div className="w-full text-left">
                        <h2 className="card-title text-xl py-4 flex items-start">Title</h2>
                        <div className="w-full flex gap-32 text-lg py-2">
                            <span>Segment</span>
                            <span>Status</span>
                        </div>
                    </div>
                    <div className="flex gap-4 py-4 border-y-[1px]">
                        <p>Location</p>
                    </div>
                    <div className="text-left">
                        <p>Description</p>
                    </div>
                    <div className="w-full flex gap-14 text-xl font-bold py-2">
                        <span>Price</span>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-info text-lg mt-4">View Property</button>
                        {/* <Link residential={residential} to={`/details/${id}`}>
                            <button className="btn btn-info text-lg mt-4">View Property</button>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;