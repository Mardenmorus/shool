import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <>

            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
                <Link to="/blog">Blog</Link>

            </div>
            <p>Home page</p>
        </>
    )
}
