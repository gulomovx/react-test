import React from 'react'
import ReactPlayer from 'react-player'
import { Player, ControlBar } from 'video-react';

import 'video-react/dist/video-react.css'; // import css


const VideoPlayer = () => {
  return (
      <div className=' mb-8 max-w-[3450px] mx-auto'>
          <Player  src="https://vod-progressive.akamaized.net/exp=1701958885~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4424%2F18%2F472122051%2F2102631665.mp4~hmac=e17feaef3fcf83c0325afd48bd2154c48c29c1575309305beda23ed66534a727/vimeo-prod-skyfire-std-us/01/4424/18/472122051/2102631665.mp4">
      <ControlBar autoHide={false} className="my-class" />
    </Player>
          {/* <ReactPlayer width={1230} url='https://youtube.com/shorts/GV_FOwUawnA?si=m9yAwgvyYKaggWL9' /> */}
    </div>
  )
}

export default VideoPlayer