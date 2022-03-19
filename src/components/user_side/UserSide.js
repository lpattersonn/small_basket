import Nav from "./Nav.js";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
import background from "../../images/banner background.svg";
import "../../style/user_side/UserSide.css"

function UserSide(props) {
  return (
    <div className="user_side">
      <div className="user_side-top" style={{ backgroundImage: `url(${background})` }}>
        <Nav />
        <Header />
      </div>
      <Body />
      <Footer />
    </div>
  );
}

export default UserSide;