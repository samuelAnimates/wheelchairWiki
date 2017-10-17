import React from "react";
import { Link } from "react-router-dom";

const LogInSignOutButton = props =>(
    <div>
        {localStorage.getItem("token") != null &&
            <button className="font-exo" onClick={props.logOut}>Log Out</button>
        }
        {localStorage.getItem("token") === undefined &&
            <Link to={"/login"}>
                <button  className="font-exo">Sign In</button>
            </Link>
        }
        {localStorage.getItem("token") === null &&
            <Link to={"/login"}>
                <button  className="font-exo">Sign In</button>
            </Link>
        }
    </div>
);

export default LogInSignOutButton;