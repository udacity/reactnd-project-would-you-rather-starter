import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
