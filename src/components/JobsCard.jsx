import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";


const JobsCard = ({jobs}) => {
    const {Position,name,_id } = jobs;

    console.log(jobs)
    return (
        <div className="card bg-gray-900 text-white shadow-xl">
            <div className="card-body">
                <div className="space-y-2">
                    <h2 className="card-title text-[#f16123]">{Position}</h2>
                </div>
                <div className="card-actions items-center gap-6 justify-between">
                    <div className="text-sm ">
                        <p>Posted By : <span className="text-gray-400">{name}</span></p>
                    </div>
                    <Link to={`/jobDetails/${_id}`}>
                        <button className="btn hover:text-white join-item text-[#f16123] border-[#f16123] bg-transparent border-2 hover:bg-[#f16123]">View Details <AiOutlineDoubleRight /> </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default JobsCard;