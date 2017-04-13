import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TopicPage from './components/topics/TopicPage';
import RegisteredTopicPage from './components/topics/RegisteredTopicPage';
import ManagePointPage from './components/point/ManagePointPage';
import ManageStudentPage from './components/manageusers/ManageStudentPage';
import ManageTeacherPage from './components/manageusers/ManageTeacherPage';
import ManageSystemUserPage from './components/manageusers/ManageSystemUserPage';
import EditCVPage from './components/cv/EditCVPage';
import AboutPage from './components/about/AboutPage';
import ProfilePage from './components/profile/ProfilePage';
import LoginPage from './components/profile/LoginPage';
import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/topics" components={TopicPage}/>
            <Route path="/registeredtopics" components={RegisteredTopicPage}/>
            <Route path="/internshippoint" components={ManagePointPage}/>
            <Route path="/managestudent" components={ManageStudentPage}/>
            <Route path="/manageteacher" components={ManageTeacherPage}/>
            <Route path="/managesystemuser" components={ManageSystemUserPage}/>
            <Route path="/editcv" components={EditCVPage}/>
            <Route path="/about" components={AboutPage}/>
            <Route path="/profile" components={ProfilePage}/>
            <Route path="/login" component={LoginPage}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
