import { ReactSVG } from "react-svg";
import LendSqrLogo from "../../../components/LendSqrLogo";
import UserProfile from "../../../components/UserProfile";
import "../styles/header.scss";

export interface IHeaderBar {
  setSlideSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}
const HeaderBar: React.FC<IHeaderBar> = ({ setSlideSideBar }) => {
  const handleMenuClick = () => {
    setSlideSideBar((prev) => !prev);
  };
  return (
    <>
      <div className="header-container">
        <div className="logo">
          <LendSqrLogo width={"100%"} />
        </div>
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
          <button
            style={{
              background: "none",
              padding: "2px",
              border: "none",
              outline: "none",
            }}
            onClick={handleMenuClick}
          >
            <div
              style={{
                height: "2px",
                width: "16px",
                backgroundColor: "#213F7D",
                marginBottom: "2px",
              }}
            ></div>
            <div
              style={{
                height: "2px",
                width: "16px",
                backgroundColor: "#213F7D",
                marginBottom: "2px",
              }}
            ></div>
            <div
              style={{
                height: "2px",
                width: "16px",
                backgroundColor: "#213F7D",
                marginBottom: "2px",
              }}
            ></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderBar;
