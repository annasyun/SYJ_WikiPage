import React from "react";
import useInput from "../hooks/useInput";

const EditWikiItem = ({ id, title, content }) => {
  const [editTitle] = useInput(title);
  const [editContent] = useInput(content);

  console.log(editTitle);
  return (
    <>
      <input
        type="text"
        value={editTitle.value}
        onChange={editTitle.onchange}
      />
      <textarea
        value={editContent.value}
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={editContent.onchange}
      ></textarea>
    </>
  );
};

export default EditWikiItem;
