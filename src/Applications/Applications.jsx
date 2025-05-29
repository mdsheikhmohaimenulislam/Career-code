import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import UseAuth from '../Hooks/UseAuth';
import { applicationsPromise } from '../api/applicationsApis';


const Applications = () => {

    const {user} = UseAuth()

    return (
        <div>
            <ApplicationStats/>
           <Suspense fallback={"loading my application"}>
             <ApplicationList applicationsPromise={applicationsPromise(user.email)} />
           </Suspense>
        </div>
    );
};

export default Applications;