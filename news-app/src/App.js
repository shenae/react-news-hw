import React, { Component } from 'react';
import './App.css';
import ListNews from './components/ListNews';

const API_KEY = process.env.REACT_APP_API_KEY;
// const URL = `https://api.openweathermap.org/data/2.5/weather?zip=`;
// const URL_API = `,us&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      sourcename: '',
    }
  }


 getNews = async () => {
  let liveURL = `https://newsapi.org/v2/top-headlines?`;
  let url2 = 'country=us&';
  let url_api = `apiKey=${API_KEY}`;

await fetch(liveURL + url2 + url_api)
.then(response => {
  console.log(response);
  return response.json()
})
.then( data => {
  console.log(data.articles);
  this.setState({
    articles: data.articles,
  })
})}

componentDidMount = async () => {
  await this.getNews();
}

  render() {
    let articles = this.state.articles;
    let list = articles&&articles[0]
    ? <ListNews articles={articles} />
    : "loading"
    return (
      <div className="App">
      <h1>React_News</h1>
     {list}
      </div>
    );
  }
}

export default App;
