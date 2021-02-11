import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Orders from './orders';
import OrdersDetails from './OrdersDetails';

function App() {
  return (
    <div>
      <React.Fragment>

        <Router className="main-body">
          <Switch>
            <Route
              path="/Orders"
              component={Orders}
            />
            <Route
              path="/ordersdetails"
              component={OrdersDetails}
            />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
