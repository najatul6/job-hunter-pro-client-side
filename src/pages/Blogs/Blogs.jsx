import blogbg from '../../assets/blogbg.png';
import accesstoken from '../../assets/accessToken.png';
import tokenwork from '../../assets/clientsidework.jpg';
import expreesimg from '../../assets/express.png';
import nestjsimg from '../../assets/nest js.jpg'
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='relative flex justify-center items-center w-full'>
                <img className='w-full lg:h-screen rounded-xl' src={blogbg} alt="" />
                <h1 className='absolute text-4xl lg:text-6xl font-bold w-full text-center bg-gradient-to-r from-[#818181] rounded-xl h-full flex justify-center items-center text-[#FF3811]'>Job Hunter Pro | Blogs</h1>
            </div>
            <div className='my-5 text-white'>
                {/* Question - 01  */}
                <div className='flex gap-5 flex-col items-center lg:flex-row'>
                    <div className='lg:w-1/2'>
                        <img src={accesstoken} alt="" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h2 className='font-bold text-xl'>Question : What is an access token and refresh token?</h2>
                        <p className='mt-4'>Answer :
                            <div className='space-y-4 my-5 px-4 text-justify'>
                                <p>Access Token :</p>
                                <hr />
                                <li>
                                    Access tokens are usually used for a limited duration, often just for the duration of a single session or request.
                                </li>
                                <li>
                                    It is used to prove the identity of the user or application to the server and to demonstrate the permissions and privileges granted to the user or application.
                                </li>
                                <li>
                                    Once an access token expires, the user or application must request a new one, often by re-authenticating.
                                </li>
                                <Link className='text-[#FF3811]' target='_blank' to={'https://en.wikipedia.org/wiki/Access_token'}>
                                    Read More...
                                </Link>
                            </div>
                            <div className='space-y-4 my-5 px-4 text-justify'>
                                <p>Refresh Token :</p>
                                <hr />
                                <li>
                                    Refresh tokens are valuable targets for attackers, so they should be stored and transmitted securely.
                                </li>
                                <li>
                                    A refresh token is a long-lived, typically time-limited token that is used to obtain a new, fresh access token without requiring the user to re-enter their credentials or perform the full authentication process again
                                </li>
                                <li>
                                    They are typically stored securely on the client-side (e.g., a mobile app or web application) and used to obtain new access tokens when the current one expires or is revoked.
                                </li>
                                <Link className='text-[#FF3811]' target='_blank' to={'https://stackoverflow.com/questions/38986005/what-is-the-purpose-of-a-refresh-token'}>
                                    Read More...
                                </Link>
                            </div>
                        </p>
                    </div>
                </div>
                <div className='flex gap-5 flex-col items-center lg:flex-row-reverse my-5'>
                    <div className='lg:w-1/2'>
                        <img src={tokenwork} alt="" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h2 className='font-bold text-xl'>Question : How do work Access token and Refresh token and where should we store them on the client-side?</h2>
                        <p className='mt-4'>Answer :
                            <p className='px-4 text-justify mt-5'>
                                Access tokens are short-lived authentication tokens used for verifying user or application identity and permissions when accessing protected resources. Refresh tokens are long-lived tokens used to renew access tokens without re-authentication, maintaining user sessions. Store these tokens securely on the client-side using suitable methods, such as cookies, secure storage mechanisms, or browser storage, based on the application type. Regularly check token expiration and ensure secure transmission over HTTPS to enhance security. <Link className='text-[#FF3811]' target='_blank' to={'https://stackoverflow.com/questions/57650692/where-to-store-the-refresh-token-on-the-client'}>
                                    Read More...
                                </Link>
                            </p>
                        </p>
                    </div>
                </div>
                {/* Question - 02  */}
                <div className='flex gap-5 flex-col items-center lg:flex-row mt-5'>
                    <div className='lg:w-1/2'>
                        <img src={expreesimg} alt="" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h2 className='font-bold text-xl'>Question : What is express js?</h2>
                        <p className='mt-4'>Answer :
                            <p className='px-4 text-justify mt-5 space-y-4'>
                                <h2 className='text-xl font-bold'>Web Applications :</h2>
                                <p>
                                    Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
                                </p>
                                <h2 className='text-xl font-bold'>API :</h2>
                                <p>
                                    With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.
                                </p>
                                <h2 className='text-xl font-bold'>Performance</h2>
                                <p>
                                    Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.
                                </p>
                                <Link className='text-[#FF3811]' target='_blank' to={'https://www.simplilearn.com/tutorials/nodejs-tutorial/what-is-express-js'}>
                                    Read More...
                                </Link>
                            </p>
                        </p>
                    </div>
                </div>
                {/* Question - 03  */}
                <div className='flex gap-5 flex-col items-center lg:flex-row-reverse my-5'>
                    <div className='lg:w-1/2'>
                        <img src={nestjsimg} alt="" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h2 className='font-bold text-xl'>Question : What is Nest JS?</h2>
                        <div className='mt-4 space-y-5'>Answer :
                            <p className='px-4 text-justify mt-5'>
                                Managing a large-scale application can be tedious, especially when built without a well-planned structure and strict code organization strategy. It can lead to disaster during maintenance and should be avoided at all costs. This disaster is caused by changes made to the codebase and new features as the project grows in the user base.
                            </p>
                            <p className='px-4 text-justify mt-5'>
                                Nest.js, on the other hand, was built to offer solutions to code structure and code organization strategy problems. It combines modern and modular approaches to software engineering principles.
                            </p>
                            <p className='px-4 text-justify mt-5'>
                                Nest.js uses TypeScript for type checking and provides an out-of-the-box software architecture for building and deploying testable, scalable, loosely coupled, and easily maintainable applications.
                            </p>
                            <p className='px-4 text-justify mt-5'>
                                In this article, we’ll explore Nest.js and what you can build with it. We’ll also explain the pros and cons of the framework to give you a clear picture of why companies prefer it to other Node.js frameworks. And before we wrap up, we’ll demonstrate how to create a to-do API with Nest.js.
                                <Link className='text-[#FF3811]' target='_blank' to={'https://dev.to/omher/intro-to-nestjs-39m6'}>
                                    Read More...
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;