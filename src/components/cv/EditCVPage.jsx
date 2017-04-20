import React, {Component} from 'react';
import axios from 'axios';
import './EditCVPage.css';
import ava_cv from '../../../public/dist/img/avatar.png';
class EditCVPage extends Component {

    constructor() {
        super();
        this.state = {
            cvs: [
              {
                "id": 1,
                "student_id": 92,
                "name": "Mai_CV",
                "avatar": "",
                "position": "intern ruby",
                "dateofbirth": "1993-09-09",
                "gender": 0,
                "phone": 1692630370,
                "email": "ltmai93@gmail.com",
                "address": "Thanh Hóa",
                "link": "",
                "intent": "",
                "skill": "",
                "hobby": "",
                "year_start": "0000-00-00",
                "year_stop": "0000-00-00",
                "grade": 4,
                "school": "Đại học bách khoa hà nội",
                "major": "Công nghệ thông tin",
                "cpa": 3.0499999999999998,
                "majorskill": "java",
                "otherskill": "c",
                "created_at": "2017-03-22 00:00:00",
                "updated_at": "2017-03-22 00:00:00"
              }
            ]
        };
    }

    // componentDidMount() {
    //     var config = {
    //         headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTIxMjA0NzcsInN1YiI6ODIsImlzcyI6Imh0dHA6XC9cL3Byb2plY3QtMi1sdHUtMDYuaGVyb2t1YXBwLmNvbVwvYXV0aCIsImlhdCI6MTQ5MjA5MjA3NywibmJmIjoxNDkyMDkyMDc3LCJqdGkiOiI4NjkyYmNiYTM1MTc0ZjJhMjBkYTMzM2I4YzJmNjk4MiJ9.A9ttBBYoSdumfWAimrYrl0RfZOt6jzZPuCXCHekh4Jw'}
    //     };
    //
    //     axios.get('https://project-2-ltu-06.herokuapp.com/cvs', config)
    //         .then(response => {
    //             this.setState({
    //                 cvs: response.data.data
    //             });
    //         })
    //         .catch(error => {
    //             console.log('Error fetching and parsing data', error);
    //         });
    // }

    render() {

        var createCVViewPage = function (cv) {
          return(
            <div className="col-md-8 col-md-offset-2">
                <div className="panel">
                    <br/>
                    <div className="row">
                        <div className="col-md-7 cv_ava_label">
                            <img src={ava_cv} className="img-circle cv_ava_img" alt=""/>
                            <p className="cv_person_name"><b>{cv.name}</b></p>
                            <p className="cv_position">
                                <span><b>Position:</b></span>
                                <span>{cv.position}</span>
                            </p>
                        </div>
                        <div className="col-md-5">
                            <p className="cv_education"><b>EDUCATION</b></p>
                            <ul className="list-unstyled">
                                <li>
                                    <span>From:</span>
                                    <span>{cv.year_start}</span>
                                    <span>To:</span>
                                    <span>{cv.year_stop}</span>
                                </li>
                                <br/>
                                <li>
                                    <span>Grade:</span>
                                    <span>{cv.grade}</span>
                                </li>
                                <br/>
                                <li>
                                    <span>School:</span>
                                    <span>{cv.school}</span>
                                </li>
                                <br/>
                                <li>
                                    <span>Major:</span>
                                    <span>{cv.major}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6 cv_contact_label">
                            <p className="cv_contact"><b>CONTACT</b></p>
                            <ul className="list-unstyled">
                                <li>
                                    <span><i className="lnr lnr-calendar-full"> {cv.dateofbirth}</i></span>
                                </li>
                                <li>
                                    <span><i className="lnr lnr-user">{cv.gender === 0 ?  'Male' : 'Female' }</i></span>
                                </li>
                                <li>
                                    <span><i className="lnr lnr-phone-handset"> {cv.phone}</i></span>
                                </li>
                                <li>
                                    <span><i className="lnr lnr-envelope"> {cv.email}</i></span>
                                </li>
                                <li>
                                    <span><i className="lnr lnr-map-marker"> {cv.address}</i></span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5 cv_more_info_label">
                            <p className="cv_more_info"><b>MORE INFORMATION</b></p>
                            <span>
                                        <p>
                                            Kỹ năng chuyên môn: <br/>
                                            - Có hiểu biết về HTML, Java, C. <br/>
                                            - Thao tác tốt trên cơ sở dữ liệu MySQL. <br/>
                                            - Có khả năng làm việc trên môi trường Linux, Ubuntu. <br/>
                                            - Có kinh nghiệm sử dụng công cụ quản lý mã nguồn
                                            Git <br/>
                                            Kỹ năng khác: <br/>
                                            - Tư duy logic tốt , khả năng tiếp thu nhanh. <br/>
                                            - Nhiệt tình, vui vẻ, thích tìm tòi, học hỏi cái mới <br/>
                                        </p>
                                    </span>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6 cv_skill_label">
                            <p className="cv_skill"><b>SKILL</b></p>
                            <ul className="list-unstyled">
                                <li>
                                        <span>
                                          {cv.majorskill}
                                        </span>
                                    <span>
                                                <div className="progress cv_skill_list">
                                                    <div className="progress-bar" role="progressbar">7</div>
                                                </div>
                                        </span>
                                </li>
                                <li>
                                        <span>
                                            {cv.otherskill}
                                        </span>
                                    <span>
                                                <div className="progress cv_skill_list">
                                                    <div className="progress-bar" role="progressbar">5</div>
                                                </div>
                                        </span>
                                </li>
                                <li>
                                        <span>
                                            <p>{cv.otherskill}</p>
                                        </span>
                                    <span>
                                                <div className="progress cv_skill_list">
                                                    <div className="progress-bar" role="progressbar">9</div>
                                                </div>
                                        </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5 cv_destination_label">
                            <p className="cv_destination"><b>DESTINATION</b></p>
                            <span>
                                        <p>
                                            • Trở thành một nhân viên tốt <br/>
                                            • Cố gắng học tập càng nhiều càng tốt và làm việc hết
                                            sức mình để hoàn thành nhiệm vụ được giao <br/>
                                            • Tạo cơ hội tốt để thăng tiến trong công việc <br/>
                                            • Phát triển các kỹ năng của mình với sự phát triển của công ty, tôi muốn chứng minh bản thân mình. <br/>
                                        </p>
                                    </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-md-offset-10">
                        <button type="button" className="btn btn-success">Save</button>
                    </div>
                </div>
            </div>
          );
        }

        return (
            <div className="container-fluid">
              {this.state.cvs.map(createCVViewPage, this  )}
            </div>
        );
    }
}

export default EditCVPage;