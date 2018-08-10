import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = '';

class App extends Component {
  constructor(props) {
    super(props);

    //상태 안에 들어가는 term 은 맘대로 써도 되지만 가독성있게 써주는게 좋다.
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      // this.setState({videos}); // 위와 아래의 코드는 같은 코드 이다.
      // // this.setState({videos: videos});
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

// VideoList 처럼 이렇게 속성으로 넣어주는 값은 VideoList 의 프로퍼티를 통해 들어가게된다. (파라미터라고 보면됨)
  render(){
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);  // 업데이트 간격을 주려고 lostash 사용. 간격이 없으면 계속 업데이트 하려고 해서 오히려 느려짐.
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}
ReactDom.render(<App/>, document.querySelector('.container'));
