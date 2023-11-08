import { Helmet } from "react-helmet-async";
import addbg from "../assets/add.jpg";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const UpdateJobs = () => {
    const axios = useAxios()
    const { user } = useAuth();
    const [selectcategory, setselectcategory] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const date = new Date()
    const jobPostingDate = date.toLocaleDateString()
    const applicationDeadline = startDate?.toLocaleDateString()
    const jobDetails = useLoaderData();
    const navigate = useNavigate();
    const location = useLocation();
    const { _id, jobCategory, pictureURL, jobTitle, salaryRange, jobDescription } = jobDetails;
    const handlecategory = e => {
        setselectcategory(e.target.value)
    }
    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.title.value;
        const pictureURL = form.banner.value;
        const salaryRange = form.salary.value;
        const username = user?.displayName;
        const useremail = user?.email;
        const jobDescription = form.description.value;
        const jobCategory = selectcategory;
        const jobApplicantNumber = form.jobApplicantNumber.value;
        const fulldata = { jobTitle, pictureURL, salaryRange, useremail, username, jobDescription, jobPostingDate, applicationDeadline, jobCategory, jobApplicantNumber };

        axios.put(`/allJobs/${_id}`, fulldata)
            .then(data => {
                console.log(data.data)
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Job Posted",
                        icon: "success"
                    });
                    navigate(location?.state ? location.state : '/');
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <Helmet>
                <title>Job HunterPro | Add Jobs</title>
            </Helmet>

            <div className="bg-cover bg-fixed h-[100px] lg:h-[200px]"
                style={{
                    backgroundImage: `url(${addbg})`,
                    backgroundPosition: 'center',

                }}>
                <h2 className='py-10 h-full text-2xl md:text-4xl items-center flex justify-center lg:text-6xl font-bold text-white w-full bg-gradient-to-r from-[#151515]'>Job Hunter Pro | {jobTitle}</h2>
            </div>
            <div className="max-w-[1440px] mx-auto my-5">
                <div className="lg:w-3/4 bg-gray-700 shadow-2xl p-5 rounded-xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#FF3811] text-center">Update Post</h2>
                    <form className="space-y-5" onSubmit={handleAddJob}>
                        {/* Title  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input name="title" type="text" placeholder="Job Title" defaultValue={jobTitle} className="input input-bordered" required />
                        </div>

                        {/* Banner */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL of the Job Banner</span>
                            </label>
                            <input name="banner" type="text" defaultValue={pictureURL} placeholder="Picture URL of the Job Banner" className="input input-bordered" required />
                        </div>

                        <div className="lg:flex lg:gap-6 lg:justify-between">

                            {/* UserName  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="username" type="text" placeholder="User Name" readOnly defaultValue={user?.displayName} className="input input-bordered" required />
                            </div>

                            {/* UserEmail  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="useremail" type="text" placeholder="User Email" defaultValue={user?.email} readOnly className="input input-bordered" required />
                            </div>

                            {/* Job Applicant Number  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Applicant Number</span>
                                </label>
                                <input name="jobApplicantNumber" type="text" placeholder="Job Applicant Number" defaultValue={0} readOnly className="input input-bordered" required />
                            </div>

                            {/* Salary  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Salary range</span>
                                </label>
                                <input name="salary" type="text" defaultValue={salaryRange} placeholder="Salary range" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="lg:flex lg:gap-6 lg:justify-between">
                            {/* Category  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Category</span>
                                </label>
                                <select className="input input-bordered" defaultValue={jobCategory} name="category" id="" onChange={handlecategory} required>
                                    <option value="" selected disabled>Select Job Category</option>
                                    <option value="onsite" id="">On Site</option>
                                    <option value="remote" id="">Remote</option>
                                    <option value="parttime" id="">Part Time</option>
                                    <option value="fulltime" id="">Full Time</option>
                                    <option value="hybrid" id="">Hybrid</option>
                                </select>
                            </div>

                            {/* Posting Date  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Posting Date</span>
                                </label>
                                <DatePicker selected={startDate} readOnly className="input input-bordered" onChange={(date) => setStartDate(date)} />
                            </div>

                            {/* Deadline  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Application Deadline</span>
                                </label>
                                <DatePicker selected={startDate} className="input input-bordered" onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        {/* Description  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Description</span>
                            </label>
                            <textarea cols={10} rows={50} defaultValue={jobDescription} name="description" type="text" placeholder="Write About Job" required className="input input-bordered"></textarea>
                        </div>

                        {/* Button  */}
                        <div className="form-control">
                            <button type="submit" className="btn border-0 bg-[#FF3811] hover:border-2 hover:border-[#FF3811] hover:text-[#FF3811] text-white">Update Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateJobs;