import React from "react";
import { useSelector } from "react-redux";
import NavPill from "./NavPill";
import PostingContent from "./PostingContent";
import PostingOwner from "./PostingOwner";
import Tag from "./Tag";
import Pagination from "./Pagination";
import Banner from "./Banner";

export function Body() {
  const listArticles = useSelector((state) => state.Articles.listArticles);
  const articlesCount = useSelector((state) => state.Articles.count);
  //method return data from child component
  // const callBackFunction =(childData) =>{
  //   console.log(childData)
  // }
  return (
    <div>
      <Banner />
      <div className="container mb-150">
        <div className="row">
          <div className="col-md-9 mt-5 tab-content" id="myTabContent">
            <NavPill />
            {listArticles.map((item, index) => (
              <div className="article-privew" key={index}>
                <PostingOwner
                  userName={item.author.username}
                  date={item.createdAt}
                  // parentCallback={callBackFunction}
                />
                <PostingContent
                  title={item.title}
                  description={item.description}
                  tagList={item.tagList}
                  slug={item.slug}
                />
              </div>
            ))}
            <ul className="Pagination">
              {Array(articlesCount / 10)
                .fill(1)
                .map((item, index) => (
                  <Pagination index={index} />
                ))}
            </ul>
          </div>
          <Tag />
        </div>
      </div>
    </div>
  );
}
export default Body;
