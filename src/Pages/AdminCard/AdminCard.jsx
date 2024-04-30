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
                fetch(`http://localhost:5000/artCraft/${_id}`, {
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
        // <div className="container mx-auto">
        //     <div data-aos="zoom-in" className="w-[350px] bg-base-100 border-[1px] border-solid h-full">
        //         <figure className="h-[220px] bg-gray-300">
        //             <img src={list.image} className="w-full h-full" />
        //         </figure>
        //         <div className="card-body">
        //             <div className="w-full text-left">
        //                 <h2 className="card-title text-2xl py-4 flex lists-start">{list.item_name}</h2>
        //                 <p className="pb-4">{list.subcategory_Name} by {list.name}</p>
        //                 <div className="w-full flex gap-24 text-lg py-2 border-y-[1px]">
        //                     <span>{list.stockStatus}</span>
        //                     <span>Rating : {list.rating}</span>
        //                 </div>
        //                 <div className="w-full flex gap-24 text-lg py-2 border-y-[1px]">
        //                     <span>Customization : {list.customization}</span>
        //                 </div>
        //             </div>
        //             <div className="text-left">
        //                 <p>{list.description}</p>
        //             </div>
        //             <div className="w-full flex gap-14 text-3xl font-bold py-2">
        //                 <span>{list.price} $</span>
        //             </div>
        //             <div className="flex m-auto gap-14 text-xl font-bold py-2">
        //                 <Link to={`/artCraft/${list._id}`}>
        //                     <button className="btn text-xl">View Details</button>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
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
                        <div className="flex gap-8">
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