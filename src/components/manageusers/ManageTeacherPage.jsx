import React, {Component} from "react";
import axios from "axios";
import { Link } from 'react-router';
import "./ManageStudentPage.css";
import "./ManageTeacherPage.css";
class ManageTeacherPage extends Component {

  constructor() {
    super();
    this.state = {
      teachers: [],
      departments: []
    };
  }

  componentDidMount() {
    var config = {
      headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTIwODA5MTIsInN1YiI6ODIsImlzcyI6Imh0dHA6XC9cL3Byb2plY3QtMi1sdHUtMDYuaGVyb2t1YXBwLmNvbVwvYXV0aCIsImlhdCI6MTQ5MjA1MjUxMiwibmJmIjoxNDkyMDUyNTEyLCJqdGkiOiJmZWUyYzg4ZDg4YjYxNDdjZmZkMWMzZmRkODk0MjdiOSJ9.e_PKY16fLqIAKxc17nv7txm7BJ3Sf8LWobyaJL8EJj4'}
    };

    axios.get('https://project-2-ltu-06.herokuapp.com/teachers', config)
      .then(response => {
        this.setState({
          teachers: response.data.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

    axios.get('https://project-2-ltu-06.herokuapp.com/departments', config)
      .then(response => {
        this.setState({
          departments: response.data.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {

    var createTeacherRow = function(teacher, department) {
      return (
        <tr key={teacher.id}>
          <td>{teacher.teacher_id}</td>
          <td>{teacher.name}</td>
          <td>{department.name}</td>
          <td>{teacher.start}</td>
          <td>{teacher.position}</td>
          <td>{teacher.degree}</td>
          <td>
            <span><Link to="#" className="edit" ><i className="lnr lnr-pencil"> Edit</i></Link></span>
            <span><Link to="#" className="remove"><i className="lnr lnr-trash"> Remove</i></Link></span>
          </td>
        </tr>
      )
    }

    return(
      <div>
        <div className="panel panel-headline">
          <div className="panel-heading">
            <h3 className="panel-title"><i className="lnr lnr-book"></i> Manage Teacher</h3>
            <p className="panel-subtitle">Last Update: March 17, 2017</p>
          </div>
          <div className="col-md-6">
            <div className="col-md-6 search_label">
                  <span>
                    <input type="text" value="" className="form-control" placeholder="Search Teacher..."/>
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
                <th>Teacher ID</th>
                <th>Teacher Name</th>
                <th>Department</th>
                <th>Start Year</th>
                <th>Position</th>
                <th>Degree</th>
                <th></th>
                </thead>
                <tbody>
                {this.state.teachers.map(createTeacherRow, this)}
                {/*{this.state.departments.map(createTeacherRow, this)}*/}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageTeacherPage;