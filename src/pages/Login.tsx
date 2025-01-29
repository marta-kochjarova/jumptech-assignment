import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <>
      <div className="d-flex h-100 flex-column justify-center align-center">
        <h1 className="text-primary fw-lighter mb-2">Vacation manager</h1>
        <div className="login-box p-2">
        <form action="">
              <div className="form-group">
                <label htmlFor="username" className="d-block">Username</label>
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="d-block">Password</label>
                <input type="password" name="password" placeholder="Password" />
              </div>
              {/* Normally, here would be a proper submit button, but for the purpose of 
                  this project I only redirect to the vacations page */}
              <Link className="bg-primary text-white d-block text-center py-05" to="/vacations">Log In</Link>
            </form>
        </div>
      </div>
    </>
  );
};

export default Login;
