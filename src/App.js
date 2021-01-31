import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/Home/Home';
import AddRecipe from './Components/AddRecipe/AddRecipe';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" exact component={AddRecipe} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
