import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import UserList from './components/user-list'
import Home from './container/home'
import UserForm from "./components/user-form";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/"  ></Route>
        <Route exact component={UserList} path="/userlist"></Route>
        <Route  exact component={UserForm} path="/addform"  UserForm></Route>
      </Switch>
    </Router>
  );
}

export default App;
