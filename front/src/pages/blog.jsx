import React from "react";
import { Link } from "react-router-dom";

export const BlogPage = () => {
    return (
        <>

            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>

                <h1>Хуй</h1>
                
            </div>
            <p>Home page</p>
        </>
    )
}