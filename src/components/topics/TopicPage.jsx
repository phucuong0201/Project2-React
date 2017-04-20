import React, {Component} from 'react';
import axios from 'axios';
class TopicPage extends Component {

    constructor() {
        super();
        this.state = {
            topics: [
              {
                "name": "Trần Lê Hải",
                "topic_id": 1,
                "title": "Phát hiện tấn công website",
                "categories": "Security",
                "description": "Tìm hiểu về các hình thức tấn công website, các lỗ hổng website. Xây dựng chương trình phát hiện tấn công website bằng thuật toán Naive Bayes",
                "no_interns": "3",
                "content": "",
                "timelimit": "3months",
                "status": "0",
                "start": "2017-01-03",
                "stop": "2017-04-03",
                "link_topic": "",
                "company_name": "VIETTEL"
              }
            ]
        };
    }

    // componentDidMount() {
    //     var config = {
    //         headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTIwMzk1NTQsInN1YiI6ODIsImlzcyI6Imh0dHA6XC9cL3Byb2plY3QtMi1sdHUtMDYuaGVyb2t1YXBwLmNvbVwvYXV0aCIsImlhdCI6MTQ5MjAxMTE1NCwibmJmIjoxNDkyMDExMTU0LCJqdGkiOiJlZGZhNTM0MjIyZGYzZWVkMGI3MDViYWRkZTVkOGU2NSJ9.k9JAiYOHdtMzs9HyXj5lV_aBKBEs9t9cl3a66WBXasY'}
    // };
    //
    //     axios.get('https://project-2-ltu-06.herokuapp.com/topics', config)
    //         .then(response => {
    //             this.setState({
    //                 topics: response.data.data
    //             });
    //         })
    //         .catch(error => {
    //             console.log('Error fetching and parsing data', error);
    //         });
    // }

    render() {

        var createTopicRow = function (topic) {
            return (
                <tr key={topic.id}>
                    <td>{topic.categories}</td>
                    <td>{topic.title}</td>
                    <td>{topic.name}</td>
                    <td>{topic.no_interns}</td>
                    <td>{topic.timelimit}</td>
                </tr>
            )
        }

        return (
            <div>
                <div className="panel panel-headline">
                    <div className="panel-heading">
                        <h3 className="panel-title"><i className="lnr lnr-book"></i> All Internship Topics</h3>
                        <p className="panel-subtitle">Last Update: March 6, 2017</p>
                        <div className="col-md-4">
                            <div className="row category_row">
                                <div className="col-md-3 category">
                                    <span>Category</span>
                                </div>
                                <div className="col-md-6">
                              <span>
                                <select className="form-control role">
                                  <option>Programmer</option>
                                  <option>Data Science</option>
                                  <option>Database Administrator</option>
                                </select>
                              </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row sort_by_row">
                                <div className="col-md-3 sort_by">
                                    <span>Sort By</span>
                                </div>
                                <div className="col-md-6">
                              <span>
                                <select className="form-control role">
                                  <option>Category</option>
                                  <option>Topic</option>
                                  <option>Company</option>
                                  <option>Date Added</option>
                                </select>
                              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <table className="table" id="table_topic">
                                <thead>
                                <th>Category</th>
                                <th>Topic</th>
                                <th>Instructor</th>
                                <th>Number Of Student</th>
                                <th>Internship Time</th>
                                </thead>
                                <tbody>
                                {this.state.topics.map(createTopicRow, this)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopicPage;