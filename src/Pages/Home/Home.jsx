import ArtCraft from "../ArtCraft/ArtCraft";
import CraftItems from "../CraftItems/CraftItems";
import Slider from "../Slider/Slider"
import Features from "../Features/Features"
import Status from "../Status/Status";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Status></Status>
            <CraftItems></CraftItems>
            <ArtCraft></ArtCraft>
            <Features></Features>
        </div>
    );
};

export default Home;