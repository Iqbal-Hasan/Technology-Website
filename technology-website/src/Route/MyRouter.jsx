import { createBrowserRouter } from "react-router-dom";
import "./../index.css";
import Home from "../Component/Home";
import AddProduct from "../Component/AddProduct";
import MyCart from "../Component/MyCart";
import Login from "../Component/Login";
import Signup from "../Component/Signup";
import Layout from "../HomeLayout/Layout";
import Apple from "../Component/Brands/Apple";
import Google from "../Component/Brands/Google";
import Beats from "../Component/Brands/Beats";
import Microsoft from "../Component/Brands/Microsoft";
import Samsung from "../Component/Brands/Samsung";
import Xiaomi from "../Component/Brands/Xiaomi";
import PageNotFound from "../PageNotFound/PageNotFound";
import PrivateRoute from "./PrivateRoute";
import DeatailsBrand from "../Component/DeatailsBrand";
import UpdateProducts from "../Component/UpdateProducts";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://tech-product-server-ecdtknwbq-iqbals-projects-c94de1fb.vercel.app/cart"
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/brand/apple",
        element: <Apple></Apple>,
      },
      {
        path: "/brand/google",
        element: <Google></Google>,
      },
      {
        path: "/brand/beats",
        element: <Beats></Beats>,
      },
      {
        path: "/brand/microsoft",
        element: <Microsoft></Microsoft>,
      },
      {
        path: "/brand/samsung",
        element: <Samsung></Samsung>,
      },
      {
        path: "/brand/xiaomi",
        element: <Xiaomi></Xiaomi>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <DeatailsBrand></DeatailsBrand>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tech-product-server-ecdtknwbq-iqbals-projects-c94de1fb.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProducts></UpdateProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tech-product-server-ecdtknwbq-iqbals-projects-c94de1fb.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default MyRouter;
