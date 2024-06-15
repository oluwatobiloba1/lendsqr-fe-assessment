
const LoginForm:React.FC =()=> {
  return (
    <div className='form-container'>
      <form className="form">
      <div className="form-title">
        <h3>Welcome!</h3>
        <p>Enter details to login.</p>
      </div>
        <div className="form-control">
        <div className="form-group">
          <label>
          <input type="email" id="email" name="email" placeholder="Email" />
          </label>
        </div>
        <div className="form-group">
          <label>
          <input type="password" id="password" name="password" placeholder="Password" />
          </label>
        </div>
        <a className="form-link" href="#">forgot password?</a>
        <button type="submit">Log in</button>

        </div>
      </form>
    </div>
  )
}

export default LoginForm