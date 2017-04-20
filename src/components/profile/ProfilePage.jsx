import React, {Component} from 'react';
import axios from 'axios';
import ava_profile from '../../../public/dist/img/avatar.png';
import './main.css';
import './phuong.css';
class ProfilePage extends Component {

  constructor() {
    super();
    this.state = {
      users: [
        {
          "id": 82,
          "username": "admin",
          "name": "ltu",
          "email": "ltu@gmail.com",
          "phonenumber": 123456789,
          "dateofbirth": "0000-00-00",
          "gender": 1,
          "groupName": "admin",
          "groupId": 1
        }
      ]
    };
  }

  // componentDidMount() {
  //   var config = {
  //     headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTIwODA5MTIsInN1YiI6ODIsImlzcyI6Imh0dHA6XC9cL3Byb2plY3QtMi1sdHUtMDYuaGVyb2t1YXBwLmNvbVwvYXV0aCIsImlhdCI6MTQ5MjA1MjUxMiwibmJmIjoxNDkyMDUyNTEyLCJqdGkiOiJmZWUyYzg4ZDg4YjYxNDdjZmZkMWMzZmRkODk0MjdiOSJ9.e_PKY16fLqIAKxc17nv7txm7BJ3Sf8LWobyaJL8EJj4'}
  //   };
  //
  //   axios.get('http://project-2-ltu-06.herokuapp.com/user', config)
  //     .then(response => {
  //       this.setState({
  //         users: response.data
  //       });
  //     })
  //     .catch(error => {
  //       console.log('Error fetching and parsing data', error);
  //     });
  //
  //   axios.get('http://project-2-ltu-06.herokuapp.com/classes', config)
  //     .then(response => {
  //       this.setState({
  //         users: response.data
  //       });
  //     })
  //     .catch(error => {
  //       console.log('Error fetching and parsing data', error);
  //     });
  // }

  render() {

    var createProfileView = function(user) {
      return (
        <div className="main-content">
          <div className="container-fluid">
            <div className="clearfix">
              <div className="profile-left">
                <div className="profile-header">
                  <div className="overlay"></div>
                  <div className="profile-main">
                    <img src={ava_profile} className="img-circle" alt="Avatar"/>
                    <h3 className="name">{user.name}</h3>
                    <span className="online-status status-available">Available</span>
                  </div>
                </div>
              </div>
              <div className="profile-right user_info">
                <div className="col-md-12">
                  <div className="panel">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-md-6"><span>Name</span></div>
                        <div className="col-md-4"><span>{user.name}</span></div>
                        <div className="col-md-2"><span className="profile_info_btn"><i className="lnr lnr-pencil"></i> <i className="lnr lnr-checkmark-circle"></i></span></div>
                      </div>
                    </div>
                    <hr/>
                    <div className="panel-body">
                      <ul className="list-unstyled task-list">
                        <li>
                          <div className="row">
                            <div className="col-md-6"><span>Birthday</span></div>
                            <div className="col-md-4"><span>{user.dateofbirth}</span></div>
                            <div className="col-md-2"><span className="profile_info_btn"><i className="lnr lnr-pencil"></i> <i className="lnr lnr-checkmark-circle"></i></span></div>
                          </div>
                          <hr/>
                          <div className="row">
                          <div className="col-md-6"><span>Gender</span></div>
                          <div className="col-md-4"><span>
                            {user.gender === 0 ?  'Male' : 'Female' }
                          </span></div>
                          <div className="col-md-2"><span className="profile_info_btn"><i className="lnr lnr-pencil"></i> <i className="lnr lnr-checkmark-circle"></i></span></div>
                          </div>
                        </li>
                        <hr/>
                        {/*<div className="row">*/}
                        {/*<div className="col-md-6"><span>Class</span></div>*/}
                        {/*<div className="col-md-4"><span>LTU</span></div>*/}
                        {/*<div className="col-md-2"><span className="profile_info_btn"><i className="lnr lnr-pencil"></i> <i className="lnr lnr-checkmark-circle"></i></span></div>*/}
                        {/*</div>*/}
                        {/*<hr/>*/}
                        {/*<li>*/}
                        {/*<div className="row">*/}
                        {/*<div className="col-md-6"><span>Grade</span></div>*/}
                        {/*<div className="col-md-4"><span>12</span></div>*/}
                        {/*<div className="col-md-2"><span className="profile_info_btn"><i className="lnr lnr-pencil"></i> <i className="lnr lnr-checkmark-circle"></i></span></div>*/}
                        {/*</div>*/}
                        {/*</li>*/}
                        {/*<hr/>*/}
                        {/*<li>*/}
                        {/*<div className="row">*/}
                        {/*<div className="col-md-6"><span>Major</span></div>*/}
                        {/*<div className="col-md-4"><span>Software Engineering</span></div>*/}
                        {/*<div className="col-md-2"><span className="profile_info_btn"><i className="lnr lnr-pencil"></i> <i className="lnr lnr-checkmark-circle"></i></span></div>*/}
                        {/*</div>*/}
                        {/*</li>*/}
                        {/*<hr/>*/}
                        <li>
                          <div className="row">
                            <div className="col-md-6"><span>Phone</span></div>
                            <div className="col-md-4"><span>{user.phonenumber}</span></div>
                            <div className="col-md-2"><span className="profile_info_btn"><i className="lnr lnr-pencil"></i> <i className="lnr lnr-checkmark-circle"></i></span></div>
                          </div>
                        </li>
                        <hr/>
                        <li>
                          <div className="row">
                            <div className="col-md-6"><span>Email</span></div>
                            <div className="col-md-4"><span>{user.email}</span></div>
                            <div className="col-md-2"><span className="profile_info_btn"><i className="lnr lnr-pencil"></i> <i className="lnr lnr-checkmark-circle"></i></span></div>
                          </div>
                        </li>
                      </ul>
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