import Card from "../Card/Card";

const ArtCraft = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center py-16">Craft Items</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-fit m-auto">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    );
};

export default ArtCraft;