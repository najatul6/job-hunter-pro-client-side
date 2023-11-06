import { Link } from 'react-router-dom';
import errorImg from '../../assets/error.svg'
import { AiFillBackward } from "react-icons/ai";
import { Helmet } from 'react-helmet-async';
const ErrorPage = () => {
    return (
        <div className='max-w-[1440px] mx-auto py-5'>
            <Helmet>
                <title>Job HunterPro | Error</title>
            </Helmet>
            <img className='w-full md:h-[600px]' src={errorImg} alt="" />
            <h1 className='text-center text-4xl mb-5'>Page Not Found</h1>
            <Link to='/' className='flex justify-center my-4'>
                <button className='bg-[#f16123] flex items-center gap-4 py-5 px-10 text-xl font-bold text-white rounded-ss-3xl rounded-ee-3xl border-2'>
                    <AiFillBackward/>
                    Go Back
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;