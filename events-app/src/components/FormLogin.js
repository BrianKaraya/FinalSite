import React from 'react';
import useForm from './useForm';
import validate from './ValidateInfo';
import './FormLogin.css';

export const FormLogin = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  return (
    <div className="login-container">
      <form
        action=""
        className="login-form"
        /* id="username"
        method="GET"
        name="username" */
        onSubmit={handleSubmit}
      >
        <h1>Login</h1>
        <div className="login-form-inputs">
          <div className="form-input-group">
            <input
              type="text"
              className="form-input"
              id="username"
              name="username"
              value={values.username}
              onChange={handleChange}
              autofocus
              placeholder="Username or email"
            />
            {errors.username && <p>{errors.username}</p>}
          </div>

          <div className="form-input-group">
            <input
              type="password"
              className="form-input"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              autofocus
              placeholder="Password"
            />
            {/* <div className="form-error-msg" id="pword-error">
            enter password
          </div> */}
            {errors.password && <p>{errors.password}</p>}
          </div>

          {/* <div className="form-input-group1">
          <input type="checkbox" name="checkbox" className="check-box" />
          <label for="checkbox" className="login-label">
            Remember password
          </label>
        </div> */}
          <div className="form-input-group">
            <button className="form-btn" id="signIn-btn" type="submit">
              Login
            </button>
          </div>

          <p className="form-text">
            <a href="/" className="form-link">
              Forgot password?
            </a>
          </p>

          <p className="form-text">
            Don't have an account?
            <a
              href="/Signup"
              className="form-link"
              /* id="link-create-account"
            onclick="signUp()" */
            >
              Create one
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
