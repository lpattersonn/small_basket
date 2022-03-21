import Nav from "./Nav.js";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
import topBackground from "../../images/banner_background.svg";
import bodyBackground1 from "../../images/background_blob_1.svg";
import bodyBackground2 from "../../images/background_blob_2.svg";
import "../../style/user_side/UserSide.css"

function UserSide(props) {
  return (
    <div className="user_side">
      <div className="user_side-top"
        style={{
          backgroundImage: `url(${topBackground})`,
          backgroundPosition: 'center',
          backgroundColor: "#79BD84",
        }}>
        <Nav />
        <Header />
      </div>
      <div style={{
        backgroundImage: `url(${bodyBackground1}), url(${bodyBackground2})`,
        backgroundPosition: "right top 10px, left bottom 542px",
        backgroundSize: "880px, 864px",
        backgroundRepeat: 'no-repeat, no-repeat'
      }} >
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default UserSide;