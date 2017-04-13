import React, {Component} from "react";
import axios from "axios";
import "./ManageStudentPage.css";
class ManageSystemUserPage extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    var config = {
      headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTIxMDA0NDQsInN1YiI6ODIsImlzcyI6Imh0dHA6XC9cL3Byb2plY3QtMi1sdHUtMDYuaGVyb2t1YXBwLmNvbVwvYXV0aCIsImlhdCI6MTQ5MjA3MjA0NCwibmJmIjoxNDkyMDcyMDQ0LCJqdGkiOiI5YTRlMTcyOTUyZjY0MGRmODgyNjQ2Njc1MzM2NDkzZCJ9.k5cxabxpskjvegtjlXXXVLafi5VRVUgqg3sKFfQA5eM'}
    };

    axios.get('https://project-2-ltu-06.herokuapp.com/users', config)
      .then(response => {
        this.setState({
          teachers: response.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {

    var createUserRow = function(user) {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.name}</td>
          <td>{user.gender}</td>
          <td>{user.dateofbirth}</td>
          <td>{user.email}</td>
          <td>{user.phonenumber}</td>
          <td>{user.group}</td>
          <td></td>
        </tr>
      )
    }
    return(
      <div>
        <div className="panel panel-headline">
          <div className="panel-heading">
            <h3 className="panel-title"><i className="lnr lnr-book"></i> Manage Student</h3>
            <p className="panel-subtitle">Last Update: March 17, 2017</p>
          </div>
          <div className="col-md-6">
            <div className="col-md-6 search_label">
                  <span>
                    <input type="text" value="" className="form-control" placeholder="Search User..."/>
                  </span>
            </div>
            <div className="col-md-3 search">
              <span><button type="button" className="btn btn-primary"><i className="lnr lnr-magnifier"></i></button></span>
            </div>
          </div>
          <div className="panel-body">
            <div className="row">
              <table className="table" id="table_point">
                <thead>
                <th>User ID</th>
                <th>Username</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Birthday</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Groupname</th>
                <th>Action</th>
                </thead>
                <tbody>
                {this.state.users.map(createUserRow, this)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageSystemUserPage;