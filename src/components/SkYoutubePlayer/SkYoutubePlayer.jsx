import React, { useEffect, useState } from "react";

const SkYoutubePlayer = ({ videoId }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    var _player = new window.YT.Player("custom-youtube-iframe", {
      videoId: videoId,
      events: {
        onReady: onPlayerReady,
      },
    });

    console.log("_player: ", _player);

    setPlayer(_player);
  }, [videoId]);

  // Play and pause the player
  function onPlayerReady(event) {
    console.log("onPlayerReady", event);
    event.target.playVideo();

    // setTimeout(function () {
    //   event.target.pauseVideo();
    // }, 5000);
  }

  const play = () => {
    console.log("player: ", player);
    player.playVideo();
  };

  const pause = () => {
    console.log("player: ", player);
    player.pauseVideo();
  };

  const seekTo = (seconds = 10) => {
    console.log("player: ", player);
    player.seekTo(30);
  };

  return (
    <div>
      <iframe
        id="custom-youtube-iframe"
        width="100%"
        height="650px"
        src={
          `https://www.youtube.com/embed/${videoId}` +
          "?enablejsapi=1&showInfo=0&showsearch=0&rel=0&iv_load_policy=0&cc_load_policy=0&autoplay=0&modestbranding=1&autohide=2&controls=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="ytp-buttons">
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={seekTo}>Go to 20 seconds</button>
      </div>
    </div>
  );
};

export default SkYoutubePlayer;
