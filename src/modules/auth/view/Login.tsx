import LendSqrLogo from "../../../components/LendSqrLogo";
import LoginForm from "../components/LoginForm";
import "../styles/login.scss";

function LoginView() {
  return (
    <div className="grid-container">
      <div className="mockup">
        <div className="logo-div">
          <LendSqrLogo width={150} />
        </div>
        <div className="mockup-img">
          <img src="/pablo-sign-in 1.svg" alt="Mock-image" />
        </div>
      </div>
      <LoginForm />
    </div>
  );
}

export default LoginView;
