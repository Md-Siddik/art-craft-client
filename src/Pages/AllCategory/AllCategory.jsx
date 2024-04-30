import { useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";

const AllCategory = () => {
    const items = useLoaderData();
    const {subcategory_Name} = useParams();
    const type = items?.filter(item => item.subcategory_Name === subcategory_Name);
    console.log(items)

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-fit m-auto my-16">
            {
                type?.map(item => <CategoryCard key={item._id} item={item}></CategoryCard>)
            }
        </div>
    );
};

export default AllCategory;