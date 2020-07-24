import React, { useEffect } from "react";
import { useDispatch  } from "react-redux";
import axios from "./Axios/index";
import Body from "./Component/Body";
import Header from "./Component/Header";
// import Footer from "./Component/Footer"
import * as actionArticles from "./Redux/Action/articles";
import * as actionsTag from "./Redux/Action/tag";
import GlobalLoanding from "./Component/GlobalLoading/index";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getTagsFromAPI() {
             await axios
                .get("/api/tags")
                .then(res => {
                    dispatch(actionsTag.loadTag(res.data.tags))
                })
                .catch(err => {
                    console.log("getTagFromAPI", err)
                })
        }
        async function getArticlesFromAPI(){
            await axios
                .get("/api/articles",{
                    params:{
                        limit: 10
                    }
                })
                .then(res =>{
                    dispatch(actionArticles.actionLoadArticles(res.data.articles, res.data.articlesCount))
                })
                .catch(err =>{
                    console.log("Error get API articles", err)
                })
            
        }
        getArticlesFromAPI();
        getTagsFromAPI();
    }, []);
  return (
      <div>
        <div className="container-fluid">
            <Header />
            {/* <Body /> */}
            {/* <Footer /> */}
        </div>
        <GlobalLoanding />
      </div>
  );
}

export default App;
