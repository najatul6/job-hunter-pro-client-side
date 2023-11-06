import { Helmet } from "react-helmet-async";
import addbg from "../../assets/add.jpg"
const AddAJob = () => {
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
                <h2 className='py-10 h-full text-2xl md:text-4xl items-center flex justify-center lg:text-6xl font-bold text-white w-full bg-gradient-to-r from-[#151515]'>Job Hunter Pro | Add A Job</h2>
            </div>
            <div className="max-w-[1440px] mx-auto my-5">
                <div className="lg:w-3/4 bg-gray-700 shadow-2xl p-5 rounded-xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#FF3811] text-center">Add A New Job</h2>
                    <form className="space-y-5">
                        {/* Title  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input name="title" type="text" placeholder="Job Title" className="input input-bordered" required />
                        </div>

                        {/* Banner */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL of the Job Banner</span>
                            </label>
                            <input name="banner" type="text" placeholder="Picture URL of the Job Banner" className="input input-bordered" required />
                        </div>

                        <div className="lg:flex lg:gap-6 lg:justify-between">

                            {/* UserName  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input name="username" type="text" placeholder="User Name" className="input input-bordered" required />
                            </div>

                            {/* Salary  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Salary range</span>
                                </label>
                                <input name="salary" type="text" placeholder="Salary range" className="input input-bordered" required />
                            </div>
                        </div>

                        {/* Category  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Category</span>
                            </label>
                            <input name="salary" type="text" placeholder="Salary range" className="input input-bordered" required />
                        </div>

                        {/* Posting Date  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Posting Date</span>
                            </label>
                            <input name="salary" type="text" placeholder="Write About Job" className="input input-bordered" required />
                        </div>

                        {/* Deadline  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Application Deadline</span>
                            </label>
                            <input name="salary" type="text" placeholder="Write About Job" className="input input-bordered" required />
                        </div>

                        {/* Description  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Description</span>
                            </label>
                            <textarea cols={10} rows={50} name="salary" type="text" placeholder="Write About Job" required className="input input-bordered"></textarea>
                        </div>

                        {/* Button  */}
                        <div className="form-control">
                            <button type="submit" className="btn border-0 bg-[#FF3811] hover:border-2 hover:border-[#FF3811] hover:text-[#FF3811] text-white">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAJob;