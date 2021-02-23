import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllRestaurants from "./containers/AllRestaurants/AllRestaurants";
import EditRestaurant from "./containers/EditRestaurant/EditRestaurant";
import Home from "./containers/Home/Home";
import NewRestaurant from "./containers/NewRestaurant/NewRestaurant";
import SingleRestaurant from "./containers/SingleRestaurant/SingleRestaurant";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants" component={AllRestaurants} />
          <Route exact path="/restaurants/new" component={NewRestaurant} />
          <Route exact path="/restaurants/:id" component={SingleRestaurant} />
          <Route exact path="/restaurants/:id/edit" component={EditRestaurant} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
