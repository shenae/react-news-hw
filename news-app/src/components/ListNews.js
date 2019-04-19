import React from 'react';
import ListItem from './ListItem';

export default function ListNews (props){
 let articles = props.articles;
 let list = articles&&articles[0]
 ? articles.map(item => (
  <ListItem article={item} />
 ))
 : "loading"


 
    return (
      <div>
        {list}
      </div>
    );
  }
