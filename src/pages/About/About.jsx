import { Helmet } from 'react-helmet-async';
import aboutbg from '../../assets/bg.jpg'
import johunterabout from '../../assets/jobhunter.jpg'

const About = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Helmet>
            <title>Job HunterPro | About</title>
           </Helmet>
            <div className='relative flex justify-center items-center'>
                <img className='w-full lg:h-screen rounded-xl' src={aboutbg} alt="" />
                <h1 className='absolute text-4xl lg:text-6xl font-bold text-white w-full text-center bg-gradient-to-r from-[#818181] rounded-xl h-full flex justify-center items-center'>Job Hunter Pro | About US</h1>
            </div>
            <div className='flex flex-col-reverse items-center lg:flex-row gap-5 my-5'>
                <div className='lg:w-1/2'>
                    <img src={johunterabout} alt="" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <p className='text-xl text-white'>
                        Job Hunter Pro is the first and leading career management site in the country. Eight young business and IT professional backed by strong command over e-business and in-depth understanding of the needs of job seekers and employers in the country&#39;s context started this venture on July 2023.
                    </p>
                    <h1 className='text-2xl text-white font-bold'>
                        The vision of the company is to try bringing Internet technology in the mainstream business and economic life of the society.
                    </h1>
                    <p className='text-xl text-white'>
                        Our web-site aims to explore maximum benefits of the Internet. We believe our service will help the job seekers manage their career more efficiently. This site will also help employers solve many of the problems associated with traditional recruiting methods and allow them to save time and money.
                    </p>
                    <p className='text-xl text-white'>
                        Right after its launching, the site has been able to attract the Internet users in the country. The site regularly updates Job Information (on average more than 4500 valid job news are placed at any point of time at the site), provides facility to the job seekers for posting resume and online application. The site has also been able to get good response from a large number of organizations in the country who use online job advertisement facility, online CV bank access and online application receiving and processing facility of Job Hunter Pro Till now, more than 45,000 employers in the country have recruited more than 1 million professionals at different levels for their organizations through Job Hunter pro service.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;