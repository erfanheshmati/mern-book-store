import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import Dashboard from "../dashboard/Dashboard";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBook from "../dashboard/EditBook";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRouter from "../private-routes/PrivateRouter";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/book/:id",
                element: <SingleBook />,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
            }
        ]
    },
    {
        path: "/admin/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <PrivateRouter><Dashboard /></PrivateRouter>
            },
            {
                path: "/admin/dashboard/upload",
                element: <PrivateRouter><UploadBook /></PrivateRouter>
            },
            {
                path: "/admin/dashboard/manage",
                element: <PrivateRouter><ManageBooks /></PrivateRouter>
            },
            {
                path: "/admin/dashboard/edit-book/:id",
                element: <PrivateRouter><EditBook /></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
            }
        ]
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default Router