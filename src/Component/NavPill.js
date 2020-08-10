import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavPillChild from "./NavPillChild";
import { actionFetchArticles } from "./../Redux/Action/articles";

function NavPill() {
  const state = useSelector((state) => state.Articles.tagNav);
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            data-toggle="tab"
            href="/"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            onClick={() => {
              dispatch(actionFetchArticles());
            }}
          >
            Global Feed
          </a>
        </li>
        {<NavPillChild tagNav={state} />}
      </ul>
    </div>
  );
}
export default NavPill;
