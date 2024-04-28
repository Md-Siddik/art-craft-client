import { AuthContext } from "../../AuthProviders/AuthProvider";
import AdminCard from "../AdminCard/AdminCard";
import { useContext, useEffect, useState } from "react";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([]);
    const [all, setAll] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/artCraft/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                setAll(data);
            })
    }, [user]);

    const handleCustom = filter => {
        if (filter === 'customizable') {
            const findPositive = all.filter(it => it.customization === 'Yes');
            setItem(findPositive);
        }
        else if (filter === 'nonCustomizable') {
            const findPositive = all.filter(it => it.customization === 'No');
            setItem(findPositive);
        }
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center py-8">Craft Items</h1>
            <div className="w-fit mx-auto mb-12">
                <details className="dropdown">
                    <summary className="m-1 btn text-xl">customization</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                        <li className="text-lg" onClick={() => handleCustom('customizable')}><a>Customizable</a></li>
                        <li className="text-lg" onClick={() => handleCustom('nonCustomizable')}><a>Non-customizable</a></li>
                    </ul>
                </details>
            </div>
            <div className="gap-8">
                {
                    item.map(list => <AdminCard key={list._id} list={list}></AdminCard>)
                }
            </div>
        </div>
    );
};

export default MyList;