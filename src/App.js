import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import * as typeActions from "./Redux/Const/TagTypes";
import * as typeGraphQL from "./Redux/Const/TagTypes";
import { actionFetchArticles } from "./Redux/Action/articles";
import GlobalLoanding from "./Component/GlobalLoading/index";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: typeActions.FETCH_TAG,
    });
    dispatch(actionFetchArticles());
    dispatch({
      type: typeActions.FETCH_LIST_BOOKSTORE,
    });
  }, []);

  // const query = `
  // query {
  //   allTests {
  //     name
  //     id
  //   }
  // }`;
  // const getAllTests = async () => {
  //   await axios
  //     .post("http://localhost:3000/admin/api", {
  //       query,
  //     })
  //     .then((res) => console.log("ALL_TEST : ", res))
  //     .catch((err) => console.log("KEYSTONE API EROOR : ", err));
  // };
  // getAllTests();

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
