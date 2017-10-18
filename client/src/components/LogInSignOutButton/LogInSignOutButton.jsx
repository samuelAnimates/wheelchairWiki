import React from "react";
import { Link } from "react-router-dom";

const LogInSignOutButton = props =>(
    <div className="display-inline">
        {localStorage.getItem("token") != null &&
            <a className="font-exo" onClick={props.logOut}>Log Out</a>
        }
        {localStorage.getItem("token") === undefined &&
            <Link to={"/login"}>
                <a  className="font-exo">Sign In or Register</a>
            </Link>
        }
        {localStorage.getItem("token") === null &&
            <Link to={"/login"}>
                <a  className="font-exo">Sign In or Register</a>
            </Link>
        }
    </div>
);

export default LogInSignOutButton;