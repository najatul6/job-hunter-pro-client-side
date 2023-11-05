import { Link } from 'react-router-dom';
import loginimg from '../../assets/login.svg'
import { AiFillGoogleCircle } from "react-icons/ai";

const LogIn = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:mr-16 lg:text-left lg:w-1/2">
                    <img src={loginimg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-6">
                    <h1 className="text-4xl font-bold text-center py-5">Log In</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#FF3811] border-2 hover:border-[#FF3811] hover:text-[#FF3811] text-white">Log In</button>
                        </div>
                    </form>
                    {/* Social Log In  */}
                    <div>
                        <div className='flex justify-center gap-5 items-center'>
                            <p className='w-[50px] h-[4px] rounded-xl bg-[#FF3811]'></p>
                            <p>Continue with</p>
                            <p className='w-[50px] h-[4px] rounded-xl bg-[#FF3811]'></p>
                        </div>
                        <div className='flex justify-center my-5'>
                            <button className='text-white text-3xl text-center hover:text-[#FF3811]'>
                                <AiFillGoogleCircle />
                            </button>
                        </div>
                    </div>

                    <p className="text-center">Are you New Here? <Link to="/signup" className="text-[#FF3811] font-bold">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;