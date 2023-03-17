import React from "react";
import { Link } from "react-router-dom";
import { fetchNews } from "../api";

export const NewsPage = () => {
    const [stringTest, setStringTest] = React.useState('');

    React.useEffect( () => {
        fetchNews.then((response) => {
            console.log(response);
        });
        
    }, [stringTest]);

    const fetchSomeNews = () => {
        fetchNews.then((res) => {
            console.log(res)
        })
    }
    return (
        <>

            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
                
            </div>
            <input value={stringTest} onChange={(value) => setStringTest(value.target.value)}></input>
            <button onClick={fetchSomeNews}>asdf</button>
            
            <p>News page</p>
        </>
    )
}
