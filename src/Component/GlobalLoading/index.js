import React from "react";
import { useSelector } from "react-redux";
import loadingImage from "./../../assets/images/loading.gif";

function GlobalLoading(props) {
  const statusLoading = useSelector(
    (state) => state.statusLoading.statusLoading
  );
  let xhtml = null;
  if (statusLoading)
    xhtml = (
      <div className="backgorund-loading">
        <img src={loadingImage} className="icon-loading " alt="loadingImage" />
      </div>
    );
  return xhtml;
}

export default GlobalLoading;
