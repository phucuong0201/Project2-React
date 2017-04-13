  import React, {Component} from "react";
import axios from "axios";
import Link from 'react-router';
import "./ManagePointPage.css";
class ManagePointPage extends Component {

  constructor() {
    super();
    this.state = {
        company_rates: []
    };
  }

  componentDidMount() {
    var config = {
        headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTIwMDEzMjMsInN1YiI6ODIsImlzcyI6Imh0dHA6XC9cL3Byb2plY3QtMi1sdHUtMDYuaGVyb2t1YXBwLmNvbVwvYXV0aCIsImlhdCI6MTQ5MTk3MjkyMywibmJmIjoxNDkxOTcyOTIzLCJqdGkiOiJkYWZmNzNmMmFhZmQ1ODQ4YmJlMTcxNjNkMGE4NzIwZiJ9.bemX6z6YgFvTVL72yHCEAI-0A1YzulcYVU33W6EuzPc'}
    };

    axios.get('https://project-2-ltu-06.herokuapp.com/company_rates', config)
      .then(response => {
        this.setState({
            company_rates: response.data.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {

    var createPointRow = function(company_rates) {
      return (
        <tr key={company_rates.id}>
          <td>{company_rates.student_id}</td>
          <td>{company_rates.student_name}</td>
          <td>{company_rates.topic_title}</td>
          <td>{company_rates.employee_name}</td>
          <td>{company_rates.point}</td>
          <td>{company_rates.rate}</td>
          <td>
            <div>
              <span><Link to="edit_point.html">Edit <i class="lnr lnr-pencil"></i></Link></span>
            </div>
          </td>
        </tr>
      )
    }

    return(
      <div>
          <div className="panel panel-headline">
              <div className="panel-heading">
                  <h3 className="panel-title"><i className="lnr lnr-book"></i> Student Internship Point</h3>
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
                          <th>Student Id</th>
                          <th>Student Name</th>
                          <th>Topic name</th>
                          <th>Instructor Teacher</th>
                          <th>Internship Point</th>
                          <th>Rate</th>
                          <th>Action</th>
                          </thead>
                          <tbody>
                          {this.state.company_rates.map(createPointRow, this)}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default ManagePointPage;