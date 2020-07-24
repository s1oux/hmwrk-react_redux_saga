import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store';

import PrivateRoute from '../../components/PrivateRoute/privateRoute';

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Login from '../../components/Login/login';
import NotFound from '../../components/NotFound/notFound';
import EditMessageView from '../../components/EditMessageView/editMessageView';
import UserFormView from '../../components/UserFormView/userFormView';
import AdminPage from '../AdminPage/adminPage';
import Chat from '../Chat/chat';

import './app.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="page">
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/chat" component={Chat} />
          <PrivateRoute exact path="/edit" component={EditMessageView} />
          <PrivateRoute exact path="/admin/userform" component={UserFormView} />
          <PrivateRoute exact path="/admin" component={AdminPage} />
          <Route path="*" exact component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
