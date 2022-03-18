import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import UserSide from "./components/UserSide.js"
import GrocerySide from "./components/grocer-side/GrocerySide.js";

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
