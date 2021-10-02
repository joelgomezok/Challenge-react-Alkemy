import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./helpers/ProtectedRoute";
import "./styles.scss";
import Results from "./pages/Results";
import Login from "./pages/Login";
import Home from "./pages/Home";
import HeroDetails from "./pages/HeroDetails";
import Footer from "./components/Footer/footer"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/search" component={Results} />
        <ProtectedRoute path="/hero/:id" component={HeroDetails} />
        <ProtectedRoute exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
