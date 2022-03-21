import "./App.css";
import "@fontsource/rubik";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import UserSide from "./components/user_side/UserSide.js"
import GrocerSide from "./components/grocer_side/GrocerSide.js";

function App() {
  return (
    // Routes
    <Router>
      <Routes>
        <Route path="/" element={<UserSide />} />
        <Route path="/grocerside" element={<GrocerSide />} />
      </Routes>
    </Router>
  );
}

export default App;
