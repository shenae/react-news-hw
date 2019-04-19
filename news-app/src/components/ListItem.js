import React from 'react';

export default function ListItem (props){

let article = props.article;
let item = article&&article.title 
  ? <React.Fragment>
    <h3>{article.title}</h3>
    <a href={article.url}>{article.url}</a>
    <br />
    <img src={article.urlToImage} alt="no image found" />
    <p>{article.content}</p>

  </React.Fragment>
  : ""



 
    return (
      <div>
        {item}
      </div>
    );
  }


