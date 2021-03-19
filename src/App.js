import "./App.css";
import Navbar from "./Navbar";
import Contacts from "./Contacts";
import Store from "././Redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CreateContact from "./CreateContact";
import EditContact from "./EditContact";
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div class="container mt-4">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/edit/contact/:id" component={EditContact}></Route>
              <Route
                exact
                path="/create/contact"
                component={CreateContact}
              ></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
