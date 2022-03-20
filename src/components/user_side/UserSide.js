import Nav from "./Nav.js";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
import background from "../../images/banner_background.svg";
import "../../style/user_side/UserSide.css"

function UserSide(props) {
  return (
    <div className="user_side">
      <div className="user_side-top"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: "#79BD84",
        }}>
        <Nav />
        <Header />
      </div>
      <Body />
      <Footer />
    </div>
  );
}

export default UserSide;