
const Banner = () => {
    return (
        <div className="hero w-full h-full md:h-[500px] lg:h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/rvKc1WQ/Banner.png)' }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className=" text-center text-white">
                <div className="max-w-[1440px] mx-auto py-3 lg:flex lg:justify-end">
                    <div className="lg:w-1/2">
                        <h1 className="mb-5 text-4xl font-bold lg:text-right">Your Path to the Perfect Job</h1>
                        <p className="mb-5 lg:text-right text-white">Discover a world of opportunities with Job Hunter Pro. Whether you&#39;re looking for on-site, remote, hybrid, or part-time positions, we&#39;ve got you covered. Your dream job is just a click away!</p>
                        <div className="join">
                            <div>
                                <input className="input text-white input-bordered join-item" placeholder="Search" />
                            </div>
                            <button className="btn text-white join-item border-[#f16123] bg-transparent border-2 hover:bg-[#f16123]">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;