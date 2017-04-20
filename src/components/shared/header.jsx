import React, { Component } from 'react';
import { Link } from 'react-router';
import './header.css';

class Header extends Component {
  render() {
    return(
      <nav className="navbar navbar-inverse navbar-embossed" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
            <span className="sr-only">Toggle navigation</span>
          </button>
          <a className="navbar-brand" href="/home">SIE Internship Website</a>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse-01">
          <ul className="nav navbar-nav navbar-left">
            {/*<li className="dropdown">*/}
              {/*<a href="#" className="dropdown-toggle" data-toggle="dropdown">Topics<b className="caret"></b></a>*/}
              {/*<span className="dropdown-arrow"></span>*/}
              {/*<ul className="dropdown-menu">*/}
                {/*<li><Link to="/topics">All Topics</Link></li>*/}
                {/*<li><Link to="/registeredtopics">Registed Topics</Link></li>*/}
                {/*<li className="divider"></li>*/}
                {/*<li><Link to="#">Successful Registered Topic</Link></li>*/}
              {/*</ul>*/}
            {/*</li>*/}
              <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">About Internship Term<b className="caret"></b></a>
                  <span className="dropdown-arrow"></span>
                  <ul className="dropdown-menu">
                      <li><Link to="/topics">All Topics</Link></li>
                      <li><Link to="/internshippoint">Internship Point</Link></li>
                      {/*<li className="divider"></li>*/}
                      {/*<li><a href="#">Successful Registered Topic</a></li>*/}
                  </ul>
              </li>
              <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">About Your Internship<b className="caret"></b></a>
                  <span className="dropdown-arrow"></span>
                  <ul className="dropdown-menu">
                      <li><Link to="/topics">Registered Topics</Link></li>
                      <li><Link to="/internshipplan">Internship Plan</Link></li>
                      {/*<li className="divider"></li>*/}
                      {/*<li><a href="#">Successful Registered Topic</a></li>*/}
                  </ul>
              </li>
            <li className="dropdown">
              <Link to="#" className="dropdown-toggle" data-toggle="dropdown">Manage User<b className="caret"></b></Link>
              <span className="dropdown-arrow"></span>
              <ul className="dropdown-menu">
                <li><Link to="/managestudent">Manage Student</Link></li>
                <li><Link to="/manageteacher">Manage Teacher</Link></li>
                <li className="divider"></li>
                  <li><Link to="managesystemuser">Manage System User</Link></li>
              </ul>
            </li>
            <li><Link to="/about">About Us</Link></li>
              <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Admin<b className="caret"></b></a>
                  <span className="dropdown-arrow"></span>
                  <ul className="dropdown-menu">
                      <li><Link to="/profile">Profile</Link></li>
                      <li><a href="/allcv">Manage CV</a></li>
                      <li className="divider"></li>
                      <li><Link to="/login">Log Out</Link></li>
                  </ul>
              </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;