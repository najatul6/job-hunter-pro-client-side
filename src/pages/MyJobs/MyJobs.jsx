import { Helmet } from "react-helmet-async";
import addbg from "../../assets/add.jpg";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import JobCards from "../Home/JobCategorys/JobCards";

const MyJobs = () => {
    const axios = useAxios();
    const{user} = useAuth();
    const[myjob, setmyjob]=useState();

    axios.get(`/allMyJobs/${user?.email}`)
    .then(res =>{
        setmyjob(res.data)
    })
    return (
        <div>
            <Helmet>
                <title>Job HunterPro | My Jobs</title>
            </Helmet>

            <div className="bg-cover bg-fixed h-[100px] lg:h-[200px]"
                style={{
                    backgroundImage: `url(${addbg})`,
                    backgroundPosition: 'center',
                }}>
                <h2 className='py-10 h-full text-4xl items-center flex justify-center lg:text-6xl font-bold text-white w-full bg-gradient-to-r from-[#151515]'>Job Hunter Pro | My Jobs</h2>
            </div>
            <div className="max-w-[1440px] mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        myjob?.map(job=><JobCards key={job?._id} jobs={job}></JobCards>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default MyJobs;