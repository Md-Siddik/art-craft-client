import ArtCraft from "../ArtCraft/ArtCraft";
import CraftItems from "../CraftItems/CraftItems";
import Slider from "../Slider/Slider"

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CraftItems></CraftItems>
            <ArtCraft></ArtCraft>
        </div>
    );
};

export default Home;