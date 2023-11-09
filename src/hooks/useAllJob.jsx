import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useAllJob = () => {
    const [jobs, setJobs] = useState();
    const axios = useAxios()

    useEffect(() => {
        axios.get('/alljobs')
        .then(res => setJobs(res.data))
        .catch(err => setJobs(err))
    }, []);

    return [jobs]
};

export default useAllJob;