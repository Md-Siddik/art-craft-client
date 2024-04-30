import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AdminCard = ({ list }) => {

    const { _id, image, item_name, stockStatus, customization, price, rating } = list;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://art-craft-server-beryl.vercel.app/artCraft/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Art has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex border-[1px]">
                <div className="w-[45%] max-h-[250px]">
                    <div className="w-full h-full flex lists-center justify-center">
                        <img className="w-full h-full" src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div className="w-[55%]">
                    <div className="p-8">
                        <h1 className="text-2xl font-bold">{item_name}</h1>
                        <div className="flex gap-16 text-xl my-4">
                            <p>{stockStatus}</p>
                            <p>Customization : {customization}</p>
                        </div>
                        <div className="flex gap-48 pb-4">
                            <h1 className="text-2xl font-bold">${price}</h1>
                            <p className="text-2xl">{rating}/5</p>
                        </div>
                        <div className="flex lg:gap-8">
                            <Link to={`/update/${_id}`}>
                                <button className="btn btn-primary text-xl">Update</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn btn-error text-xl">Delete</button>
                            <Link to={`/artCraft/${_id}`}>
                                <button className="btn btn-success text-xl">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCard;