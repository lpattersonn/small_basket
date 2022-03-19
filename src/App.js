import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import UserSide from "./components/user_side/UserSide.js"
import GrocerySide from "./components/grocery_side/GrocerySide.js";

function App() {
  return (
    // Routes
    <Router>
      <Routes>
        <Route path="/" element={<UserSide />} />
        <Route path="/groceryside" element={<GrocerySide />} />
      </Routes>
    </Router>
  );
}

export default App;
