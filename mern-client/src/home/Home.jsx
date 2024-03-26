import Banner from "../components/Banner";
import BestSellerBooks from "./BestSellerBooks";
import FavBooks from "./FavBooks";
import OtherBooks from "./OtherBooks";
import PromoBanner from "./PromoBanner";
import Review from "./Review";


const Home = () => {
    return (
        <div>
            <Banner />
            <BestSellerBooks />
            <FavBooks />
            <PromoBanner />
            <OtherBooks />
            <Review />
        </div>
    )
}

export default Home;