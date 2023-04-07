import React from "react";

const Title = ({ contentView, setContentView, title }) => {
  const handleContentView = () => {
    setContentView(!contentView);
  };
  return <div onClick={handleContentView}>{title}</div>;
};

export default Title;
