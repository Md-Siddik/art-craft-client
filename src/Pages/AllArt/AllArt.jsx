import Card from "../Card/Card";

const AllArt = () => {
    return (
        <div className="container mx-auto mb-16">
            <h1 className="text-4xl text-center py-16">All Art and Craft</h1>
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

export default AllArt;