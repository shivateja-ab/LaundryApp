//import logo from './logo.svg';
//import './App.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import HomePage from "../HomePage";
import RegisterPage from "../RegisterPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/register" component={RegisterPage}/>
      </Switch>
    </Router>
  );
}

export default App;
