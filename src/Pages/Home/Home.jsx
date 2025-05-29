import React, { Suspense, use } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs/HotJobs';


const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json());


const Home = () => {

  const jobs = use(jobsPromise)

    return (
        <div>
            <Banner/>
           <Suspense fallback={"loading"}>
             <HotJobs jobs={jobs} />
           </Suspense>
        </div>
    );
};

export default Home;