import Nav from "./Nav.js";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";

function UserSide(props) {
  return (
    <div className="user_side">
      <Nav />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default UserSide;