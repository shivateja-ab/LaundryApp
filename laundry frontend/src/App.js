import Orders from './Orders';
import { Switch,Route,BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/orders' component={Orders} />
      </Switch>
    </Router>

  );
}

export default App;
