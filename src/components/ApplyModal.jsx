import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const ApplyModal = ({ jobs }) => {
    const axios = useAxios();
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate()

    const handleapply = e => {
        e.preventDefault();
        const form = e.target;
        const jobId = form.jobid.value;
        const jobtitle = form.jobtitle.value;
        const name = form.name.value;
        const serialNumber = jobs[0].jobApplicantNumber + 1;
        const email = user?.email;
        const resume = form.resumeLink.value;
        const applier = {
            JobID: jobId,
            Position: jobtitle,
            name,
            email,
            resume,
            serialNumber
        }
        axios.post('https://job-hunter-pro-server-side.vercel.app/allappliedjobs', applier)
        .then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                    title: "Job Applyed",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/');
            }
        })

    }

    return (
        <div className="modal-box max-w-[1440px]">
            <form className="w-full" onSubmit={handleapply}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job ID</span>
                    </label>
                    <input name="jobid" type="text" placeholder="Position" defaultValue={jobs[1]._id} readOnly className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Position</span>
                    </label>
                    <input name="jobtitle" type="text" placeholder="Position" defaultValue={jobs[0].jobTitle} readOnly className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="Full Name" defaultValue={user?.displayName} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" defaultValue={user?.email} readOnly className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume Link</span>
                    </label>
                    <input name="resumeLink" type="text" placeholder="Resume Link" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn bg-[#FF3811] border-2 hover:border-[#FF3811] hover:text-[#FF3811] text-white">Submit</button>
                </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
            </form>

        </div>
    );
};

export default ApplyModal;