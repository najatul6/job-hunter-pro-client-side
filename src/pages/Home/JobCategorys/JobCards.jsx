import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const JobCards = ({ jobs }) => {
    const { _id, jobTitle, jobApplicantNumber, salaryRange, jobCategory, applicationDeadline, username, jobPostingDate } = jobs;
    return (
        <div className="card bg-gray-900 text-white shadow-xl">
            <div className="card-body">
                <div className="space-y-2">
                    <h2 className="card-title text-[#f16123]">{jobTitle}</h2>
                    <p>Category : <span className="text-gray-400">{jobCategory}</span></p>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between my-2">
                    <div>
                        <p>Salary range</p>
                        <p className="text-gray-400">{salaryRange}</p>
                    </div>
                    <div>
                        <p>Application Deadline</p>
                        <p className="text-gray-400">{applicationDeadline}</p>
                    </div>
                </div>
                <p>Job Applicants Number : <span className="text-gray-400">{jobApplicantNumber}</span></p>
                <div className="card-actions items-center gap-6 justify-between mt-5">
                    <div className="text-sm ">
                        <p>Posted By : <span className="text-gray-400">{username}</span></p>
                        <p>Posting Date : <span className="text-gray-400">{jobPostingDate}</span></p>
                    </div>
                    <Link to={`/jobDetails/${_id}`}>
                        <button className="btn hover:text-white join-item text-[#f16123] border-[#f16123] bg-transparent border-2 hover:bg-[#f16123]">View Details <AiOutlineDoubleRight /> </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default JobCards;