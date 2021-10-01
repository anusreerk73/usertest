import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import UserList from './components/user-list'
import Home from './container/home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/"  ></Route>
        <Route exact component={UserList} path="/userlist"></Route>
      </Switch>
    </Router>
  );
}

export default App;
