import React, { useRef, useState } from "react";

const LoginForm: React.FC = () => {
  const [showPass, setShowPass] = useState(false);
  const [activeInput, setActiveInput] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const onInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setActiveInput(e.target.name);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-title">
          <h3>Welcome!</h3>
          <p>Enter details to login.</p>
        </div>
        <div className="form-control">
          <div className="form-group">
            <div>
              <span
                className={`label-span ${
                  emailRef.current?.value || "email" === activeInput
                    ? "input-active"
                    : ""
                }`}
              >
                Email
              </span>
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                onFocus={onInputFocus}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <span
                className={`label-span ${
                  passwordRef.current?.value || "password" === activeInput
                    ? "input-active"
                    : ""
                }`}
              >
                Password
              </span>
              <input
                ref={passwordRef}
                type={!showPass ? "password" : "text"}
                id="password"
                name="password"
                onFocus={onInputFocus}
              />
              <span
                className="toggle-pass"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPass(!showPass);
                }}
              >
                {!showPass ? "show" : "hide"}
              </span>
            </div>
          </div>
          <a className="form-link" href="#">
            forgot password?
          </a>
          <button id="submit" type="submit">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
