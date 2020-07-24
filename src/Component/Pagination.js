import React from 'react'
import axios from './../Axios/index'
import {useDispatch} from 'react-redux'
import * as actionsArticle from './../Redux/Action/articles'


export default function Pagination(props) {
    const {index} = props;
    const dispatch = useDispatch();
    const handlePagination = (i) => {  
        console.log("i= ", i)
        axios
        .get("/api/articles", {
            params:{
                limit: 10,
                offset: i*10
            }
        })
        .then(res => {
            dispatch(actionsArticle.actionLoadArticles(res.data.articles, res.data.articlesCount))
        })
        .catch(err =>{
            console.log("Error handle Pagination", err)
        })
    }
    return (
        <div>
            <li className="page-item" key={index}>
                {/* <a href="#" onClick={()=>handlePagination({ index })} className="page-link">{index + 1}</a> */}
                <button className="btn page-link" onClick={() => handlePagination( index )}>{ index + 1 }</button>
            </li>
        </div>
    )
}
