import React, { useEffect, useRef } from "react";
import Plyr from "plyr";
import "../../../node_modules/plyr/dist/plyr.css";

const SkVideoPlayer = ({ source, options, ...rest }) => {
  const innerRef = useRef();

  useEffect(() => {
    if (!innerRef.current) return;
    if (!innerRef.current?.plyr) {
      innerRef.current.plyr = new Plyr(".plyr-react", options ?? {});
    }

    if (innerRef.current && source) {
      innerRef.current.plyr.source = source;
    }
  }, [options, source]);

  return (
    <div>
      <video ref={innerRef} className="plyr-react plyr" {...rest} />
    </div>
  );
};

export default SkVideoPlayer;
