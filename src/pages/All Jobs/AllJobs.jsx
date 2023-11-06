import { Helmet } from "react-helmet-async";
import addbg from "../../assets/add.jpg";

const AllJobs = () => {
    return (
        <div>
            <Helmet>
                <title>Job HunterPro | All Jobs</title>
            </Helmet>

            <div className="bg-cover bg-fixed"
                style={{
                    backgroundImage: `url(${addbg})`,
                    backgroundPosition: 'center',
                    height: '300px',
                }}>
                <h2 className='py-10 h-full text-4xl items-center flex justify-center lg:text-6xl font-bold text-white w-full bg-gradient-to-r from-[#151515]'>Job Hunter Pro |  All Jobs</h2>
            </div>
            <div className="max-w-[1440px] mx-auto">

            </div>
        </div>
    );
};

export default AllJobs;