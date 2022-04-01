import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import ReactLearning from './react/index'
import React from 'react'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch path="/react">
          <Route path="/react" component={ReactLearning}></Route>
          {/* <Route path="/vue" component={VueLearning}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
