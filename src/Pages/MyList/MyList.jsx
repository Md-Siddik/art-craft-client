import AdminCard from "../AdminCard/AdminCard";

const MyList = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center py-16">Craft Items</h1>
            <div className="w-fit mx-auto mb-12">
                <details className="dropdown">
                    <summary className="m-1 btn text-xl">customization</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                        <li className="text-lg"><a>Customizable</a></li>
                        <li className="text-lg"><a>Non-customizable</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8 w-fit m-auto">
                <AdminCard></AdminCard>
                <AdminCard></AdminCard>
                <AdminCard></AdminCard>
                <AdminCard></AdminCard>
                <AdminCard></AdminCard>
                <AdminCard></AdminCard>
            </div>
        </div>
    );
};

export default MyList;