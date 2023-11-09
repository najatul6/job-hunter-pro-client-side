import { Helmet } from "react-helmet-async";
import addbg from "../../assets/add.jpg"
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import JobsCard from "../../components/JobsCard";

const AppliedJobs = () => {
    const axios = useAxios();
    const user = useAuth()
    const [applyjobs, setapplyjos] = useState()

    useEffect(() => {
        axios.get(`/appliedJobs/${user?.user?.email}`)
            .then(res => {
                setapplyjos(res.data)
            })
    }, ['user?.user?.email'])

    return (
        <div>
            <Helmet>
                <title>Job HunterPro | Applied Jobs</title>
            </Helmet>
            <div className="bg-cover bg-fixed h-[100px] lg:h-[200px]"
                style={{
                    backgroundImage: `url(${addbg})`,
                    backgroundPosition: 'center',
                }}>
                <h2 className='py-10 h-full text-4xl items-center flex justify-center lg:text-6xl font-bold text-white w-full bg-gradient-to-r from-[#151515]'>Job Hunter Pro |  Applied Jobs</h2>
            </div>
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        applyjobs?.map(job => <JobsCard key={job?._id} jobs={job}></JobsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;