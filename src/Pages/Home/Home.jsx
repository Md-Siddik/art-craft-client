import ArtCraft from "../ArtCraft/ArtCraft";
import CraftItems from "../CraftItems/CraftItems";
import Slider from "../Slider/Slider"
import Features from "../Features/Features"
import Status from "../Status/Status";
import { Fade, Slide } from "react-awesome-reveal";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="bg-gray-500 py-16">
                <Slide>
                    <Status></Status>
                </Slide>
            </div>
            <Fade>
                <CraftItems></CraftItems>
            </Fade>
            <Fade>
                <ArtCraft></ArtCraft>
            </Fade>
            <Features></Features>
        </div>
    );
};

export default Home;