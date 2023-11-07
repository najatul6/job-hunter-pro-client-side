import { useEffect, useState } from 'react';

const useAllJob = () => {
    const [jobs, setJobs] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/alljobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return [jobs]
};

export default useAllJob;