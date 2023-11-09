import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import JobCategory from "./JobCategorys/JobCategory";
import AboutBanner from "./About Banner/AboutBanner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Job HunterPro | Home</title>
            </Helmet>
            <div>
                <Banner />
                <JobCategory />
                <AboutBanner/>
            </div>
        </div>
    );
};

export default Home;