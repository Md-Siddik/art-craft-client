import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProviders/AuthProvider";

const Update = () => {

    const art = useLoaderData();
    const {user} = useContext(AuthContext);
    const { _id, image, item_name, subcategory_name, stockStatus, customization, price, description, rating, processing_time } = art;

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;

        const image = form.image.value;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const stockStatus = form.stockStatus.value;
        const email = user.email;
        const name = user.name;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const description = form.description.value;

        const updatedCraftItem = {image, item_name, email,name, subcategory_Name, stockStatus, price, rating, customization, processing_time, description}

        fetch(`http://localhost:5000/artCraft/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCraftItem)
        })
        .then(res=>res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Updated!',
                    text: 'Item Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Great'
                })
            }
        })

    }

    return (
        <div>
            <div className="lg:w-[1000px] m-auto pb-24 my-16 border-2 rounded-xl">
                <h1 className="text-3xl my-10 text-center">Update Craft</h1>
                <form onSubmit={handleUpdate} className="md:w-full mx-auto p-8">
                    <div className="lg:flex gap-6">
                        <div className="w-[450px]">
                            <div className="form-control pb-6">
                                <input type="text" required name="image" placeholder="image url" defaultValue={image} className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="item_name" placeholder="item_name" defaultValue={item_name} className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="subcategory_Name" placeholder="subcategory_Name" defaultValue={subcategory_name} className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="stockStatus" placeholder="stockStatus" defaultValue={stockStatus} className="input input-bordered rounded-full" />
                            </div>

                        </div>
                        <div className="w-[450px]">
                            <div className="form-control pb-6">
                                <input type="text" required name="price" placeholder="price" defaultValue={price} className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="rating" placeholder="rating" defaultValue={rating} className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="customization" placeholder="customization" defaultValue={customization} className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="processing_time" placeholder="processing_time" defaultValue={processing_time} className="input input-bordered rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="form-control pb-6">
                            <textarea name="description" placeholder="Short description" defaultValue={description} className="input input-bordered h-28 rounded-xl p-4" rows="4" cols="50"></textarea>
                        </div>
                    </div>
                    <div className="form-control w-[200px] mt-6 mx-auto">
                        <input type="submit" value="Update"  className="btn btn-primary rounded-full text-xl"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;