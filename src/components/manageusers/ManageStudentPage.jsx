import React, {Component} from "react";
import axios from "axios";
import "./ManageStudentPage.css";
class ManageStudentPage extends Component {

    constructor() {
        super();
        this.state = {
            students: []
        };
    }

    componentDidMount() {
        var config = {
            headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTE5NDQ3NjUsInN1YiI6ODIsImlzcyI6Imh0dHA6XC9cL3Byb2plY3QtMi1sdHUtMDYuaGVyb2t1YXBwLmNvbVwvYXV0aCIsImlhdCI6MTQ5MTkxNjM2NSwibmJmIjoxNDkxOTE2MzY1LCJqdGkiOiJkOTMyMzc4NjVmODk0Y2QxZGU2ZjQ0YzBkZGZkMDY2NCJ9.-ytumzOq_oihKNmUNmMQdDLjO2WUKAONrUucXVE-bSQ'}
        };

        axios.get('https://project-2-ltu-06.herokuapp.com/students', config)
            .then(response => {
                this.setState({
                    students: response.data.data
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

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
            <div>
                <div className="panel panel-headline">
                    <div className="panel-heading">
                        <h3 className="panel-title"><i className="lnr lnr-book"></i> Manage Student</h3>
                        <p className="panel-subtitle">Last Update: March 17, 2017</p>
                    </div>
                    <div className="col-md-6">
                        <div className="col-md-6 search_label">
                  <span>
                    <input type="text" value="" className="form-control" placeholder="Search Student..."/>
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
                                <th>Student ID</th>
                                <th>Student Name</th>
                                <th>Class</th>
                                <th>Grade</th>
                                <th>Major</th>
                                <th>From</th>
                                <th>To</th>
                                </thead>
                                <tbody>
                                {this.state.students.map(createStudentRow, this)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManageStudentPage;