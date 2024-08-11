import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/miniPages/About";
import PrivacyPolicy from "../pages/miniPages/PrivacyPolicy";
import ContactUs from "../pages/miniPages/ContactUs";
import SingleBlog from "../pages/blogs/singleBlog/SingleBlog";
import Login from "../pages/users/Login";
import Register from "../pages/users/Register";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import AddPost from "../pages/admin/post/AddPost";
import ManagePost from "../pages/admin/post/ManagePost";
import ManageUser from "../pages/admin/user/ManageUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about-us",
        element: <About />
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
      {
        path: "blogs/:id",
        element: <SingleBlog />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "dashboard",
        element: <Dashboard />,  // It will be protected route
        children: [
          {
            path: '',
            element: <Dashboard />
          },
          {
            path: 'add-new-post',
            element: <AddPost />
          },
          {
            path: 'manage-items',
            element: <ManagePost />
          },
          {
            path: 'users',
            element: <ManageUser />
          }
        ]
      }
    ]
  },
]);

export default router;
