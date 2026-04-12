import Banner from "../Banner/Banner";
import EventCategories from "./EventCategories";
import EventCountdown from "./EventCountdown";
import Featured from "./Featured";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";
import UpcomingEvents from "./UpcomingEvents";
import Works from "./Works";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Featured></Featured>
           <EventCategories></EventCategories>
           <Works></Works>
           <EventCountdown></EventCountdown>
           <UpcomingEvents></UpcomingEvents>
           <Testimonials></Testimonials>
           <Newsletter></Newsletter>,
           
        </div>
    );
};

export default Home;