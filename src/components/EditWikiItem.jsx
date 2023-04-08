import React from "react";

const EditWikiItem = ({ id, title, content }) => {
  return (
    <>
      <input type="text" value={title} />
      <textarea value={content} name="" id="" cols="30" rows="10"></textarea>
    </>
  );
};

export default EditWikiItem;
