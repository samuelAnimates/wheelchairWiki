import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CityHeading from "../../components/CityHeading";

import API from "../../utils/API.js";
import './LogIn.css';

class LogIn extends Component {

    state = {
        username: "",
        password: "",
        newUsername: "",
        newPassword: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };

    register = (event, userData) => {
        event.preventDefault();
        API.register(userData)
        .then(res =>{
            //local storage setter
            localStorage.setItem('token', res.data.token);
            this.props.history.push("/");
        })
        .catch(err => alert("Oops! there was a problem registering. Please pick a new username/password combo and try again."));
    }

    signIn = (event, userData) => {
        event.preventDefault();
        API.signIn(userData)
        .then(res =>{
            //local storage setter
            localStorage.setItem('token', res.data.token);
            this.props.history.push("/");
        })
        .catch(err => alert("Oops! there was a problem logging in. Please check your credentials and try again."));
    }

  render() {
    return (
      <div>
          <CityHeading
            cityName="Wheelchair Travel Wiki"
          />
        <div className="border-bottom-gray display-block margin-auto text-center width-60pc">
            <h2 className="font-exo font-size-1p75em">Sign In</h2>
            <form className="font-opensans">
                <div>
                    Username:
                    <input onChange={this.handleInputChange} type="text" name="username"></input>
                </div>
                <div>
                    Password:
                    <input onChange={this.handleInputChange} type="text" name="password"></input>
                </div>
                <div>
                    <button
                        onClick={(event) => this.signIn(
                            event,
                            { 
                                username: this.state.username,
                                password: this.state.password
                            }
                        )}
                    >
                        Log In
                    </button>
                </div>
            </form>
        </div>
        <div className="display-block margin-auto text-center width-60pc">
            <h2 className="font-exo font-size-1p75em">Register</h2>
            <form className="font-opensans">
                <div>
                    New Username:
                    <input onChange={this.handleInputChange} type="text" name="newUsername"></input>
                </div>
                <div>
                    New Password:
                    <input onChange={this.handleInputChange} type="text" name="newPassword"></input>
                </div>
                <div>
                    <button
                        onClick={(event) => this.register(
                            event,
                            { 
                                username: this.state.newUsername,
                                password: this.state.newPassword
                            }
                        )}
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
      </div>
    );
  }

}

export default LogIn;