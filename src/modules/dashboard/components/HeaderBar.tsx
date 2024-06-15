import { ReactSVG } from "react-svg";
import LendSqrLogo from "../../../components/LendSqrLogo";
import UserProfile from "../../../components/UserProfile";
import "../styles/header.scss";

const HeaderBar: React.FC = () => {
  return (
    <>
      <div className="header-container">
        <LendSqrLogo width={150} />
        <div className="input-group">
          <input
            id="search"
            type="text"
            name="search"
            placeholder="search for anything"
          />
          <button className="search-button">
            <i className="fi fi-rs-search"></i>
          </button>
        </div>
        <div className="header-menus">
          <a className="docs" href="#">
            Docs
          </a>
          <ReactSVG src={"bell.svg"} />
          <UserProfile name={"tobi bamisebi"} image="" />
        </div>
      </div>
    </>
  );
};

export default HeaderBar;
