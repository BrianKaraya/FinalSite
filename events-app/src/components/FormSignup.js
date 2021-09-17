import React from 'react';
import useForm from './useForm';
import validate from './ValidateInfo';
import './FormSignup.css';

export const FormSignup = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Join us! Create your account by filling out the information below.
        </h1>
        <div className="form-container">
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              {/* Username */}
            </label>
            <input
              id="username"
              type="text"
              className="form-input"
              name="username"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            {/* if errors */}
            {errors.username && <p>{errors.username}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              {/* Email */}
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />

            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              {/* Password */}
            </label>
            <input
              id="password"
              type="password"
              className="form-input"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />

            {errors.password && <p>{errors.password}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password2" className="form-label">
              {/* Confirm password */}
            </label>
            <input
              id="password2"
              type="password"
              className="form-input"
              name="password2"
              placeholder="Confirm password"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Sign up
          </button>
          <p className="form-input-login">
            Already have an account? Login{' '}
            <a href="/Login" className="form-link">
              here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
