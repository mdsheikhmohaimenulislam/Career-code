import React, { Suspense } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import JobsList from './JobsList';
import { JobsCreatedByPromise } from '../../api/JobsApi';

const MyPostedJobs = () => {

    const {user} = UseAuth();

    return (
        <div>
            <h2>My Posted Jobs: </h2>

            <Suspense>
                <JobsList JobsCreatedByPromise={JobsCreatedByPromise(user.email)} />
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;