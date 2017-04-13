import React, {Component} from 'react';
import axios from 'axios';
class TopicPage extends Component {

  constructor() {
    super();
    this.state = {
      topics: []
    };
  }

  componentDidMount() {
    var config = {
      headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTIwMzk1NTQsInN1YiI6ODIsImlzcyI6Imh0dHA6XC9cL3Byb2plY3QtMi1sdHUtMDYuaGVyb2t1YXBwLmNvbVwvYXV0aCIsImlhdCI6MTQ5MjAxMTE1NCwibmJmIjoxNDkyMDExMTU0LCJqdGkiOiJlZGZhNTM0MjIyZGYzZWVkMGI3MDViYWRkZTVkOGU2NSJ9.k9JAiYOHdtMzs9HyXj5lV_aBKBEs9t9cl3a66WBXasY'}
    };

    axios.get('https://project-2-ltu-06.herokuapp.com/topics', config)
      .then(response => {
        this.setState({
          topics: response.data.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {

    var createTopicPanel = function(topic) {
      return (
        <div className="col-md-12" key={topic.id}>
          <div className="panel panel-headline">
            <div className="panel-heading">
              <ul className="list-unstyled task-list">
                <li>
                  <div className="row">
                    <div className="col-md-8">
                      <span><h4 className="topic_name">{topic.title}</h4></span>
                    </div>
                    <div className="col-sm-1 col-md-offset-3"><span><i className="lnr lnr-checkmark-circle"></i></span></div>
                  </div>
                </li>
                <div className="row">
                  {/*<span>*/}
                      {/*<div className="col-md-2"><span><b>Company</b></span></div>*/}
                      {/*<div className="col-md-4"><span>{topic.}</span></div>*/}
                  {/*</span>*/}
                  <span>
                      <div className="col-md-2"><span><b>Number of Student</b></span></div>
                      <div className="col-md-4"><span>{topic.no_interns}</span></div>
                  </span>
                </div>
                <hr/>
                <div className="row">
                  <span>
                      <div className="col-md-2"><span><b>Start Date</b></span></div>
                      <div className="col-md-4"><span>{topic.start}</span></div>
                  </span>
                  <span>
                      <div className="col-md-2"><span><b>End Date</b></span></div>
                      <div className="col-md-4"><span>{topic.stop}</span></div>
                  </span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        {this.state.topics.map(createTopicPanel, this)}
      </div>
    );
  }
}

export default TopicPage;