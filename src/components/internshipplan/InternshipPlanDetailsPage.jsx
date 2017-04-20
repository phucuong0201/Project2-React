import React, {Component} from "react";
import axios from "axios";
import { Link } from 'react-router';
import "./InternshipPlanPage.css";
class InternshipPlanDetailsPage extends Component {

  constructor() {
    super();
    this.state = {
      students: [
        {
          "name": "LTU12A",
          "id": 92,
          "student_id": 1,
          "school_year": 0,
          "grade": 4,
          "from_year": 2013,
          "to_year": 2018,
          "major": "công nghệ thông tin"

        }
      ]
    };
  }

  // componentDidMount() {
  //     var config = {
  //         headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTE5NDQ3NjUsInN1YiI6ODIsImlzcyI6Imh0dHA6XC9cL3Byb2plY3QtMi1sdHUtMDYuaGVyb2t1YXBwLmNvbVwvYXV0aCIsImlhdCI6MTQ5MTkxNjM2NSwibmJmIjoxNDkxOTE2MzY1LCJqdGkiOiJkOTMyMzc4NjVmODk0Y2QxZGU2ZjQ0YzBkZGZkMDY2NCJ9.-ytumzOq_oihKNmUNmMQdDLjO2WUKAONrUucXVE-bSQ'}
  //     };
  //
  //     axios.get('https://project-2-ltu-06.herokuapp.com/students', config)
  //         .then(response => {
  //             this.setState({
  //                 students: response.data.data
  //             });
  //         })
  //         .catch(error => {
  //             console.log('Error fetching and parsing data', error);
  //         });
  // }

  render() {

    var createStudentRow = function(student) {
      return (
        <tr key={student.id}>
          <td>{student.student_id}</td>
          <td>{student.name}</td>
          <td></td>
          <td>{student.grade}</td>
          <td>{student.major}</td>
          <td>{student.from_year}</td>
          <td>{student.to_year}</td>
        </tr>
      )
    }

    return(
      <div className="container-fluid">
        <div className="col-md-6 col-md-offset-3">
          <div className="panel">
            <div className="panel-body job_details_body">
              <div className="panel-heading internship_job_label">
                <div>
                  <h4><b>Internship Job</b></h4>
                  <span>
                        <p className="timestampt time">From: February 2 To: March 17</p>
                    </span>
                </div>
              </div>
              <ul className="list-unstyled todo-list">
                <li>
                  <label className="control-inline fancy-checkbox">
                    <input type="checkbox"/><span className="check"></span>
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
                    <input type="checkbox"/><span></span>
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
                    <input type="checkbox"/><span></span>
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
              <button type="button" className="btn btn-toolbar">Back</button>
              <button type="button" className="btn btn-success">Archive</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InternshipPlanDetailsPage;
