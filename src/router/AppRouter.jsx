import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
