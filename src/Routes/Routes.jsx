import React from 'react';

import { createBrowserRouter } from "react-router";
import Home from '../pages/Home';
import Products from '../Pages/Products';
import MainLayout from '../Layouts/MainLayout';
import ErrorPages from '../Pages/ErrorPages';
import Wishlist from '../Pages/Wishlist';
import ProductDetails from '../Pages/ProductDetails';


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPages></ErrorPages>,
        hydrateFallbackElement: <p>Loading...</p>,
        children: [
            {
                index:true,
                path: "/",
                Component:Home,
                
            },
            {
                path: "/products",
                Component:Products,
            },
            {
                path: "/wishlist",
                Component:Wishlist,

            },
            {
                path: "/product/:id",
                Component:ProductDetails

            }
        ]
    },
    // {
    //     path:"*",
    //     Component:ErrorPages,
    // }


]);

export default router;

