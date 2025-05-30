import { createBrowserRouter } from "react-router";

import RootLayOuts from "../LayOuts/RootLayOuts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobsDetails from "../Pages/JobsDetials/JobsDetails";
import JobsApply from "../Pages/JobsApply/JobsApply";
import PrivateRouter from "./PrivateRouter";
import Applications from "../Applications/Applications";
import AddJobs from "../Pages/AddJobs/AddJobs";


export const router = createBrowserRouter([
    {
        path:'/',
        Component:RootLayOuts,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/jobs/:id',
                Component:JobsDetails,
                loader:({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path:'/myApplications',
                element:<PrivateRouter><Applications/></PrivateRouter>
            },
            {
                path:'/jobApply/:id',
                element:<PrivateRouter><JobsApply/></PrivateRouter>
            },
            {
                path:'/addJob',
                element:<PrivateRouter><AddJobs/></PrivateRouter>
            },
            {path:'/register',Component:Register},
            {path:'/login', Component:Login}
        ]
    }
])