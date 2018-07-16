import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'
import ReactDOM from 'react-dom'


import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import VideoList from './components/video_list'


const API_KEY = 'AIzaSyAH5HJSHq2pdYuMljyXdyBV8AphDaSIriw';

class App extends Component {
  constructor(props){
    super(props);



    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
         videos: videos,
         selectedVideo: videos[0]
      });
    });
  }

  render(){
    return (
      <div>
          <SearchBar onSearchTermChange={ term => this.videoSearch(term)}/>
          <VideoDetail video = {this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
