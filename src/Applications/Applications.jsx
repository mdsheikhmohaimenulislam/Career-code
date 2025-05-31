import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import UseAuth from '../Hooks/UseAuth';
import { applicationsPromise } from '../api/applicationsApis';


const Applications = () => {

    const {user} = UseAuth()

    // firebase user.accessToken
    // console.log(user.accessToken);

    return (
        <div>
            <ApplicationStats/>
           <Suspense fallback={"loading my application"}>
             <ApplicationList applicationsPromise={applicationsPromise(user.email,user.accessToken )} />
           </Suspense>
        </div>
    );
};

export default Applications;