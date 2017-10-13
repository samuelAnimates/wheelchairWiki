import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CityHeading from "../../components/CityHeading";

import API from "../../utils/API.js";
import './LogIn.css';

class LogIn extends Component {


    signIn = (event, userData) => {
        event.preventDefault();
        API.signIn(userData)
        .then(res =>{
            //local storage setter
            localStorage.setItem('token', res.data.token);
            const myToken = localStorage.getItem('token');
            console.log(myToken);
        })
        .catch(err => console.log(err));
    }

  render() {
    return (
      <div>
          <CityHeading
            cityName="Wheelchair Travel Wiki"
          />
        <div>
            <form>
                First name:
                <input type="text" name="firstname"></input>
                Last name:
                <input type="text" name="lastname"></input>
                <button
                    onClick={(event) => this.signIn(
                        event,
                        { 
                            username: "smendez",
                            password: "qwertyuiop"
                        }
                    )}
                >Log In</button>
            </form>
        </div>
      </div>
    );
  }

}

export default LogIn;