import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CityHeading from "../../components/CityHeading";

import API from "../../utils/API.js";
import './LogIn.css';

class LogIn extends Component {

    state = {
        username: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };

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
        <div>
            <form>
                Username:
                <input onChange={this.handleInputChange} type="text" name="username"></input>
                Password:
                <input onChange={this.handleInputChange} type="text" name="password"></input>
                <button
                    onClick={(event) => this.signIn(
                        event,
                        { 
                            username: this.state.username,
                            password: this.state.password
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