import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { fetchTag } from "./Redux/Action/tag";
import { actionFetchArticles } from "./Redux/Action/articles";
import GlobalLoanding from "./Component/GlobalLoading/index";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTag());
    dispatch(actionFetchArticles());
  }, []);

  const store = useSelector((state) => state);
  console.log("Selector Store: ", store);
  return (
    <div>
      <div className="container-fluid">
        <Header />
        <Footer />
      </div>
      <GlobalLoanding />
    </div>
  );
}

export default App;
