import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as typeActions from "./../../Redux/Const/TagTypes";

function CommentOwner(props) {
  const dispatch = useDispatch();
  const [textComment, setTextComment] = useState("");
  const handleOnChange = (event) => {
    setTextComment(event.target.value);
  };
  const handleOnClick = () => {
    dispatch({
      type: typeActions.POST_COMMENT,
      payload: {
        slug: props.slug,
        comment: textComment,
        token: sessionStorage.token,
      },
    });
  };
  return (
    <div className="card comment-form">
      <div className="card-block">
        <textarea
          className="form-control form-comment"
          row="3"
          placeholder="Writte a comment ..."
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleOnClick}
        >
          Post comment
        </button>
      </div>
    </div>
  );
}

export default CommentOwner;
