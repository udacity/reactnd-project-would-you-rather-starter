import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import NewPoll from "./pages/NewPoll";
import QuestionDetails from "./pages/QuestionDetails";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/new-poll" component={NewPoll} />
        <Route
          exact
          path="/questions/:question_id"
          component={QuestionDetails}
        />
      </Switch>
    </Router>
  );
}

export default App;
