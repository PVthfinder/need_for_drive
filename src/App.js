import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {ContextProvider} from './context';

import Home from "./components/pages/Home";
import Order from "./components/pages/Order";

function App() {
  return (
    <div className="app">
      <Router basename='need_for_drive'>
        <ContextProvider>
          <Switch>              
            <Route exact path="/" component={Home}/>
            <Route path="/order/location" component={Order}/>
            <Route path="/order/models" component={Order}/>
            <Route path="/order/options" component={Order}/>
          </Switch>
        </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
