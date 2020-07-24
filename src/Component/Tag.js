import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "./../Axios/index";
import * as actionArticles from "./../Redux/Action/articles";

const Tag = () => {
    const listTagsName = useSelector(state => state.Tags.listTags)
    const dispatch = useDispatch();
    const passTag = tag =>{
        axios
                .get("/api/articles",{
                    params:{
                        tag: tag.item,
                        limit: 10
                    }
                })
                .then(res =>{
                    dispatch(actionArticles.actionLoadArticles(res.data.articles, res.data.articlesCount))
                    dispatch(actionArticles.actionTagNav(tag))
                })
                .catch(err =>{
                    console.log("Error pass Tag", err)
                })
    }
    return (
        <div className="col-md-3 background-color-gray tag">
            <p>Popular tags</p>
            {
                listTagsName.map((item, index)=>(
                   <button className="btn" onClick={()=>passTag({item})} key={index}>
                       {item}
                   </button>
                ))
            }
        
        </div>
    )
}
export default Tag