import React, { useState } from "react";
import axios from "./../../Axios/index";

function CommentOwner(props) {
  const [textComment, setTextComment] = useState("");
  const handleOnChange = (event) => {
    setTextComment(event.target.value);
  };
  const handleOnClick = () => {
    const result = axios.post(
      "/api/articles/" + props.slug + "/comments",
      {
        comment: {
          body: textComment,
        },
      },
      {
        headers: {
          Authorization: " Token " + sessionStorage.token,
        },
      }
    );
    console.log("ONCLICK", result);
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
