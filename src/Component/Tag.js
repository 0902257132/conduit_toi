import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionTagNav } from "./../Redux/Action/articles";

const Tag = () => {
  const listTagsName = useSelector((state) => state.Tags.listTags);
  const dispatch = useDispatch();
  const passTag = (tag) => {
    dispatch(actionTagNav(tag.item));
  };
  return (
    <div className="col-md-3 background-color-gray tag">
      <p>Popular tags</p>
      {listTagsName.map((item, index) => (
        <button className="btn" onClick={() => passTag({ item })} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
};
export default Tag;
