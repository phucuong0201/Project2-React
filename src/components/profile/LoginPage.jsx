import React, {Component} from "react";
import axios from "axios";
import { Link } from 'react-router';
import './main.css';
import './phuong.css';
class LoginPage extends Component {

  render() {

    return(
      <div id="wrapper">
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle">
            <div className="auth-box ">
              <div className="left">
                <div className="content">
                  {/*<div className="logo text-center"><img src="assets/img/logo-dark.png" alt="Klorofil Logo"></div>*/}
                  <div className="logo text-center"><a href="">Internship Manager</a></div>
                  <form className="form-=auth-small" action="index.html">
                    <div className="form-group">
                      <label htmlFor="signup-email" className="control-label sr-only">Email</label>
                      <input type="email" className="form-control" id="signup-email" value="" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-password" className="control-label sr-only">Password</label>
                      <input type="password" className="form-control" id="signup-password" value="" placeholder="Password"/>
                    </div>
                    <div className="form-group clearfix">
                      <label className="fancy-checkbox element-left">
                        <input type="checkbox"/>
                          <span>Remember me</span>
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block"><Link to="index2.html">LOGIN</Link></button>
                    <div className="bottom">
                      <span><i className="fa fa-lock"></i> <a href="#">Forgot password?</a></span>
                    </div>
                  </form>
                </div>
              </div>
              <div className="right">
                <div className="overlay"></div>
                <div className="content text">
                  <h1 className="heading">Internship Manager Website</h1>
                  <p>by Hanoi University of Science and Technology</p>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;