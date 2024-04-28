import ArtCraft from "../ArtCraft/ArtCraft";
import CraftItems from "../CraftItems/CraftItems";
import Slider from "../Slider/Slider"
import Features from "../Features/Features"
import Status from "../Status/Status";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const items = useLoaderData();
    return (
        <div>
            <Slider></Slider>
            <Status></Status>
            <CraftItems></CraftItems>
            <ArtCraft items={items}></ArtCraft>
            <Features></Features>
        </div>
    );
};

export default Home;