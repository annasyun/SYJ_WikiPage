import { useParams } from "react-router-dom";
import { getWikiAxios, updateWikiAxios } from "../api/wiki";
import { useState, useEffect } from "react";
import ItemTitle from "./ItemTitle";
import ItemContent from "./ItemContent";
import useInput from "../hooks/useInput";

const WikiItem = () => {
  const { id } = useParams();
  const [listItem, setListItem] = useState(null);

  const findListItem = async () => {
    const wikiList = await getWikiAxios();
    const foundListItem = wikiList.find((item) => item.id === Number(id));
    setListItem(foundListItem);
  };
  const [editTitle] = useInput("");
  const [editContent] = useInput("");
  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
    setEditable(!editable);
  };
  console.log(editable);

  useEffect(() => {
    findListItem();
  }, [id]);

  useEffect(() => {
    if (listItem) {
      editTitle.setValue(listItem.title);
      editContent.setValue(listItem.content);
    }
  }, [listItem]);

  if (!listItem) {
    return <div>Loading...</div>;
  }

  const updateWiki = async () => {
    await updateWikiAxios(id, {
      title: editTitle.value,
      content: editContent.value,
    });
    const updatedItem = {
      ...listItem,
      title: editTitle.value,
      content: editContent.value,
    };
    setListItem(updatedItem);
    setEditable(false);
  };

  return (
    <div>
      {editable ? (
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
          <button type="button" onClick={updateWiki}>
            저장
          </button>
        </>
      ) : (
        <>
          <ItemTitle id={listItem.id} title={listItem.title} />
          <ItemContent content={listItem.content} />
          <button type="button" onClick={handleEdit}>
            수정
          </button>
        </>
      )}
    </div>
  );
};

export default WikiItem;
