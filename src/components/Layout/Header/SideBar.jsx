import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const SideBar = () => {
    const { user } = useAuth();

    return (
        <div className="flex flex-col gap-2">
            {/* Navbar menu content here */}
            <NavLink to="/" className={({ isActive }) =>
                isActive ? "btn bg-[#f16123] text-white" : "btn text-white btn-ghost hover:bg-[#f16123]"
            }>Home</NavLink>
            <NavLink to="/alljobs" className={({ isActive }) =>
                isActive ? "btn bg-[#f16123] text-white" : "btn text-white btn-ghost hover:bg-[#f16123]"
            }>All Jobs</NavLink>
            <NavLink to="/appliedjobs" className={({ isActive }) =>
                isActive ? "btn bg-[#f16123] text-white" : "btn text-white btn-ghost hover:bg-[#f16123]"
            }>Applied Jobs</NavLink>
            <NavLink to="/addajob" className={({ isActive }) =>
                isActive ? "btn bg-[#f16123] text-white" : "btn text-white btn-ghost hover:bg-[#f16123]"
            }>Add A Job</NavLink>
            <NavLink to="/myjobs" className={({ isActive }) =>
                isActive ? "btn bg-[#f16123] text-white" : "btn text-white btn-ghost hover:bg-[#f16123]"
            }>My Jobs</NavLink>
            <NavLink to="/blogs" className={({ isActive }) =>
                isActive ? "btn bg-[#f16123] text-white" : "btn text-white btn-ghost hover:bg-[#f16123]"
            }>Blogs</NavLink>
            <NavLink to="/about" className={({ isActive }) =>
                isActive ? "btn bg-[#f16123] text-white" : "btn text-white btn-ghost hover:bg-[#f16123]"
            }>About</NavLink>
            {
                user ? '' :
                    <NavLink to="/login" className={({ isActive }) =>
                        isActive ? "btn bg-[#f16123] text-white" : "btn text-white btn-ghost hover:bg-[#f16123]"
                    }>Log In</NavLink>
            }
        </div>
    );
};

export default SideBar;