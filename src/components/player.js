import React, { useEffect, useRef, useState } from "react"
import videojs from "video.js"
import "./videojs.css"

const generateVideoLink = name =>
  `${name}`

const usePlayer = ({ name, autoplay }) => {
  const options = {
    fill: true,
    fluid: true,
    autoplay,
    preload: "auto",
    aspectRatio: "16:9",
    liveui: false,
    html5: {
      hls: {
        enableLowInitialPlaylist: true,
        smoothQualityChange: true,
        overrideNative: true,
      },
    },
  }
  const videoRef = useRef(null)
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current, {
      ...options,
      controls: true,
      autoplay: autoplay,
      sources: [
        {
          src: generateVideoLink(name),
          type: "application/x-mpegURL",
        },
      ],
      controlBar: {
        fullscreenToggle: false,
        pictureInPictureToggle: false,
      },
    })
    setPlayer(vjsPlayer)

    return () => {
      if (player !== null) {
        player.dispose()
      }
    }
  }, [])
  useEffect(() => {
    if (player !== null) {
      player.src([
        {
          src: generateVideoLink(name),
          type: "application/x-mpegURL",
        },
      ])
    }
  }, [name])

  return videoRef
}

const VideoPlayerJS = ({ name, controls }) => {
  const playerRef = usePlayer({ name, controls })

  return (
    <div data-vjs-player style={{ position: "relative" }}>
      <video
        ref={playerRef}
        className="video-js vjs-tech vjs-big-play-centered"
        style={{ zIndex: 0 }}
      />
    </div>
  )
}

export default VideoPlayerJS