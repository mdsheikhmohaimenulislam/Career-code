
import React from 'react';
import JobsCards from '../../Shared/JobsCards';

const HotJobs = ({jobs}) => {

  

   

    return (
        <div>
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2 '>
                {
                    jobs.map(job => <JobsCards key={job._id} job={job}/>)
                }
            </div>
        </div>
    );
};

export default HotJobs;