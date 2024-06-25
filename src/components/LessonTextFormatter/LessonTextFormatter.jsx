import React, { useEffect } from "react";
import Plyr from "plyr";
import "../../../node_modules/plyr/dist/plyr.css";

const LessonTextFormatter = ({ text, lesson }) => {
  useEffect(() => {
    /**
     * 1. Find all videos in the text
     * 2. Convert to div element with information about video
     */
    const videos = document.querySelectorAll("oembed");

    if (videos) {
      videos.forEach((_v, inx) => {
        console.log("_v: ", _v);

        const url = _v.getAttribute("url");
        console.log("url: ", url);
        let videoId;
        if (url.includes("/embed/") || url.includes("https://youtu.be/")) {
          const paths = url.split("/");
          videoId = paths[paths.length - 1];
        } else {
          videoId = url.split("?")[1].split("=")[1];
        }

        console.log("videoId: ", videoId);

        const v = document.createElement("div");
        v.setAttribute("id", `player_${inx}`);
        v.setAttribute("data-plyr-provider", "youtube");
        v.setAttribute("data-plyr-embed-id", videoId);
        _v.parentElement.append(v);

        new Plyr(`#player_${inx}`, {
          youtube: { rel: 0 },
        });
      });
    }
  }, [text]);

  useEffect(() => {
    const videos = document.querySelectorAll("a");
    if (videos) {
      videos.forEach((_v, inx) => {
        console.log("_v: ", _v);

        const url = _v.getAttribute("href");
        let videoURL;
        if (
          url.startsWith(
            "https://storage.googleapis.com/frontends-f1a04.appspot.com/videos/"
          )
        ) {
          videoURL = url;
        }

        if (!videoURL) {
          return;
        }

        const htmlVideo = document.createElement("video");
        htmlVideo.src = url;
        htmlVideo.style = "width: 100%";
        htmlVideo.setAttribute('controlsList', 'nodownload')
        // htmlVideo.autoplay = true;
        htmlVideo.controls = true;
        _v.parentElement.append(htmlVideo);
        _v.remove();
      });
    }
  }, [text]);

  return (
    <div className="lesson__text">
      <div
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </div>
  );
};

export default LessonTextFormatter;
