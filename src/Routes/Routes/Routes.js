import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AddNewProduct from "../../Pages/Dashboard/Dashboard/AddNewProduct";
import AllBuyers from "../../Pages/Dashboard/Dashboard/AllBuyers";
import AllSellers from "../../Pages/Dashboard/Dashboard/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyBuyers from "../../Pages/Dashboard/Dashboard/MyBuyers";
import MyOrders from "../../Pages/Dashboard/Dashboard/MyOrders";
import MyProuducts from "../../Pages/Dashboard/Dashboard/MyProuducts";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import ProductsByCat from "../../Pages/ProductsByCat/ProductsByCat/ProductsByCat";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories/:name",
        element: (
          <PrivateRoutes>
            <ProductsByCat></ProductsByCat>
          </PrivateRoutes>
        ),
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/my-products",
        element: <MyProuducts></MyProuducts>,
      },
      {
        path: "/dashboard/my-buyers",
        element: <MyBuyers></MyBuyers>,
      },
      {
        path: "/dashboard/add-product",
        element: <AddNewProduct></AddNewProduct>,
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/all-sellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/all-buyers",
        element: <AllBuyers></AllBuyers>,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
