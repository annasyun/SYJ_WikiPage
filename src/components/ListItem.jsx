import React, { useState } from "react";
import Title from "./Title";
import Content from "./Content";

const ListItem = ({ id, title, content }) => {
  const [contentView, setContentView] = useState(false);
  return (
    <li>
      <Title
        title={title}
        contentView={contentView}
        setContentView={setContentView}
      />
      {contentView ? <Content content={content} /> : null}
    </li>
  );
};

export default ListItem;
