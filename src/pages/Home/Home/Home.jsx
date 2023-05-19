import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";
import useTitle from "../../hooks/useTitle";



const Home = () => {

    useTitle('ToyCrateX - Home')

    return (
        <>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
        </>
    );
};

export default Home;