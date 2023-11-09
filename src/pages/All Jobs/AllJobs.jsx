import { Helmet } from "react-helmet-async";
import addbg from "../../assets/add.jpg";
// import useAllJob from "../../hooks/useAllJob";
import JobCards from "../Home/JobCategorys/JobCards";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";

const AllJobs = () => {
    const [jobs, setJobs] = useState();
    const [keyword, setKeyword] = useState("");
    const axios = useAxios()
    const url = `https://job-hunter-pro-server-side.vercel.app/alljobs?keyword=${keyword}`;

    useEffect(() => {
        axios.get(url)
        .then(res => setJobs(res.data))
        .catch(err => console.log(err))
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setJobs(data))
    }, [url]);

    const handleSearch = e => {
        e.preventDefault();
        const form = e.target;
        const searchText = form.search.value;
        setKeyword(searchText)
    }

    return (
        <div>
            <Helmet>
                <title>Job HunterPro | All Jobs</title>
            </Helmet>

            <div className="bg-cover bg-fixed h-[100px] lg:h-[200px]"
                style={{
                    backgroundImage: `url(${addbg})`,
                    backgroundPosition: 'center',
                }}>
                <div className="w-full  h-full bg-gradient-to-r from-[#151515] flex justify-center items-center gap-6 flex-col">
                    <h2 className='py-10text-4xl items-center  lg:text-6xl font-bold text-white '>Job Hunter Pro |  All Jobs</h2>
                    <form onSubmit={handleSearch} className="join">
                        <div>
                            <input name="search" className="input text-white input-bordered join-item" placeholder="Search" />
                        </div>
                        <button type="submit" className="btn text-white join-item border-[#f16123] bg-transparent border-2 hover:bg-[#f16123] hover:border-0">Search</button>
                    </form>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto">
                <h2 className="text-center font-bold lg:text-4xl text-3xl text-white mt-5"> Select Job Category</h2>
                <hr className="h-2 bg-[#f16123] border-0 rounded-xl my-5" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        jobs?.map(job => <JobCards key={job._id} jobs={job}></JobCards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllJobs;