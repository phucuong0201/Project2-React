import React, {Component} from "react";
import axios from "axios";
import { Link } from 'react-router';
class RegisteredStudentPage extends Component {

    render() {

        return(
            <div className="main-content">
                <div className="container-fluid">
                    <div className="panel panel-headline">
                        <div className="panel-heading">
                            <h3 className="panel-title"><i className="lnr lnr-users"></i> Internship Student Match</h3>
                            <p className="panel-subtitle">Last Update: March 6, 2017</p>
                            <div className="panel-body">
                                <div className="row">
                                    <table id="table_topic">
                                        <tr>
                                            <th className="col-md-2">Topic Name<span className="sort_table"><i className="lnr lnr-chevron-down-circle"></i></span></th>
                                            <th className="col-md-2">Company<span className="sort_table"><i className="lnr lnr-chevron-down-circle"></i></span> </th>
                                            <th className="col-md-2">Instructor Teacher<span className="sort_table"><i className="lnr lnr-chevron-down-circle"></i></span></th>
                                            <th className="col-md-1">Skill<span className="sort_table"><i className="lnr lnr-chevron-down-circle"></i></span></th>
                                            <th className="col-md-2">Registered Student<span className="sort_table"><i className="lnr lnr-chevron-down-circle"></i></span></th>
                                            <th className="col-md-1">Matched<span className="sort_table"><i className="lnr lnr-chevron-down-circle"></i></span></th>
                                            <th className="col-md-1">Choose Student<span className="sort_table"><i className="lnr lnr-chevron-down-circle"></i></span></th>
                                            <th className="col-md-1">Action</th>
                                        </tr>
                                        <tr>
                                            <td>Detect attack from a website</td>
                                            <td>VNIST</td>
                                            <td>Vu Thi Huong Giang</td>
                                            <td>
                                                <div>Java</div>
                                                <div>Python</div>
                                                <div>Object-C</div>
                                            </td>
                                            <td>
                                                <div>Le Thi Mai</div>
                                                <hr/>
                                                <div>Nguyen Van Quy</div>
                                                <hr/>
                                                <div>Tran Huu Nam Phuong</div>
                                                <hr/>
                                                <div>Nguyen Phu Cuong</div>
                                                <hr/>
                                                <div>Hoang Ngoc Luc</div>
                                            </td>
                                            <td>
                                                <div>70%</div>
                                                <hr/>
                                                <div>60%</div>
                                                <hr/>
                                                <div>50%</div>
                                                <hr/>
                                                <div>20%</div>
                                                <hr/>
                                                <div>10%</div>
                                            </td>
                                            <td>
                                                <div><i className="lnr lnr-checkmark-circle"></i></div>
                                                <hr/>
                                                <div><br/></div>
                                                <hr/>
                                                <div><i className="lnr lnr-checkmark-circle"></i></div>
                                                <hr/>
                                                <div><br/></div>
                                                <hr/>
                                                <div><i className="lnr lnr-checkmark-circle"></i></div>
                                                <hr/>
                                            </td>
                                            <td>
                                                <div>
                                                    <button type="btn" className="btn btn-success">Submit</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisteredStudentPage;