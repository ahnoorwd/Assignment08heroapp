import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Mainlayout from "../Layout/Mainlayout";
import Installation from "../Pages/Installation";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    children:[

    {
        index:true,
        Component:Home,
    },
    {
        path:'/apps',
        Component:Apps
    },
    {
        path:'/installation',
        Component:Installation
    }


    ]
  },
{
    path:'*',
    Component:Error,
}
 
]);
export default router