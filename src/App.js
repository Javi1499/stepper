import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import StepperPage from './pages/Stepper';

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/"  >
            <Link to="/step/1">Go to Stepper</Link>
          </Route>
          <Route exact path="/step/:idStep" component={StepperPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
