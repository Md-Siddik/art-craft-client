import { useEffect } from "react";
import { useState } from "react";
import Category from "../Category/Category";

const ArtCraft = () => {

    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetch('https://art-craft-server-beryl.vercel.app/artCategory')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center py-16">Art and Craft</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-fit m-auto">
                {
                    items?.map(item => <Category key={item._id} item={item}></Category>)
                }
            </div>
        </div>
    );
};

export default ArtCraft;