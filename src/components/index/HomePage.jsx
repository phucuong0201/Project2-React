import React, {Component} from "react";
import axios from "axios";
import slide_pic_1 from '../../../public/dist/img/pic1.png';
import slide_pic_2 from '../../../public/dist/img/pic2.png';
import about_pic from '../../../public/dist/img/info.png';
import topic_pic from '../../../public/dist/img/topic.png';
import teacher_pic from '../../../public/dist/img/teacher.png';
import { Link } from 'react-router';
class HomePage extends Component {

    render() {

        return(
            <div>
                <div className="container img_slide">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                        </ol>

                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <img src={slide_pic_1} alt="Chania" width="460" height="345"/>
                            </div>

                            <div className="item">
                                <img src={slide_pic_2} alt="Chania" width="460" height="345"/>
                            </div>
                        </div>

                        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                            <span className="lnr lnr-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                            <span className="lnr lnr-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="main-content">
                    <div className="container-fluid">
                        <div className="col-md-4">
                            <div className="panel panel-headline col-md-12">
                                <div className="panel-heading">
                                    <a href=""><img src={about_pic} alt="" className="home_action_img"/></a>
                                    <span className="about_text"><b>About Internship Term</b></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="panel panel-headline col-md-12">
                                <div className="panel-heading">
                                    <a href="all_able_topic.html"><img src={topic_pic} alt="" className="home_action_img"/></a>
                                    <span><b> All Internship Topic</b></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="panel panel-headline col-md-12">
                                <div className="panel-heading">
                                    <a href="manage_teacher.html"><img src={teacher_pic} alt="" className="home_action_img"/></a>
                                    <span className="instructor_text"><b>All Instructor Teacher</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 footer">
                    <div className="padd">
                        <img className="img_footer" src="http://sie.vn/wp-content/themes/hueman/img/logonho.png" alt="logo sie"/>
                        <div className="sie_info">
                            <p className="add_label">Add: Room 201, D7 Building, HUST | No.1, Dai Co Viet Street, Hanoi, Vietnam.</p><p className="tel_label">Tel:(+84)04.3868.3407 &amp; 3868.2261 | Fax:(+84)04.3868.3409</p>
                            <p className="email_label">Email: info@sie.edu.vn | Website: http://sie.hust.edu.vn</p>
                        </div>
                        <div className="sie_copyright">
                            <p>Copyright© <b>School of International Education | HUST</b></p>
                            <p>Powered by: LTU-12A</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;