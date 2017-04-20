import React, {Component} from "react";
import axios from "axios";
import { Link } from 'react-router';
import "./InternshipPlanPage.css";
class InternshipPlanPage extends Component {

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
            <div className="main-content">
                <div className="container-fluid">
                    <div className="col-md-12">
                        <div className="panel">
                            <div className="panel-body job_details_body">
                                <div className="panel-heading internship_job_label">
                                    <div>
                                        <h4><b>What you have to do in this this topic</b></h4>
                                        <span>
                                            <p className="timestampt time">From: February 2 To: March 17</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="panel-body list_job">
                                    <Link to="/internshipplandetails" className = "internship_job">
                                    <div className="col-md-3 week_job">
                                        <h4>Week 1 Job</h4>
                                        <p><b>Setup Cloud Server</b></p>
                                    </div>
                                    </Link>
                                    <Link to="#" className = "internship_job">
                                    <div className="col-md-3 week_job">
                                        <h4>Week 2 Job</h4>
                                        <p><b>Learn Ruby on Rails</b></p>
                                    </div>
                                    </Link>
                                    <Link to="" className = "internship_job">
                                    <div className="col-md-3 week_job">
                                        <h4>Week 3 Job</h4>
                                        <p><b>Research about web attack</b></p>
                                    </div>
                                    </Link>
                                    <Link to="" className = "internship_job">
                                    <div className="col-md-3 week_job">
                                        <h4>Week 4 Job</h4>
                                        <p><b>Deep Learning about SQL Injection</b></p>
                                    </div>
                                    </Link>
                                    <Link to="" className = "internship_job">
                                    <div className="col-md-3 week_job">
                                        <h4>Week 5 Job</h4>
                                        <p><b>Semi-Term Report</b></p>
                                    </div>
                                    </Link>
                                    <Link to="" className = "internship_job">
                                    <div className="col-md-3 week_job">
                                        <h4>Week 6 Job</h4>
                                        <p><b>Learning about Naive-Bayes Algorithm</b></p>
                                    </div>
                                    </Link>
                                    <Link to="" className = "internship_job">
                                    <div className="col-md-3 week_job">
                                        <h4>Week 7 Job</h4>
                                        <p><b>Learning about Mattrix Algorithm</b></p>
                                    </div>
                                    </Link>
                                    <Link to="" className = "internship_job">
                                    <div className="col-md-3 week_job">
                                        <h4>Week 8 Job</h4>
                                        <p><b>Writting app to detect web attack</b></p>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InternshipPlanPage;
