import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blogs from "../pages/Blogs/Blogs";
import About from "../pages/About/About";
import MyJobs from "../pages/MyJobs/MyJobs";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import AddAJob from "../pages/AddAJob/AddAJob";
import AllJobs from "../pages/All Jobs/AllJobs";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import JobDetails from "../pages/JobDetails/JobDetails";
import UpdateJobs from "../components/UpdateJobs";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'alljobs',
                element: <AllJobs></AllJobs>
            },
            {
                path: 'update/:id',
                element: <UpdateJobs/>,
                loader:({params})=>fetch(`http://localhost:5000/alljobs/${params.id}`)
            },
            {
                path: 'blogs',
                element: <PrivateRoutes><Blogs /></PrivateRoutes>
            },
            {
                path: 'about',
                element: <PrivateRoutes><About /></PrivateRoutes>
            },
            {
                path: 'myjobs',
                element: <MyJobs></MyJobs>
            },
            {
                path: 'appliedjobs',
                element: <AppliedJobs></AppliedJobs>
            },
            {
                path: 'addajob',
                element: <AddAJob></AddAJob>
            },
            {
                path:'jobDetails/:id',
                element:<JobDetails></JobDetails>,
                loader:({params})=>fetch(`http://localhost:5000/alljobs/${params.id}`)
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'signup',
                element: <Register></Register>
            }
           
        ]
    }
    
    
]);

export default Routes;