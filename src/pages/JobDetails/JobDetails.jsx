import { Helmet } from 'react-helmet-async';
import addbg from '../../assets/add.jpg'
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import ApplyModal from '../../components/ApplyModal';
import useAuth from '../../hooks/useAuth';

const JobDetails = () => {
    const { user } = useAuth()
    const jobDetails = useLoaderData();
    const { _id, useremail, pictureURL, jobTitle, salaryRange, jobDescription, jobApplicantNumber } = jobDetails;
    const location = useLocation()
    return (
        <div>
            <Helmet>
                <title>Job HunterPro | Job Details</title>
            </Helmet>
            <div className="bg-cover bg-fixed"
                style={{
                    backgroundImage: `url(${addbg})`,
                    backgroundPosition: 'center',
                }}>
                <h2 className='py-10 h-full text-xl md:text-4xl items-center flex justify-center lg:text-6xl font-bold text-white w-full bg-gradient-to-r from-[#151515]'>Job Details | {jobTitle}</h2>
            </div>
            <div className='my-10 text-white max-w-[1440px] mx-auto'>
                <div className='flex gap-6 px-5 flex-col lg:flex-row items-center'>
                    <img className='lg:w-1/2' src={pictureURL} alt="" />
                    <div className='lg:w-1/2 space-y-5 text-2xl font-bold'>
                        <h1>
                            <span className='underline text-[#FF3811]'>Position :</span> <span className='text-3xl lg:text-4xl'>{jobTitle}</span>
                        </h1>
                        <p>
                            <span className='underline text-[#FF3811]'>Description :</span> {jobDescription}

                        </p>
                        <p>
                            <span className='underline text-[#FF3811]'>Salary-Range :</span> {salaryRange}

                        </p>
                        <p>
                            <span className='underline text-[#FF3811]'> Number of Applicants :</span> {jobApplicantNumber}
                        </p>
                        <div className='card-actions justify-end'>
                            {
                                user?.email !== useremail ?
                                    <>
                                        <Link state={location.pathname}>
                                            <button onClick={() => document.getElementById('my_modal_4').showModal()} className="btn hover:text-white text-[#f16123] border-[#f16123] bg-transparent border-2 hover:bg-[#f16123]">
                                                Apply Now
                                            </button>
                                        </Link>
                                        <dialog id="my_modal_4" className="modal">
                                            <ApplyModal jobs={[{ jobTitle, jobApplicantNumber }, { _id }]}></ApplyModal>
                                        </dialog>
                                    </>
                                    :
                                    <Link to={`/update/${_id}`} state={location.pathname}>
                                        <button className="btn hover:text-white text-[#f16123] border-[#f16123] bg-transparent border-2 hover:bg-[#f16123]">
                                            Update Job
                                        </button>
                                    </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default JobDetails;