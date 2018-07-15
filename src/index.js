import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'
import ReactDOM from 'react-dom'


import SearchBar from './components/search_bar'
import VideoList from './components/video_list'


const API_KEY = 'AIzaSyAH5HJSHq2pdYuMljyXdyBV8AphDaSIriw';

class App extends Component {
  constructor(props){
    super(props);

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos});
    });

    this.state = { videos: [] };
  }

  render(){
    return (
      <div>
          <SearchBar />
          <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
