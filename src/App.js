import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import NewPoll from "./pages/NewPoll";
import QuestionDetails from "./pages/QuestionDetails";
import SignIn from "./pages/SignIn";

import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />

        <ProtectedRoute path="/leaderboard" component={Leaderboard} />
        <ProtectedRoute path="/add" component={NewPoll} />
        <Route path="/questions/bad_id" component={NotFound} />
        <ProtectedRoute
          path="/questions/:question_id"
          component={QuestionDetails}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
