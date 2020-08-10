import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as typeActions from "./../../Redux/Const/TagTypes";

function TotalComment(props) {
  const dispatch = useDispatch();
  const { author, body, createdAt } = props.item;
  const [status, setStatus] = useState("none");
  const userAuthen = sessionStorage.userName;
  const userAuthor = author.username;
  useEffect(() => {
    if (userAuthen === userAuthor) setStatus("block");
  }, []);

  const deleteComment = () => {
    dispatch({
      type: typeActions.DELETE_COMMENT,
      payload: {
        slug: props.slug,
        idPost: props.item.id,
        token: sessionStorage.token,
      },
    });
  };
  return (
    <div>
      <div className="card">
        <div className="card-block">
          <p className="card-text"> {body} </p>
        </div>
        <div className="card-footer">
          <a href="/">
            <img
              src="https://static.productionready.io/images/smiley-cyrus.jpg"
              className="avatar"
              alt="ava"
            />
          </a>
          <a href="/" className="comment-author ml-2">
            {author.username}
          </a>
          <span className="date-posted ml-2"> {createdAt} </span>
          <span className="mod-options text-right">
            <button
              className="btn btn-primary"
              style={{ display: status }}
              onClick={deleteComment}
            >
              delete
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TotalComment;
