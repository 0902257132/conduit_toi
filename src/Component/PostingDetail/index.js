import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Title from "./Content";
import CommentOwner from "./CommentOwner";
import TotalComment from "./TotalComment";
import { actionFetchSlug } from "./../../Redux/Action/slugArticle";
import { actionFectchComment } from "./../../Redux/Action/comment";

function PostingDetailSite(props) {
  const { slug } = props.match.params;
  const dispatch = useDispatch();
  const article = useSelector((state) => state.ArticleSlug.slugArticle);
  const comments = useSelector((state) => state.Comments.listComments);
  const statusFeatureComment = sessionStorage.userName ? "block" : "none";
  // console.log("POSTING DETAIL SITE : ", props.match);
  useEffect(() => {
    dispatch(actionFetchSlug(slug));
    dispatch(actionFectchComment(slug));
  }, []);

  return (
    <div>
      {article && (
        <Banner
          title={article.title}
          username={article.author.username}
          date={article.createdAt}
        />
      )}
      <div className="container mb-150">
        {article && <Title content={article.body} taglist={article.tagList} />}
        <div className="row">
          <div className="offset-md-2 col-md-8">
            {/* Posting comment */}
            <div style={{ display: statusFeatureComment }}>
              <CommentOwner slug={slug} />
            </div>

            {/* all comment */}
            {comments &&
              comments.map((item, index) => (
                <div key={index}>
                  <TotalComment item={item} slug={slug} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostingDetailSite;
