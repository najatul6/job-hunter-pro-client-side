import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import JobCategory from "./JobCategorys/JobCategory";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Job HunterPro | Home</title>
            </Helmet>
            <div>
                <Banner />
                <JobCategory />
            </div>
        </div>
    );
};

export default Home;