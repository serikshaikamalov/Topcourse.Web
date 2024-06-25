import React from "react";

export const HtmlView = ({ children }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: children,
      }}
    />
  );
};
