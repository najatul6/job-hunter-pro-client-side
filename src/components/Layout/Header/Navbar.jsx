import { NavLink } from "react-router-dom";
import logo from "../../../assets/JobhunterPro.svg"
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut()
            .then(
                Swal.fire({
                    icon: 'success',
                    title: "User Log Out successfully",
                })
            )
    }
    return (
        <div className="w-full max-w-[1440px] mx-auto">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="flex-1  flex items-center justify-between px-2 mx-2">
                <img className="w-[80%] md:w-[25%]" src={logo} alt="" />
                <div className="lg:hidden">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user.displayName}
                                            {user.email}
                                        </a>
                                    </li>
                                    <button onClick={handleLogOut} className="btn my-1 bg-[#f16022] text-white">Log Out</button>
                                </ul>
                            </div>
                            :
                            ''
                    }
                </div>
            </div>
            <div className="flex-none hidden lg:block">
                <div className="flex gap-2">
                    {/* Navbar menu content here */}
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                    }>Home</NavLink>
                    <NavLink to="/alljobs" className={({ isActive }) =>
                        isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                    }>All Jobs</NavLink>
                    {
                        user ?
                            <div>
                                <NavLink to="/appliedjobs" className={({ isActive }) =>
                                    isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                                }>Applied Jobs</NavLink>
                                <NavLink to="/addajob" className={({ isActive }) =>
                                    isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                                }>Add A Job</NavLink>
                                <NavLink to="/myjobs" className={({ isActive }) =>
                                    isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                                }>My Jobs</NavLink>
                            </div>
                            :
                            ''
                    }
                    <NavLink to="/blogs" className={({ isActive }) =>
                        isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                    }>Blogs</NavLink>
                    <NavLink to="/about" className={({ isActive }) =>
                        isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                    }>About</NavLink>
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user.displayName}
                                            {user.email}
                                        </a>
                                    </li>
                                    <button onClick={handleLogOut} className="btn my-1 bg-[#f16022] text-white">Log Out</button>
                                </ul>
                            </div>
                            :
                            <NavLink to="/login" className={({ isActive }) =>
                                isActive ? "btn btn-md bg-[#f16123] text-white" : "btn btn-md text-white btn-ghost hover:bg-[#f16123]"
                            }>Log In</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;