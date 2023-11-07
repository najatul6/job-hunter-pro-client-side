import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginimg from '../../assets/login.svg'
import { AiFillGoogleCircle } from "react-icons/ai";
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const LogIn = () => {
    const { signin, googleLogin } = useAuth();
    const [error, setError] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogIn = async (e) => {
        e.preventDefault();
        const tostId = toast.loading("Logging in...")
        try {
            await signin(email, password);
            
            toast.success('Log In successfully', { id: tostId })
            navigate(location?.state ? location.state : '/');
        }
        catch (error) {
            toast.error(error.code, { id: tostId })
            setError(error.code);
        }


    }

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        icon: 'success',
                        title: "Log in Succesfully",
                    })
                    navigate(location?.state ? location.state : '/');
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'warning',
                    title: error.message,
                })
            })
    }

    return (
        <div className="hero min-h-screen ">
            <Helmet>
                <title>Job HunterPro | Log In</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:mr-16 lg:text-left lg:w-1/2">
                    <img src={loginimg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-6">
                    <h1 className="text-4xl font-bold text-center py-5">Log In</h1>
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" onBlur={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" onBlur={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
                            <label className="text-right">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {
                            error ? <p className='text-red-600 font-bold text-center  mt-6'>{error}</p> : ''
                        }
                        <div className="form-control">
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
                            <button onClick={handleGoogle} className='text-white text-3xl text-center hover:text-[#FF3811]'>
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