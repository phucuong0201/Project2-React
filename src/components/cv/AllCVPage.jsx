import React, {Component} from "react";
import axios from "axios";
import { Link } from 'react-router';
class AllCVPage extends Component {

  constructor() {
    super();
    this.state = {
      students: []
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
          <div className="col-md-8 col-md-offset-2">
            <div className="panel">
              <div className="panel-heading clearfix">
                <h4 className="panel-title pull-left">List CV</h4>
                <div className="btn-group pull-right">
                  <a href="" className="add_new_cv_btn"><button className="btn btn-success"><i className="lnr lnr-plus-circle"> Add New CV</i></button></a>
                </div>
              </div>
              <div className="panel-body">
                <div className="cv_list col-md-12">
                  <div className="col-md-2">
                    <img className="cv_img" src="" alt=""/>
                  </div>
                  <div className="col-md-10">
                    <div className="panel panel-headline">
                      <div className="panel-heading">
                        <span><Link to=""><b>CV for VNIST</b></Link></span>
                        <span className="date_add_cv"><i className="lnr lnr-clock"></i> 11-02-2017 17:39 PM</span>
                      </div>
                      <div className="panel-body">
                        <span>
                          <button type="button" className="btn btn-default">
                              <span className="lnr lnr-eye"></span> View
                          </button>
                          <button type="button" className="btn btn-default">
                              <span className="lnr lnr-download"></span> Download
                          </button>
                          <button type="button" className="btn btn-default">
                              <span className="lnr lnr-pencil"></span> Edit
                          </button>
                          <button type="button" className="btn btn-default">
                              <span className="lnr lnr-trash"></span> Remove
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cv_list col-md-12">
                  <div className="col-md-2">
                    <img className="cv_img" src="assets/img/cv.png" alt=""/>
                  </div>
                  <div className="col-md-10">
                    <div className="panel panel-headline">
                      <div className="panel-heading">
                        <span><Link to=""><b>CV for VNIST</b></Link></span>
                        <span className="date_add_cv"><i className="lnr lnr-clock"></i> 11-02-2017 17:39 PM</span>
                      </div>
                      <div className="panel-body">
                        <span>
                            <button type="button" className="btn btn-default">
                                <span className="lnr lnr-eye"></span> View
                            </button>
                            <button type="button" className="btn btn-default">
                                <span className="lnr lnr-download"></span> Download
                            </button>
                            <button type="button" className="btn btn-default">
                                <span className="lnr lnr-pencil"></span> Edit
                            </button>
                            <button type="button" className="btn btn-default">
                                <span className="lnr lnr-trash"></span> Remove
                            </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllCVPage;
