import React from 'react';
import YouTube from 'react-youtube';

function ReactYoutube(props){
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    function onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }

    return <YouTube videoId={props.id} opts={opts} onReady={onReady} />;
}
export default ReactYoutube