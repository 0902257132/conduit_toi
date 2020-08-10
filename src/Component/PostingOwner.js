import React from "react";

function PostingOwner(props) {
  //Method pass data to parent component
  // const sendData = () =>{
  //     props.parentCallback("Minh Ti in your area")
  // }
  const { userName, date } = props;
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-2">
            <a href="#">
              <img
                src="https://static.productionready.io/images/smiley-cyrus.jpg"
                className="avatar"
                alt="ava_image"
              />
            </a>
          </div>
          <div className="col-md-10">
            <a href="a.com" className="font-color-green">
              {userName}
            </a>
            <p className="date">{date}</p>
          </div>
        </div>
      </div>
      <div className="col-md-8 text-right">
        <button className="icon-heart">
          <i className="far fa-heart" />
          <span>0</span>
        </button>
      </div>
    </div>
  );
}
export default PostingOwner;
