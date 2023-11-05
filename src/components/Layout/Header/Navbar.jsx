import { NavLink } from "react-router-dom";
import logo from "../../../assets/JobhunterPro.svg"
const Navbar = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="flex-1 px-2 mx-2"><img className="w-[80%] md:w-[25%]" src={logo} alt="" /></div>
            <div className="flex-none hidden lg:block">
                <div className="flex gap-2">
                    {/* Navbar menu content here */}
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                    }>Home</NavLink>
                    <NavLink to="/alljobs" className={({ isActive }) =>
                        isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                    }>All Jobs</NavLink>
                    <NavLink to="/appliedjobs" className={({ isActive }) =>
                        isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                    }>Applied Jobs</NavLink>
                    <NavLink to="/addajob" className={({ isActive }) =>
                        isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                    }>Add A Job</NavLink>
                    <NavLink to="/myjobs" className={({ isActive }) =>
                        isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                    }>My Jobs</NavLink>
                    <NavLink to="/blogs" className={({ isActive }) =>
                        isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                    }>Blogs</NavLink>
                    <NavLink to="/about" className={({ isActive }) =>
                        isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                    }>About</NavLink>
                    <NavLink to="/login" className={({ isActive }) =>
                        isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                    }>Log In</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;