import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionSignIn } from "./../Redux/Action/authentication";
import axios from "./../Axios/index";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inforLogin, setInforLogin] = useState({
    email: "",
    password: "",
  });
  const onChangeUserName = (e) => {
    setInforLogin({
      ...inforLogin,
      email: e.target.value,
    });
  };
  const onChangePassword = (e) => {
    setInforLogin({
      ...inforLogin,
      password: e.target.value,
    });
  };
  const loginClick = () => {
    dispatch(actionSignIn(inforLogin.email, inforLogin.password));
    if (sessionStorage.userName) history.push("/HomePage");
  };

  const token = useSelector((state) => state.Authen.token);
  return (
    <div className="container text-center login">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-6">
          <h1>Sign in</h1>
          <a href="a" class="mb-3">
            Need an account?
          </a>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              value={inforLogin.email}
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChangeUserName}
            />
            <br />
            <input
              className="form-control form-control-lg"
              value={inforLogin.password}
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChangePassword}
            />
            <button
              className="btn btn-lg btn-primary pull-xs-right mt-3"
              type="submit"
              onClick={loginClick}
            >
              Sign in
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
export default Login;
