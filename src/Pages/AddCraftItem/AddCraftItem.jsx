
const AddCraftItem = () => {
    const handleAdd = e => {

    }

    return (
        <div>
            <div className="lg:w-[1000px] m-auto pb-24 mt-16 border-2 rounded-xl">
                <h1 className="text-3xl my-10 text-center">Register</h1>
                <form onSubmit={handleAdd} className="md:w-full mx-auto p-8">
                    <div className="lg:flex gap-6">
                        <div className="w-[450px]">
                            <div className="form-control pb-6">
                                <input type="text" required name="image" placeholder="image url" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="item_name" placeholder="item_name" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="email" required name="subcategory_Name" placeholder="subcategory_Name" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="email" required name="description" placeholder="short description
" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="email" required name="price" placeholder="price" className="input input-bordered rounded-full" />
                            </div>
                        </div>
                        <div className="w-[450px]">
                            <div className="form-control pb-6">
                                <input type="email" required name="rating" placeholder="rating" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="email" required name="customization" placeholder="customization" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="email" required name="processing_time" placeholder="processing_time" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="email" required name="stockStatus" placeholder="stockStatus" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="email" required name="email" placeholder="User Email
" className="input input-bordered rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="form-control pb-6">
                        <input type="email" required name="name" placeholder="User Name" className="input input-bordered rounded-full" />
                    </div>
                    <div className="form-control w-[200px] mt-6 mx-auto">
                        <button className="btn btn-primary rounded-full text-xl">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;