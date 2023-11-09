// import { useEffect, useState } from "react";
import JobCards from "./JobCards";
import useAllJob from "../../../hooks/useAllJob";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useState } from "react";

const JobCategory = () => {
    const [jobs] = useAllJob();
    // const [isShow, setIsShow] = useState(false)
    // const [jobs, setjobs] = useState()
    // useEffect(() => {
    //     fetch('/jobs.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setjobs(data)
    //         })
    // }, [])
    return (
        <div className="max-w-[1440px] mx-auto">
            <hr className="my-10" />
            <h2 className="text-center font-bold lg:text-4xl text-3xl text-white">Job Category</h2>
            <hr className="my-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    jobs?.length > 7 ?
                        jobs?.slice(0,6).map(job => <JobCards key={job?._id} jobs={job}></JobCards>)
                        :
                        ''
                }
            </div>
            <div className="flex justify-center w-full mt-14">
                <Link to="/alljobs" className="btn w-full hover:text-white join-item text-[#f16123] border-[#f16123] bg-transparent border-2 hover:bg-[#f16123]">View All Jobs <AiOutlineDoubleRight /></Link>
            </div>

        </div>
    );
};

export default JobCategory;