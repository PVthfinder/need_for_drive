import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./components/pages/Home";
import Order from "./components/pages/Order";

function App() {
  return (
    <div className="app">
      <Router basename='need_for_drive'>
        <Switch>              
          <Route exact path="/" component={Home}/>
          <Route path="/order" component={Order}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
