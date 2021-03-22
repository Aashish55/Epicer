import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/Home/Home';
import AddRecipe from './Components/AddRecipe/AddRecipe';
import { Provider } from "react-redux";
import store from "./Redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" exact component={AddRecipe} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
