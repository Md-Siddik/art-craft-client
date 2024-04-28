import Card from "../Card/Card";

const ArtCraft = ({items}) => {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center py-16">Art and Craft</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-fit m-auto">
                {
                    items.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>
        </div>
    );
};

export default ArtCraft;