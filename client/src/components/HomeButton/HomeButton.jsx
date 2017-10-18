import React from "react";
import "./HomeButton.css";
import { Link } from "react-router-dom";

const Home = props =>(
    <div className="display-inline">
        <Link to={"/"}>
                <a  className="font-exo">Home</a>
         </Link>
    </div>
);

export default Home;