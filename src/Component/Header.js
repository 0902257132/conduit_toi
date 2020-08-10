import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "./Login";
import HomePage from "./Body";
import PostingDetail from "./PostingDetail/index";
import BookStore from "./BookStore/index";

function Header() {
  const statusAuthen = useSelector((state) => state.Authen.statusAuthenFeature);
  const statusNoneAuthen = useSelector(
    (state) => state.Authen.statusNoneAuthenFeature
  );
  const userName = useSelector((state) => state.Authen.userName);
  return (
    <Router>
      <div>
        <div className="row">
          <div className="col-md-9">
            <a href="/HomePage" className="font-color-green conduit-text">
              conduit
            </a>
          </div>
          <div className="col-md-3">
            <nav className="navbar navbar-inverse">
              <ul className="nav navbar-nav">
                <li style={{ display: "block" }}>
                  <NavLink to="/HomePage">Home</NavLink>
                </li>
                <li style={{ display: statusNoneAuthen }}>
                  <NavLink to="/SignIn">Sign in</NavLink>
                </li>
                <li style={{ display: statusNoneAuthen }}>
                  <NavLink to="/SignUp">Sign up</NavLink>
                </li>
                <li style={{ display: statusAuthen }}>
                  <NavLink to="/NewPost">New Post</NavLink>
                </li>
                <li style={{ display: statusAuthen }}>
                  <NavLink to="/Setting">Setting</NavLink>
                </li>
                <li style={{ display: statusAuthen }}>
                  <NavLink to="/userName">{userName}</NavLink>
                </li>
                <li>
                  <NavLink exact to="/BookStore">
                    Book store
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Route path="/SignIn">
          <Login />
        </Route>
        <Route path="/HomePage" component={HomePage} />
        <Route
          exact
          path="/PostingDetail/:slug"
          render={(props) => {
            return <PostingDetail {...props} />;
          }}
        />
        <Route path="/BookStore" component={BookStore} />
      </div>
    </Router>
  );
}
export default Header;
