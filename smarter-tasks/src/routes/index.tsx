import { createBrowserRouter } from "react-router-dom";

import Signin from "../pages/signin"
import Signup from "../pages/signup"
import ProtectedRoutes from "./ProtectedRoutes"
import AccountLayout from "../layouts/account"
import Projects from "../pages/projects"
import Members from "../pages/members"
import Logout from "../pages/logout";
import {  Navigate } from "react-router-dom";
import Notfound from "../pages/Notfound";
const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/account/projects" replace /> },

  {
    path: "/signin", 
    element: <Signin />
  },
  {
    path: "/signup", 
    element: <Signup />
  },
  { 
    path: "/logout", 
    element: <Logout /> 
  },
  { 
    path: "*", 
    element: <Notfound /> 
  },
  // Protected Routes
  {
    path: "account",
    element: (
      <ProtectedRoutes>
        <AccountLayout />
      </ProtectedRoutes>
    ),
    children: [
        { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        element: (<Projects />)
      },
      {
        path: "members",
        element: (<Members />)
      },
    ],
  },
]);
export default router;