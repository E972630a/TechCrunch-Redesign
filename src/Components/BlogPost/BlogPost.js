import React from "react";
import data from "../data/post.json";

class BlogPost extends React.Component {
  render() {
    {
      return (
        <div>
          <div className="square__post">
            {data.map(function (data, i) {
              return (
                <div key={i}>
                  <h2>{data.title}</h2>
                  <p>{data.date}</p>
                  <p>{data.content}</p>
                </div>
              );
            })}
          </div>

          <div className="recent__section">
            <h3>Recent Post</h3>
            {data.map(function (data, i) {
              return (
                <div key={i}>
                  <h4>{data.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default BlogPost;
