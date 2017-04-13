import React, {Component} from 'react';
import axios from 'axios';
import ava_profile from '../../../public/dist/img/avatar.png';
import './main.css';
import './phuong.css';
class ProfilePage extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    var config = {
      headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTIwMjc2MjcsInN1YiI6ODIsImlzcyI6Imh0dHA6XC9cL3Byb2plY3QtMi1sdHUtMDYuaGVyb2t1YXBwLmNvbVwvYXV0aCIsImlhdCI6MTQ5MTk5OTIyNywibmJmIjoxNDkxOTk5MjI3LCJqdGkiOiJlNjZhZWZlZjVhYjEwMmQ4Y2Y1NTQ5ZmY1NThmY2ZhMCJ9.3Nn099790upCZHMHP4TRt4GqRjYMQ1gsmWgegU30Br8'}
    };

    axios.get('http://project-2-ltu-06.herokuapp.com/user', config)
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {

    var createProfileView = function(user) {
      return (
        <div className="main-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="panel">
                  <div className="panel-body">
                    <form action="index.html">
                      <div className="col-md-12 ">
                        <p className="details"><b>Topic Name</b></p>
                        <p>Analysis data from security.daily to detect website attacks</p>
                        <hr>
                          <p className="details"><b>Category</b></p>
                          <p>Programmer</p>
                          <hr>
                            <p className="details"><b>Company</b></p>
                            <p>VNIST</p>
                            <hr>
                              <p className="details"><b>Instructor Teacher</b></p>
                              <p>Vũ Thị Hương Giang</p>
                              <hr>
                                <div className="panel">
                                  <div className="panel-heading internship_job_label">
                                    <div>
                                      <h4><b>Internship Job</b></h4>
                                      <span>
                                                <p className="timestampt time">From: February 2 To: March 17</p>
                                            </span>
                                    </div>
                                  </div>
                                  <div className="panel-body job_details_body">
                                    <ul className="list-unstyled todo-list">
                                      <li>
                                        <label className="control-inline fancy-checkbox">
                                          <input type="checkbox"><span className="check"></span>
                                        </label>
                                        <p>
                                          <span className="title">Setup Cloud Server</span>
                                          <span className="short-description">Set up and configure, using cloudify</span>
                                          <span className="date">Feb 5, 2017</span>
                                        </p>
                                        <div className="controls">
                                          <a href="#"><i className="icon-software icon-software-pencil"></i></a> <a href="#"><i className="icon-arrows icon-arrows-circle-remove"></i></a>
                                        </div>
                                      </li>
                                      <li>
                                        <label className="control-inline fancy-checkbox">
                                          <input type="checkbox"><span></span>
                                        </label>
                                        <p>
                                          <span className="title">Learn Ruby on Rails</span>
                                          <span className="short-description">Create and a report on Ruby on Rails</span>
                                          <span className="date">March 1, 2017</span>
                                        </p>
                                        <div className="controls">
                                          <a href="#"><i className="icon-software icon-software-pencil"></i></a> <a href="#"><i className="icon-arrows icon-arrows-circle-remove"></i></a>
                                        </div>
                                      </li>
                                      <li>
                                        <label className="control-inline fancy-checkbox">
                                          <input type="checkbox"><span></span>
                                        </label>
                                        <p>
                                          <strong>Final Semester Report</strong>
                                          <span className="short-description">Write details report about what have you done in your job, what problem you have in entire of internship period</span>
                                          <span className="date">Oct 11, 2016</span>
                                        </p>
                                        <div className="controls">
                                          <a href="#"><i className="icon-software icon-software-pencil"></i></a> <a href="#"><i className="icon-arrows icon-arrows-circle-remove"></i></a>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                      </div>
                      <div align="center">
                        <button type="button" className="btn btn-success"><span className="lnr lnr-checkmark-circle"></span> Apply Job</button>
                        <button type="button" className="btn btn-danger"><span className="lnr lnr-cross-circle"></span> Refuse Job</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }

    return (
      <div className="container-fluid">
        {this.state.users.map(createProfileView, this)}
      </div>
    );
  }
}

export default ProfilePage;