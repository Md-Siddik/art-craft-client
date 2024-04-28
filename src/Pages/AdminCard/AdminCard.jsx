
const AdminCard = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl border-2 h-fit">
                <div className="w-[45%]">
                    <div className="w-full h-full flex items-center justify-center">
                        <img className="w-full h-full" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div className="card-body gap-6">
                    <h1 className="card-title text-2xl">Item_Name</h1>
                    <div>
                        <h1 className="text-2xl">Rating : 4.3</h1>
                    </div>
                    <div className="flex gap-8">
                        <p>Customizable : <span>Yes</span></p>
                        <p>StockStatus : <span>In stock</span></p>
                    </div>
                    <h1 className="text-4xl font-bold">20000$</h1>
                    <div className="card-actions justify-center gap-16">
                        <button className="btn btn-primary text-lg">Update</button>
                        <button className="btn btn-error text-lg">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCard;