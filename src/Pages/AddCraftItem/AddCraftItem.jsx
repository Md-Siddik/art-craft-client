import Swal from "sweetalert2";

const AddCraftItem = () => {
    const handleAdd = e => {
        event.preventDefault();

        const form = e.target;

        const image = form.image.value;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const stockStatus = form.stockStatus.value;
        const price = form.price.value;
        const email = form.email.value;
        const name = form.name.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const description = form.description.value;

        const newCraftItem = {image, item_name, subcategory_Name, stockStatus, price, email, name, rating, customization, processing_time, description}

        fetch('https://art-craft-server-beryl.vercel.app/artCraft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraftItem)
        })
        .then(res=>res.json())
        .then(data => {
            Swal.fire({
                title: 'Success!',
                text: 'Item Added Successfully',
                icon: 'success',
                confirmButtonText: 'Great'
            })
        
        })

    }
    return (
        <div>
            <div className="lg:w-[1000px] m-auto pb-24 mt-16 border-2 rounded-xl">
                <h1 className="text-3xl my-10 text-center">Add Craft</h1>
                <form onSubmit={handleAdd} className="md:w-full mx-auto p-8">
                    <div className="lg:flex lg:gap-6">
                        <div className="lg:w-[450px]">
                            <div className="form-control pb-6">
                                <input type="text" required name="image" placeholder="image url" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="item_name" placeholder="item_name" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" name="subcategory_Name" placeholder="subcategory_Name" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="stockStatus" placeholder="stockStatus" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="price" placeholder="price" className="input input-bordered rounded-full" />
                            </div>
                        </div>
                        <div className="lg:w-[450px]">
                            <div className="form-control pb-6">
                                <input type="email" required name="email" placeholder="User Email" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="name" placeholder="User Name" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="rating" placeholder="rating" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="customization" placeholder="customization" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="processing_time" placeholder="processing_time" className="input input-bordered rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    <div className="form-control pb-6">
                                <textarea name="description" required placeholder="Short description" className="input input-bordered h-28 w-full rounded-xl p-4" rows="4" cols="50"></textarea>
                            </div>
                    </div>
                    <div className="form-control w-[200px] mt-6 mx-auto">
                        <input type="submit" value="Add"  className="btn btn-primary rounded-full text-xl"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;