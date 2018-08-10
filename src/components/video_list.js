import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // etag 는 그냥 루프 돌때 유니크 key 가 있어야 해서 유니크한 값인 etag를 넣어준 것 뿐임.
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}/>
    );
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
