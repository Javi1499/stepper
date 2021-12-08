import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import StepperPage from './pages/Stepper';

function App() {
  return (
    <div className="App">
      <h1>Hola</h1>
      <Router >
      <Redirect exact from="/" to="/1" />
        <Switch>
          <Route exact path="/:idStep" component={StepperPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
