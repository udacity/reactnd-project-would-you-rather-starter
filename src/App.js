import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import NewPoll from "./pages/NewPoll";
import QuestionDetails from "./pages/QuestionDetails";
import SignIn from "./pages/SignIn";
import ErrorComponent from "./components/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/leaderboard" component={Leaderboard} />
        <ProtectedRoute exact path="/add" component={NewPoll} />
        <ProtectedRoute
          exact
          path="/questions/:question_id"
          component={QuestionDetails}
        />
        <Route component={ErrorComponent} />
      </Switch>
    </Router>
  );
}

export default App;
