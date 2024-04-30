import { useEffect, useState } from "react";
import Card from "../Card/Card";

const CraftItems = () => {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetch('https://art-craft-server-beryl.vercel.app/artCraft')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    const itemsLimit = items.slice(0,6);

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center py-16">Craft Items</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 w-fit m-auto">
                {
                    itemsLimit?.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>
        </div>
    );
};

export default CraftItems;