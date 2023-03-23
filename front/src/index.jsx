import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { HomePage } from './pages/home';
import { NewsPage } from './pages/news';
import { BlogPage } from './pages/blog';
import './style/main.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "news",
        element: <NewsPage/>
    },
    {
        path: "blog",
        element: <BlogPage/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);