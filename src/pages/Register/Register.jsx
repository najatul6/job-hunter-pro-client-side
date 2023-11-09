import { Link } from 'react-router-dom';
import registerimg from '../../assets/registration.svg'
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
// import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { updateProfile } from 'firebase/auth';
// import useAxios from '../../hooks/useAxios';


const Register = () => {
    const [error, setError] = useState('')
    const { createUser } = useAuth();
    // const navigate = useNavigate();
    // const location = useLocation();
    // const axios = useAxios();


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoURL.value;
        // const newUser = { displayName, photoURL };


    createUser(email, password)
        .then(result=>{
            const user = result.user;
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            })
            
            console.log(result.user)
            const userData = {email, displayName: name, photoURL: photo}
             axios.post('https://job-hunter-pro-server-side.vercel.app/allusers',userData)
            .then(data=>{
                console.log(data.data)
            })
        })
            //     axios.post('/api/v1/allUsers', { user.email,newUser });
            //     .then(function (response) {
            //         console.log(response);
            //       })
            //       .catch(function (error) {
            //         console.log(error);
            //       });
            //     console.log(result.user)
                
            //     navigate(location?.state ? location.state : '/');
            // })
            .catch(error => {
                setError(error.code)
            })

    }
    return (
        <div className="hero min-h-screen ">
            <Helmet>
                <title>Job HunterPro | Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:mr-16 lg:text-left lg:w-1/2">
                    <img src={registerimg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-6">
                    <h1 className="text-4xl font-bold text-center py-5">Register</h1>
                    <p className='text-center'>Enter Your Information</p>
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Full Name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photoURL" type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        {
                            error ? <p className='text-red-600 text-center mt-4'>{error}</p> : ''
                        }
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#FF3811] border-2 hover:border-[#FF3811] hover:text-[#FF3811] text-white">Register</button>
                        </div>
                    </form>


                    <p className="text-center">Already Have an account? <Link to="/login" className="text-[#FF3811] font-bold">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;