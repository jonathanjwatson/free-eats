import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllRestaurants from "./containers/AllRestaurants/AllRestaurants";
import EditRestaurant from "./containers/EditRestaurant/EditRestaurant";
import Home from "./containers/Home/Home";
import NewRestaurant from "./containers/NewRestaurant/NewRestaurant";
import SingleRestaurant from "./containers/SingleRestaurant/SingleRestaurant";
import NavBar from "./components/NavBar/NavBar";
import Admin from "./containers/Admin/Admin";
import Login from "./containers/Login/Login";

function App() {
  const [user, setUser] = useState({
    _id: "",
  });

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants" component={AllRestaurants} />
          <Route exact path="/restaurants/:id" component={SingleRestaurant} />
          <Route
            exact
            path="/login"
            component={(props) => <Login {...props} setUser={setUser} />}
          />
          <Route exact path="/admin" component={Admin} />
          <Route
            exact
            path="/admin/restaurants/new"
            component={NewRestaurant}
          />

          <Route
            exact
            path="/admin/restaurants/:id/edit"
            component={EditRestaurant}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
